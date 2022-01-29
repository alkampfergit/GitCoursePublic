# Branching 101

## What is a branch

A branch is nothing more than a file in refs/heads subfolder of .git internal database, it stores the id of a commit. 

Thanks to this simple paradigm we can have more branch files to point to different commits, thus the commit history is a tree of commit, where **each branch file points to a commit, thus allowing the user to parallelize work**.

Working folder is the folder you are working to, with checkout command you can switch between branches and **immediately the content of your working folder will be updated with the content of the folder pointed to that commit**.