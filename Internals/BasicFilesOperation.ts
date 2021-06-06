import { formatWithOptions } from 'util';
import yargs = require('yargs/yargs');

var fs = require('fs');

export function getBlobHash(fileName: string): string {
    
    //reading file in memory
    console.log("Reading file", fileName);
    const fileData: [] = fs.readFileSync(fileName);
    
    //blob string directly converted in ascii
    const header: string = "blob " + fileData.length.toString();
    var headerByte = Buffer.from(header, "ascii");
    headerByte = Buffer.concat([headerByte,  Buffer.from('\0')]);
    const rawData1: [] = fs.readFileSync("c:\\temp\\test.txt");
    console.log("rawData1", rawData1, rawData1.length);
    const fd = fs.openSync("c:\\temp\\test.txt",'w');
    fs.writeSync(fd, headerByte, 0, headerByte.length, null, (err: any, bytes: any, buffer: any) => {});
    fs.writeSync(fd, fileData, 0, fileData.length, null, (err: any, bytes: any, buffer: any) => {});
    fs.close(fd);

    var crypto = require('crypto')
    var shasum = crypto.createHash('sha1');
    const rawData: [] = fs.readFileSync("c:\\temp\\test.txt");
    console.log("rawData", rawData, rawData.length);
    shasum.update(rawData);
    return shasum.digest('hex');
}

interface Arguments {
    filename: string;
}

const argv = yargs(process.argv.slice(2)).options({
    "filename": { type: 'string', alias: 'f', demandOption: true }
  }).argv as Arguments;

const hash: string = getBlobHash(argv.filename);
console.log("Hash", hash);