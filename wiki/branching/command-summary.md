# Commands for branching

## git branch

> git-branch - List, create, or delete branches

From [Official Documentation](https://git-scm.com/docs/git-branch) 

## git reflog

> git-reflog - git-reflog - Manage reflog information

From [Official Documentation](https://git-scm.com/docs/git-reflog) 

Git reflog has different subcommands, the default, show, will list all the reference of HEAD, it means all the position the **HEAD was in the past** effectively listing the history of your committed changes.

## Git checkout

A real useful command that has many different purposes:

### Undo all of your local modification

This command will undo all of your local modification, all file content in the working folder will be reverted to the content stored in actual commit.

> Pay attention, this is a destructive command, if you have uncommitted changes they will be deleted

```bash
git checkout -- .
```

### Switch branch

Change current branch to branchname, update all the content of the working folder to reflect the content of that branch. If you have uncommitted changes, it is possible that you cannot switch branch to **prevent you losing local changes**. It is a safe command.

```bash
git branchname
```

### View content of a commit

Change the content of the folder to reflect the content of commit specified, you are in detatched HEAD, you are not supposed to modify file. It is usually used to have a look at what was the content of a commit in the past.

```bash
git commit-id
```

### Change the commit that the branch is pointing to

If for some reason you want to forcely change the content of the current branch to point to another commit, you can simply use the **git reset** command with the --force option and **the commit id or the refs you want to point to**

Ex: Change the current branch to point to a specific commit.

```bash
git reset --hard 45afd43 
```

Ex. You are on develop, you want to dischard every local commits because it is only a test and you want your local develop to be equal to the one on the remote

```bash
git reset --hard origin/develop
```
