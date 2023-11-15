---
date: 2020-05-04
title: 远程仓库
icon: remote
order: 9
author: 廖雪峰
category: Git
tag:
  - Git
  - 软件
copyright: Copyright by 廖雪峰 Edited by Mr.Hope
---

## 什么是远程仓库

Git 是分布式版本控制系统，同一个 Git 仓库，可以分布到不同的机器上。怎么分布呢? 最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。

实际情况往往是这样，找一台电脑充当服务器的角色，每天 24 小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。

完全可以自己搭建一台运行 Git 的服务器，不过现阶段，为了学 Git 先搭个服务器绝对是小题大作。好在这个世界上有个叫 GitHub 的神奇的网站，从名字就可以看出，这个网站就是提供 Git 仓库托管服务的，所以，只要注册一个 GitHub 账号，就可以免费获得 Git 远程仓库。

在继续阅读后续内容前，请自行注册 GitHub 账号。由于您的本地 Git 仓库和 GitHub 仓库之间的传输是通过 SSH 加密的，所以，需要一点设置:

- 第 1 步: 创建 SSH Key。在用户主目录下，看看有没有.ssh 目录，如果有，再看看这个目录下有没有 id_rsa 和 id_rsa.pub 这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开 Shell (Windows 下打开 Git Bash)，创建 SSH Key:

  ```sh
  ssh-keygen -t rsa -C "youremail@example.com"
  ```

  您需要把邮件地址换成您自己的邮件地址，然后一路回车，使用默认值即可，由于这个 Key 也不是用于军事目的，所以也无需设置密码。

  如果一切顺利的话，可以在用户主目录里找到.ssh 目录，里面有 id_rsa 和 id_rsa.pub 两个文件，这两个就是 SSH Key 的秘钥对，id_rsa 是私钥，不能泄露出去，id_rsa.pub 是公钥，可以放心地告诉任何人。

- 第 2 步: 登陆 GitHub，点击右上角头像，进入设置。

  进入安全设置下的 SSH 公钥界面。

  在标题中填写公钥的备注名称，把 id_rsa.pub 文件的内容粘贴到底下的输入框中。

为什么 GitHub 需要 SSH Key 呢? 因为 GitHub 需要识别出您推送的提交确实是您推送的，而不是别人冒充的，而 Git 支持 SSH 协议，所以，GitHub 只要知道了您的公钥，就可以确认只有您自己才能推送。

当然，GitHub 允许您添加多个 Key。假定您有若干电脑，您一会儿在公司提交，一会儿在家里提交，只要把每台电脑的 Key 都添加到 GitHub，就可以在每台电脑上往 GitHub 推送了。

最后友情提示，在 GitHub 上免费托管的 Git 仓库，任何人都可以看到喔(但只有您自己才能改)。所以，不要把敏感信息放进去。

如果您不想让别人看到 Git 库，一是让 GitHub 把公开的仓库变成私有的，这样别人就看不见了(不可读更不可写)。另一个办法是自己动手，搭一个 Git 服务器，因为是您自己的 Git 服务器，所以别人也是看不见的。

确保您拥有一个 GitHub 账号后，我们就即将开始远程仓库的学习。

## 添加远程库

现在的情景是，您已经在本地创建了一个 Git 仓库后，又想在 GitHub 创建一个 Git 仓库，并且让这两个仓库进行远程同步，这样，GitHub 上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。

首先，登陆 GitHub，然后，在右上角找到 “+” 按钮，点击 "New Repository"。

在项目填入 learngit，其他保持默认设置，点击“创建”按钮，就成功地创建了一个新的 Git 仓库:

目前，在 GitHub 上的这个 learngit 仓库还是空的，GitHub 告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到 GitHub 仓库。

现在，我们根据 GitHub 的提示，在本地的 learngit 仓库下运行命令:

```sh
git remote add origin git@github.com:Hope-Studio/learngit.git
```

请千万注意，把上面的 Hope-Studio 替换成您自己的 GitHub 账户名，否则，您在本地关联的就是希望工作室的远程库，关联没有问题，但是推送是推不上去的，因为您的 SSH Key 公钥不在希望工作室的账户列表中。

添加后，远程库的名字就是 `origin`，这是 Git 默认的叫法，也可以改成别的。

下一步，就可以把本地库的所有内容推送到远程库上:

```sh
$ git push -u origin master
Counting objects: 20, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (15/15), done.
Writing objects: 100% (20/20), 1.64 KiB | 560.00 KiB/s, done.
Total 20 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), done.
To github.com:Hope-Studio/learngit.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

把本地库的内容推送到远程，用 `git push` 命令，实际上是把当前分支 `master` 推送到远程。

由于远程库是空的，我们第一次推送 `master` 分支时，加上了 `-u` 参数，Git 不但会把本地的 `master` 分支内容推送的远程新的 `master` 分支，还会把本地的 `master` 分支和远程的 `master` 分支关联起来，在以后的推送或者拉取时就可以简化命令。

推送成功后，可以立刻在 GitHub 页面中看到远程库的内容已经和本地一模一样:

从现在起，只要本地作了提交，就可以通过命令:

```sh
git push origin master
```

把本地 `master` 分支的最新修改推送至 GitHub，现在，您就拥有了真正的分布式版本库!

## SSH 警告

当您第一次使用 Git 的 clone 或者 push 命令连接 GitHub 时，会得到一个警告:

```sh
The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established.
RSA key fingerprint is xx.xx.xx.xx.xx.
Are you sure you want to continue connecting (yes/no)?
```

这是因为 Git 使用 SSH 连接，而 SSH 连接在第一次验证 GitHub 服务器的 Key 时，需要您确认 GitHub 的 Key 的指纹信息是否真的来自 GitHub 的服务器，输入 `yes` 回车即可。

Git 会输出一个警告，告诉您已经把 GitHub 的 Key 添加到本机的一个信任列表里了:

```md
Warning: Permanently added 'github.com' (RSA) to the list of known hosts.
```

这个警告只会出现一次，后面的操作就不会有任何警告了。

如果您实在担心有人冒充 GitHub 服务器，输入 `yes` 前可以对照 GitHub 的 RSA Key 的指纹信息是否与 SSH 连接给出的一致。

### 关联小结

要关联一个远程库，使用命令 `git remote add origin git@<server-name>:<path>/<repo-name>.git`；

关联后，使用命令 `git push -u origin master` 第一次推送 master 分支的所有内容；

此后，每次本地提交后，只要有必要，就可以使用命令 `git push origin master` 推送最新修改；

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而 SVN 在没有联网的时候是拒绝干活的! 当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了!

## 从远程库克隆

上次我们讲了先有本地库，后有远程库的时候，如何关联远程库。

现在，假设我们从零开发，那么最好的方式是先创建远程库，然后，从远程库克隆。

首先，登陆 GitHub，创建一个新的仓库，名字叫 `gitskills`:

我们勾选使用 “readme 初始化项目”，这样 GitHub 会自动为我们创建一个 README.md 文件。创建完毕后，可以看到 README.md 文件。

现在，远程库已经准备好了，下一步是用命令 `git clone` 克隆一个本地库:

```sh
$ git clone git@github.com:Hope-Studio/gitskills.git
Cloning into 'gitskills'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 3
Receiving objects: 100% (3/3), done.
```

::: tip

如果您使用 clone 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为简写。

:::

注意把 Git 库的地址换成您自己的，然后进入 `gitskills` 目录看看，已经有 README.md 文件了:

```sh
$ cd gitskills
$ ls
README.md
```

如果有多个人协作开发，那么每个人各自从远程克隆一份就可以了。

您也许还注意到，GitHub 给出的地址不止一个，还可以用 [https://github.com/Hope-Studio/gitskills.git](https://github.com/Hope-Studio/gitskills.git) 这样的地址。实际上，Git 支持多种协议，默认的 `git://` 使用 ssh，但也可以使用 HTTPS 等其他协议。

使用 HTTPS 除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放 http 端口的公司内部就无法使用 ssh 协议而只能用 https。

### 克隆小结

要克隆一个仓库，首先必须知道仓库的地址，然后使用 `git clone` 命令克隆。

Git 支持多种协议，包括 https，但通过 ssh 支持的原生 git 协议速度最快。

## 从远程仓库中抓取

从远程仓库中获得数据，可以执行:

```sh
git fetch <remote>
```

这个命令会访问远程仓库，从中拉取所有您还没有的数据。执行完成后，您将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。

`git fetch origin` 会抓取克隆(或上一次抓取)后新推送的所有工作。必须注意 `git fetch` 命令只会将数据下载到您的本地仓库——它并不会自动合并或修改您当前的工作。当准备好时您必须手动将其合并入您的工作。

## 推送到远程仓库

当您想分享您的项目时，必须将其推送到上游。这个命令很简单: `git push <remote> <branch>`。当您
想要将 master 分支推送到 origin 服务器时(再次说明，克隆时通常会自动帮您设置好那两个名字)， 那么
运行这个命令就可以将您所做的备份到服务器:

```sh
git push origin master
```

只有当您有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。当您和其他人在同一时间克隆，他们先推送到上游然后您再推送到上游，您的推送就会毫无疑问地被拒绝。您必须先抓取他们的工作并将其合并进您的工作后才能推送。

## 查看某个远程仓库

如果想要查看某一个远程仓库的更多信息，可以使用 `git remote show <remote>` 命令。如果想以一个特
定的缩写名运行这个命令，例如 origin，会得到像下面类似的信息:

```sh
$ git remote show origin
* remote origin
Fetch URL: https://github.com/schacon/ticgit
Push URL: https://github.com/schacon/ticgit
HEAD branch: master
Remote branches:
master tracked
dev-branch tracked
Local branch configured for 'git pull':
master merges with remote master
Local ref configured for 'git push':
master pushes to master (up to date)
```

它同样会列出远程仓库的 URL 与跟踪分支的信息。这些信息非常有用，它告诉您正处于 master 分支，并且如果运行 `git pull`，就会抓取所有的远程引用，然后将远程 master 分支合并到本地 master 分支。它也会列出拉取到的所有远程引用。

## 远程仓库的重命名与移除

您可以运行 `git remote rename` 来修改一个远程仓库的简写名。例如，想要将 pb 重命名为 paul，可以用 `git remote rename` 这样做:

```sh
$ git remote rename pb paul
$ git remote
origin
paul
```

值得注意的是这同样也会修改您所有远程跟踪的分支名字。那些过去引用 `pb/master` 的现在会引用 `paul/master`。

如果因为一些原因想要移除一个远程仓库——您已经从服务器上搬走了或不再想使用某一个特定的镜像了，又或者某一个贡献者不再贡献了——可以使用 `git remote remove` 或 `git remote rm`:

```sh
$ git remote remove paul
$ git remote
origin
```

一旦您使用这种方式删除了一个远程仓库，那么所有和这个远程仓库相关的远程跟踪分支以及配置信息也会一起被删除。
