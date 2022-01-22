# Internal commands examined in Git Internals

## git hash-object

> git-hash-object - Compute object ID and optionally creates a blob from a file

From [Official Documentation](https://git-scm.com/docs/git-hash-object) 

First command that explain how git stores a binary stream (usually a file) in its internal database.

## git cat-file

> git-cat-file - Provide content or type and size information for repository objects

From [Official Documentation](https://git-scm.com/docs/git-cat-file) 

With options -t it can show the type of the object stored inside a binary blob in internal Git database, with -p option it can print the content of a binary blob.

## git ls-files

> git-ls-files - Show information about files in the index and the working tree

From [Official Documentation](https://git-scm.com/docs/git-ls-files) 

With options -v --stage shows more information on files staged on the index.

git ls-files -v --stage

It gives you the list of files git stores in the index as well as status of the file itself, a typical output can be 

```bash
H 100644 8d0e41234f24b6da002d962a26c2495ea16a425f 0     readme.md
H 100644 03a45f717f4d93ec571c2ab787299e515e4f9f72 0     src/hellogit.ts
```


