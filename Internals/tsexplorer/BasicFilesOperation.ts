import yargs = require('yargs/yargs');
var zlib = require('zlib');

var fs = require('fs');

function createGitCompressedStream(fileName: string): Buffer {
  //reading file in memory
  const fileData: [] = fs.readFileSync(fileName);
    
  //blob string directly converted in ascii
  const header: string = "blob " + fileData.length.toString();
  var headerBuffer = Buffer.from(header, "ascii");
  return Buffer.concat([headerBuffer,  Buffer.from('\0'), Buffer.from(fileData)]);
}

/**
 * Create git destination blob file in memory, write to destination folder
 * and return the hash of the file (the name of the file.)
 * @param fileName 
 * @param destinationDir 
 * @returns 
 */
export function addFile(fileName: string, destinationDir: string): string {
    
    const fileContent = createGitCompressedStream(fileName);
  
    /*
    // If you really want to write the file somewhere, this will be the uncompressed version of the file
    const fd = fs.openSync("c:\\temp\\test.txt",'w');
    fs.writeSync(fd, headerByte, 0, headerByte.length, null, (err: any, bytes: any, buffer: any) => {});
    fs.writeSync(fd, fileData, 0, fileData.length, null, (err: any, bytes: any, buffer: any) => {});
    fs.close(fd);
    */

    const crypto = require('crypto')
    const shasum = crypto.createHash('sha1');

    shasum.update(fileContent);
    const hash = shasum.digest('hex');

    // Ok now we need to write the file into a directory
    var deflatedContent = zlib.deflateSync(fileContent);
    fs.writeFileSync(destinationDir + "/" + hash, deflatedContent)
    return hash;
}

export function inflateFile(inputFileName: string, outputFileName: string) {
    const fileData: [] = fs.readFileSync(inputFileName);
    const inflated = zlib.inflateSync(fileData);
    console.log("Binary content", inflated);
    fs.writeFileSync(outputFileName, inflated);
}

interface Arguments {
    filename: string;
    operation: string;
    destinationDir: string;
    outputFile: string;
}

const argv = yargs(process.argv.slice(2)).options({
    "operation": {choices: ['hash', 'inflate'], alias: 'o', demandOption: true},
    "filename": { type: 'string', alias: 'f', demandOption: true },
    "destinationDir" : {type: 'string', demandOption: false},
    "outputFile" : {type: 'string', demandOption: false},
  }).argv as Arguments;

switch (argv.operation) {
    case 'hash':
        const hash: string = addFile(argv.filename, argv.destinationDir);
        console.log("Hash", hash)
        break;
    case 'inflate':
        inflateFile(argv.filename, argv.outputFile);
        break;
    default:
      console.log('operation not supported');
  }
