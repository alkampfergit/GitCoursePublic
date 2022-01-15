# Internal commands examined in Git Internals

## git hash-object

> git-hash-object - Compute object ID and optionally creates a blob from a file

From [Official Documentation](https://git-scm.com/docs/git-hash-object) 

First command that explain how git stores a binary stream (usually a file) in its internal database.

## git cat-file

> git-cat-file - Provide content or type and size information for repository objects

From [Official Documentation](https://git-scm.com/docs/git-cat-file) 

With options -t it can show the type of the object stored inside a binary blob in internal Git database, with -p option it can print the content of a binary blob.
