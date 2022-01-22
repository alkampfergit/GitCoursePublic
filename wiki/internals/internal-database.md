# Git Internal Database

Git internal database code is found in the internals folder.

Basically Git uses an internal database where files are stored in binary format, with a **simple header, compressed, and named after SHA1 of the content**. Using SHA1 will provide for simple error checking strategy, because if the process crashes while writing the file, the resulting file **will be unreadble (unable to uncompress) or uncompressed content will not match the real content of the file**

## Basic concept

Once you issued *git init* that folder is now under *git control* and the content of the folder (except what is contained inside .git internal folder) is called **Working Folder**. This means that every file that is contained in that folder is part of the working folder and can be managed by git.

## Adding files

Command *git add* is used to add files to the next *snapshot* of the folder, basically it tells git **store content of the file into internal database, and include actual version in the next snapshot**. Command to understand status of the working folder is *git status* and internally uses the index to understand which files were ready to be committed (files added with git add command).

If you want to look at the what the index contains, command git ls-files is used.