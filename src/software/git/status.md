---
date: 2020-05-05
title: 纵向查看
icon: list
order: 4
author: 廖雪峰
category: Git
tag:
  - Git
  - 软件
copyright: Copyright by 廖雪峰 Edited by Mr.Hope
---

我们已经成功地添加并提交了一个 readme.txt 文件，继续修改 readme.txt 文件，改成如下内容:

```md
Git is a distributed version control system.
Git is free software.
```

现在，运行 `git status` 命令看看结果:

```sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

`git status` 命令可以输出仓库当前的状态，上面的命令输出告诉我们，readme.txt 被修改过了，但还没有准备提交的修改。

:::: tip 简介输出

`git status` 命令的输出十分详细，但其用语有些繁琐。Git 有一个选项可以帮您缩短状态命令的输出，这样可以以简洁的方式查看更改。如果您使用 `git status -s` 命令或 `git status --short` 命令，您将得到一种格式更为紧凑的输出。

输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。

新添加的未跟踪文件前面有 `??` 标记，新添加到暂存区中的文件前面有 `A` 标记，修改过的文件前面有 `M` 标记。

::: details 案例

```sh
$ git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

上面的状态报告显示: `README` 文件在工作区已修改但尚未暂存，而 `lib/simplegit.rb` 文件已修改且已暂存。`Rakefile` 文件已修改，暂存后又作了修改，因此该文件的修改中既有已暂存的部分，又有未暂存的部分。

:::

::::

Git 现在只告诉我们 readme.txt 被修改了，我们用 `git diff` 这个命令能看看具体修改了什么内容:

```sh
$ git diff readme.txt
diff --git a/readme.txt b/readme.txt
index 46d49bf..9247db6 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
-Git is a version control system.
+Git is a distributed version control system.
 Git is free software.
```

`git diff` 顾名思义就是查看 difference，显示的格式正是 Unix 通用的 diff 格式，可以从上面的命令输出看到，我们在第一行添加了一个 distributed 单词。

知道了对 readme.txt 作了什么修改后，再把它提交到仓库就放心多了，提交修改和提交新文件是一样的两步，第一步是 `git add`:

```sh
$ git add readme.txt
--no output --
```

同样没有任何输出。在执行第二步 `git commit` 之前，我们再运行 `git status` 看看当前仓库的状态:

```sh
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    modified:   readme.txt
```

`git status` 告诉我们，将要被提交的修改包括 readme.txt，下一步，就可以放心地提交了:

```sh
$ git commit -m "add distributed"
[master e475afc] add distributed
 1 file changed, 1 insertion(+), 1 deletion(-)
```

提交后，我们再用 `git status` 命令看看仓库的当前状态:

```sh
$ git status
On branch master
nothing to commit, working tree clean
```

Git 告诉我们当前没有需要提交的修改，而且，工作目录是干净(working tree clean)的。

## 小结

- 要随时掌握工作区的状态，使用 `git status` 命令。

- 如果 `git status` 告诉您有文件被修改过，用 `git diff` 可以查看修改内容。
