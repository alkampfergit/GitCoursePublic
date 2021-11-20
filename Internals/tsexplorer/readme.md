# TsExplorer

Just a simple typescript example that allows you to understand how git commits are formed at binary level.

## Usage

You need to have typescript and ts-node installed, then you should install modules

```bash
npm install -g typescript
npm install -g ts-node

npm install
```

Now you can use this simple utility to examine a commit in any of your repository **with this simple command line**, just replacing commit-file with the full path of a file that contains an object compressed in git.

```bash
ts-node .\BasicFilesOperation.ts -f commit-file -o inflate --outputFile c:\temp\inflated.txt

#example
ts-node .\BasicFilesOperation.ts -f c:\develop\myproject\.git\objects\e1\f2c0ea9f9819db8712ab61c8d87050509917b9 -o inflate --outputFile c:\temp\inflated.bin
```

A typical output will simply show a raw binary content and then will extract full content of the file in c:\temp\inflated.bin. **You can open inflated.bin with a text editor if the original content of the blob was a text file, this file contains RAW blob content**. 

