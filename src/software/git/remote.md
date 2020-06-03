---
icon: remote
category: Git
tags:
  - Git
  - 软件
copyright: Copyright by 廖雪峰 Edited by Mr.Hope
---

# 远程仓库

## 什么是远程仓库

Git 是分布式版本控制系统，同一个 Git 仓库，可以分布到不同的机器上。怎么分布呢？最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。

实际情况往往是这样，找一台电脑充当服务器的角色，每天 24 小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。

完全可以自己搭建一台运行 Git 的服务器，不过现阶段，为了学 Git 先搭个服务器绝对是小题大作。好在这个世界上有个叫 GitHub 的神奇的网站，从名字就可以看出，这个网站就是提供 Git 仓库托管服务的，所以，只要注册一个 GitHub 账号，就可以免费获得 Git 远程仓库。

在继续阅读后续内容前，请自行注册 Github 账号。由于您的本地 Git 仓库和 Github 仓库之间的传输是通过 SSH 加密的，所以，需要一点设置:

- 第 1 步: 创建 SSH Key。在用户主目录下，看看有没有.ssh 目录，如果有，再看看这个目录下有没有 id_rsa 和 id_rsa.pub 这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开 Shell (Windows 下打开 Git Bash)，创建 SSH Key:

  ```sh
  ssh-keygen -t rsa -C "youremail@example.com"
  ```

  您需要把邮件地址换成您自己的邮件地址，然后一路回车，使用默认值即可，由于这个 Key 也不是用于军事目的，所以也无需设置密码。

  如果一切顺利的话，可以在用户主目录里找到.ssh 目录，里面有 id_rsa 和 id_rsa.pub 两个文件，这两个就是 SSH Key 的秘钥对，id_rsa 是私钥，不能泄露出去，id_rsa.pub 是公钥，可以放心地告诉任何人。

- 第 2 步: 登陆 Github，点击右上角头像，进入设置。

  进入安全设置下的 SSH 公钥界面。

  在标题中填写公钥的备注名称，把 id_rsa.pub 文件的内容粘贴到底下的输入框中。

为什么 Github 需要 SSH Key 呢？因为 Github 需要识别出您推送的提交确实是您推送的，而不是别人冒充的，而 Git 支持 SSH 协议，所以，Github 只要知道了您的公钥，就可以确认只有您自己才能推送。

当然，Github 允许您添加多个 Key。假定您有若干电脑，您一会儿在公司提交，一会儿在家里提交，只要把每台电脑的 Key 都添加到 Github，就可以在每台电脑上往 Github 推送了。

最后友情提示，在 Github 上免费托管的 Git 仓库，任何人都可以看到喔(但只有您自己才能改)。所以，不要把敏感信息放进去。

如果您不想让别人看到 Git 库，一是让 Github 把公开的仓库变成私有的，这样别人就看不见了(不可读更不可写)。另一个办法是自己动手，搭一个 Git 服务器，因为是您自己的 Git 服务器，所以别人也是看不见的。

确保您拥有一个 Github 账号后，我们就即将开始远程仓库的学习。

## 添加远程库

现在的情景是，您已经在本地创建了一个 Git 仓库后，又想在 Github 创建一个 Git 仓库，并且让这两个仓库进行远程同步，这样，Github 上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。

首先，登陆 Github，然后，在右上角找到“+”按钮，点击 "New Repository"。

在项目填入 learngit，其他保持默认设置，点击“创建”按钮，就成功地创建了一个新的 Git 仓库:

目前，在 Github 上的这个 learngit 仓库还是空的，Github 告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到 Github 仓库。

现在，我们根据 Github 的提示，在本地的 learngit 仓库下运行命令:

```sh
git remote add origin git@github.com:nenuyouth/learngit.git
```

请千万注意，把上面的 nenuStudentUnion 替换成您自己的 Github 账户名，否则，您在本地关联的就是我的远程库，关联没有问题，但是推送是推不上去的，因为您的 SSH Key 公钥不在我的账户列表中。

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
To github.com:nenuyouth/learngit.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

把本地库的内容推送到远程，用 `git push` 命令，实际上是把当前分支 `master` 推送到远程。

由于远程库是空的，我们第一次推送 `master` 分支时，加上了-u 参数，Git 不但会把本地的 `master` 分支内容推送的远程新的 `master` 分支，还会把本地的 `master` 分支和远程的 `master` 分支关联起来，在以后的推送或者拉取时就可以简化命令。

推送成功后，可以立刻在 Github 页面中看到远程库的内容已经和本地一模一样:

从现在起，只要本地作了提交，就可以通过命令:

```sh
git push origin master
```

把本地 `master` 分支的最新修改推送至 Github，现在，您就拥有了真正的分布式版本库！

## SSH 警告

当您第一次使用 Git 的 clone 或者 push 命令连接 Github 时，会得到一个警告:

```sh
The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established.
RSA key fingerprint is xx.xx.xx.xx.xx.
Are you sure you want to continue connecting (yes/no)?
```

这是因为 Git 使用 SSH 连接，而 SSH 连接在第一次验证 Github 服务器的 Key 时，需要您确认 Github 的 Key 的指纹信息是否真的来自 Github 的服务器，输入`yes`回车即可。

Git 会输出一个警告，告诉您已经把 Github 的 Key 添加到本机的一个信任列表里了:

```md
Warning: Permanently added 'Github.com' (RSA) to the list of known hosts.
```

这个警告只会出现一次，后面的操作就不会有任何警告了。

如果您实在担心有人冒充 Github 服务器，输入 yes 前可以对照 Github 的 RSA Key 的指纹信息是否与 SSH 连接给出的一致。

### 关联小结

要关联一个远程库，使用命令 git remote add origin git@server-name:path/repo-name.git；

关联后，使用命令 `git push -u origin master` 第一次推送 master 分支的所有内容；

此后，每次本地提交后，只要有必要，就可以使用命令 `git push origin master` 推送最新修改；

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而 SVN 在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！

## 从远程库克隆

上次我们讲了先有本地库，后有远程库的时候，如何关联远程库。

现在，假设我们从零开发，那么最好的方式是先创建远程库，然后，从远程库克隆。

首先，登陆 Github，创建一个新的仓库，名字叫 `gitskills`:

我们勾选使用 “readme 初始化项目”，这样 Github 会自动为我们创建一个 README.md 文件。创建完毕后，可以看到 README.md 文件。

现在，远程库已经准备好了，下一步是用命令 `git clone` 克隆一个本地库:

```sh
$ git clone git@github.com:nenuyouth/gitskills.git
Cloning into 'gitskills'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 3
Receiving objects: 100% (3/3), done.
```

注意把 Git 库的地址换成您自己的，然后进入 `gitskills` 目录看看，已经有 README.md 文件了:

```sh
$ cd gitskills
$ ls
README.md
```

如果有多个人协作开发，那么每个人各自从远程克隆一份就可以了。

您也许还注意到，Github 给出的地址不止一个，还可以用 [https://github.com/nenuyouth/gitskills.git](https://github.com/nenuyouth/gitskills.git) 这样的地址。实际上，Git 支持多种协议，默认的 `git://` 使用 ssh，但也可以使用 https 等其他协议。

使用 https 除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放 http 端口的公司内部就无法使用 ssh 协议而只能用 https。

### 克隆小结

要克隆一个仓库，首先必须知道仓库的地址，然后使用 `git clone` 命令克隆。

Git 支持多种协议，包括 https，但通过 ssh 支持的原生 git 协议速度最快。
