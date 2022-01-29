# Closing branches

We have a situation where you have a branch called SLB (short lived branch) that represent a feature or bugfix and you need to close on the MAIN branch that represent the stable branch and the branch **SLB originates from**.

## Merge strategy

* *git checkout SLB*: Checkout branch SLB
* *git merge MAIN*: issue a merge with the main branch
* Now you are **still on SLB branch** but you have incorporated all modification of MAIN, **you need to check if everything is ok** (code compile, tests are green)
* *git checkout MAIN*: move back to MAIN branch
* *git merge SLB*: issue a merge with SLB branch, this will result in a fast-forward (you merged SLB before)
* *git branch -d SLB*: delete SLB branch because it served its purpose.

You had created a new commit that is the merge between the commits on SLB and those one on MAIN.

## Rebase strategy

The rebase strategy only differs in the second step, instead of issuing a merge, you are issuing a rebase, all other steps are the same.

* *git checkout SLB*: Checkout branch SLB
* *git rebase MAIN*: issue a rebase with the main branch
* Now you are **still on SLB branch** but you have incorporated all modification of MAIN, **you need to check if everything is ok** (code compile, tests are green)
* *git checkout MAIN*: move back to MAIN branch
* *git merge SLB*: issue a merge with SLB branch, this will result in a fast-forward (you merged SLB before)
* *git branch -d SLB*: delete SLB branch because it served its purpose.