# Git as a virtual file system

Git is basically a **Virtual File System**, virtual because it is not based on direct managing a physical storage, but it is based on existing File System (like ext4 or NTFS), but it is indeed a File System because it is aimed to manage files.

To better understand how git works internally it is nice to use some *methaphor* that helps you in figuring what is going on under the hood.

## A developer basic needs

When you develop a software (but in many other situations) you wish for some **features of the file system you are using** because developing source code is basically different that simply store files.

A standard workflow in developing is based on: write code, reach a stable point, write code, reach another stable point and so on. For stable point I indend any point in time where you look at your code and you told yourself, **I need to save the content AT THIS TIME**. This can happen when

- You finished implementing a feature
- You fixed a bug
- You want to explore a different way to solve a problem but not losing the actual try
- ...

## A world without Git

If you do not have git, a simple strategy to solve your need is compression. Whenever you **want to save content of your code you can:**

1. Compress everything 
2. Give to the resulting file a nice meaningful name
3. Store the compressed file somewhere.
4. Resume work.

In any moment in time you can **take one of the compressed version and you can uncompress to another folder**. This will allow you to look at how code was in the past, compare with the actual code, restore a previous file and so on.

This is annoying because it is a manual process, how about to automate the process?

> This automation is called Git.

You can look at Git as a **tool that takes images of the content of a folder zipping all content into an internal database**. 