# Git Internal Database

Git internal database code is found in the internals folder.

Basically Git uses an internal database where files are stored in binary format, with a **simple header, compressed, and named after SHA1 of the content**. Using SHA1 will provide for simple error checking strategy, because if the process crashes while writing the file, the resulting file **will be unreadble (unable to uncompress) or uncompressed content will not match the real content of the file**