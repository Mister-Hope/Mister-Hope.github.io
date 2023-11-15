---
date: 2020-05-04
title: 修改管理
icon: change
order: 8
author: 廖雪峰
category: Git
tag:
  - Git
  - 软件
copyright: Copyright by 廖雪峰 Edited by Mr.Hope
---

## 管理修改

Git 比其他版本控制系统设计得优秀，因为 Git 跟踪并管理的是修改，而非文件。

您会问，什么是修改? 比如您新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。

为什么说 Git 管理的是修改，而不是文件呢? 我们还是做实验。第一步，对 readme.txt 做一个修改，比如加一行内容:

```sh
$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes.
```

然后，添加:

```sh
$ git add readme.txt
# nothing
$ git status
  On branch master
  Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)
        modified:   readme.txt
```

然后，再修改 readme.txt:

```sh
$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
```

提交:

```sh
$ git commit -m "git tracks changes"
[master 519219b] git tracks changes
 1 file changed, 1 insertion(+)
```

提交后，再看看状态:

```sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

怎么第二次的修改没有被提交? 我们回顾一下操作过程:

第一次修改 → `git add` → 第二次修改 → `git commit`

您看，我们前面讲了，Git 管理的是修改，当您用 `git add` 命令后，在工作区的第一次修改被放入暂存区，准备提交，但是，在工作区的第二次修改并没有放入暂存区，所以，`git commit` 只负责把暂存区的修改提交了，也就是第一次的修改被提交了，第二次的修改不会被提交。

提交后，用 `git diff HEAD -- readme.txt` 命令可以查看工作区和版本库里面最新版本的区别:

```sh
$ git diff HEAD -- readme.txt
diff --git a/readme.txt b/readme.txt
index 76d770f..a9c5755 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,4 +1,4 @@
 Git is a distributed version control system.
 Git is free software distributed under the GPL.
 Git has a mutable index called stage.
-Git tracks changes.
+Git tracks changes of files.
```

可见，第二次修改确实没有被提交。

那怎么提交第二次修改呢? 您可以继续 `git add` 再 `git commit`，也可以别着急提交第一次修改，先 `git add` 第二次修改，再 `git commit`，就相当于把两次修改合并后一块提交了:

第一次修改 → `git add` → 第二次修改 → `git add` → `git commit`

好，现在，把第二次修改提交了，然后开始小结。

### 管理小结

现在，您又理解了 Git 是如何跟踪修改的，每次修改，如果不用 `git add` 到暂存区，那就不会加入到 `commit` 中。

## 撤消对文件的修改

自然，您是不会犯错的。不过现在是凌晨两点，您正在赶一份工作报告，您在 readme.txt 中添加了一行:

```sh
$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.
```

在您准备提交前，一杯咖啡起了作用，您猛然发现了 `'stupid boss'` 可能会让您丢掉这个月的奖金!

既然错误发现得很及时，就可以很容易地纠正它。您可以删掉最后一行，手动把文件恢复到上一个版本的状态。如果用 `git status` 查看一下:

```sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

您可以发现，Git 会告诉您，`git checkout -- <file>` 可以丢弃工作区的修改:

```sh
git checkout -- readme.txt
```

命令 `git checkout -- readme.txt` 意思就是，把 readme.txt 文件在工作区的修改全部撤销，这里有两种情况:

一种是 readme.txt 自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

一种是 readme.txt 已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

总之，就是让这个文件回到最近一次 `git commit` 或 `git add` 时的状态。

现在，看看 readme.txt 的文件内容:

```sh
$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
```

文件内容果然复原了。

`git checkout -- file` 命令中的 `--` 很重要，没有 `--`，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到 `git checkout` 命令。

::: warning

请务必记得 `git checkout -- <file>` 是一个危险的命令。您对那个文件在本地的任何修改都会消失——Git 会用最近提交的版本覆盖掉它。

除非您确实清楚不想要对那个文件的本地修改了，否则请不要使用这个命令。

:::

## 取消暂存的文件

现在假定是凌晨 3 点，您不但写了一些胡话，还 `git add` 到暂存区了:

```sh
$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.

git add readme.txt
```

庆幸的是，在 `commit` 之前，您发现了这个问题。用 `git status` 查看一下，修改只是添加到了暂存区，还没有提交:

```sh
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    modified:   readme.txt
```

Git 同样告诉我们，用命令 `git reset HEAD <file>` 可以把暂存区的修改撤销掉(unstage)，重新放回工作区:

```sh
$ git reset HEAD readme.txt
Unstaged changes after reset:
M    readme.txt
```

`git reset` 命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用 `HEAD` 时，表示当前的指针(最新的版本)。

再用 `git status` 查看一下，现在暂存区是干净的，工作区有修改:

```sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   readme.txt
```

还记得如何丢弃工作区的修改吗?

```sh
git checkout -- readme.txt

$ git status
On branch master
nothing to commit, working tree clean
```

整个世界终于清静了!

::: tip

那么如果您想要丢弃工作区和暂存区全部更改呢? 不要忘了 `HEAD` 就是当前指针，所以

```sh
git reset --hard HEAD
```

就是丢弃工作区与暂存区的全部文件啦。

:::

现在，假设您不但改错了东西，还从暂存区提交到了版本库，怎么办呢? 还记得版本回退一节吗? 可以回退到上一个版本。不过，这是有条件的，就是您还没有把自己的本地版本库推送到远程。还记得 Git 是分布式版本控制系统吗? 我们后面会讲到远程版本库，一旦您把 `stupid boss` 提交推送到远程版本库，您就真的惨了……

### 撤销小结

场景 1: 当您改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 `git checkout -- file`。

场景 2: 当您不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令 `git reset HEAD <file>`，就回到了场景 1，第二步按场景 1 操作。

场景 3: 已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。

---

## 删除文件

### 如何删除文件

在 Git 中，删除也是一个修改操作，我们实战一下，先添加一个新文件 test.txt 到 Git 并且提交:

```sh
git add test.txt

$ git commit -m "add test.txt"
[master b84166e] add test.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt
```

一般情况下，您通常直接在文件管理器中把没用的文件删了，或者用 `rm` 命令删了:

```sh
rm test.txt
```

这个时候，Git 知道您删除了文件，因此，工作区和版本库就不一致了，`git status` 命令会立刻告诉您哪些文件被删除了:

```sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    deleted:    test.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

现在您有两个选择，一是确实要从版本库中删除该文件，那就用命令 `git rm` 删掉，并且 `git commit`:

```sh
$ git rm test.txt
rm 'test.txt'

$ git commit -m "remove test.txt"
[master d46f35e] remove test.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 test.txt
```

现在，文件就从版本库中被删除了。

### 撤销删除

另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本:

```sh
git checkout -- test.txt
```

`git checkout` 其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

### 删除小结

命令 `git rm` 用于删除一个文件。如果一个文件已经被提交到版本库，那么您永远不用担心误删，但是要小心，您只能恢复文件到最新版本，您会丢失最近一次提交后您修改的内容。
