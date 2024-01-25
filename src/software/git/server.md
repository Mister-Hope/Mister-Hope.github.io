---
date: 2020-05-05
title: 服务器搭建
icon: network
order: 16
category: Git
tag:
  - Git
  - 软件
---

在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。

GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。

<!-- more -->

搭建 Git 服务器需要准备一台运行 Linux 的机器，强烈推荐用 Ubuntu 或 Debian，这样，通过几条简单的 `apt` 命令就可以完成安装。

- **Ubuntu** 或 **Debian**

  假设您已经有 sudo 权限的用户账号，下面，正式开始安装。

  - 第一步，安装 git:

    ```sh
    sudo apt-get install git
    ```

  - 第二步，创建一个 git 用户，用来运行 git 服务:

    ```sh
    sudo adduser git
    ```

  - 第三步，创建证书登录:

    收集所有需要登录的用户的公钥，就是他们自己的 `id_rsa.pub` 文件，把所有公钥导入到 `/home/git/.ssh/authorized_keys` 文件里，一行一个。

  - 第四步，初始化 Git 仓库:

    先选定一个目录作为 Git 仓库，假定是 `/srv/sample.git`，在 `/srv` 目录下输入命令:

    ```sh
    sudo git init --bare sample.git
    ```

    Git 就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的 Git 仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的 Git 仓库通常都以 `.git` 结尾。然后，把 owner 改为 git:

    ```sh
    sudo chown -R git:git sample.git
    ```

  - 第五步，禁用 shell 登录:

    出于安全考虑，第二步创建的 git 用户不允许登录 shell，这可以通过编辑 `/etc/passwd` 文件完成。找到类似下面的一行:

    ```md
    git:x:1001:1001:,,,:/home/git:/bin/bash
    ```

    改为:

    ```md
    git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
    ```

    这样，git 用户可以正常通过 ssh 使用 git，但无法登录 shell，因为我们为 git 用户指定的 git-shell 每次一登录就自动退出。

  - 第六步，克隆远程仓库:

    现在，可以通过 `git clone` 命令克隆远程仓库了，在各自的电脑上运行:

    ```sh
    $ git clone git@server:/srv/sample.git
    Cloning into 'sample'...
    warning: You appear to have cloned an empty repository.
    ```

    剩下的推送就简单了。

- **Centos**

  1. 安装 Git

     ```sh
     yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-devel
     yum install git
     ```

     接下来创建一个 git 用户组和用户，用来运行 git 服务:

     ```sh
     groupadd git
     useradd git -g git
     ```

  1. 创建证书登录

     收集所有需要登录的用户的公钥，公钥位于 `id_rsa.pub` 文件中，将公钥导入到 `/home/git/.ssh/authorized_keys` 文件里，一行一个。

     如果没有该文件创建它:

     ```sh
     cd /home/git/
     mkdir .ssh
     chmod 755 .ssh
     touch .ssh/authorized_keys
     chmod 644 .ssh/authorized_keys
     ```

  1. 初始化 Git 仓库

     首先我们选定一个目录作为 Git 仓库，假定是 `/home/gitrepo/test.git`，在 `/home/gitrepo` 目录下输入命令:

     ```sh
     $ cd /home
     $ mkdir gitrepo
     $ chown git:git gitrepo/
     $ cd gitrepo

     $ git init --bare test.git
     Initialized empty Git repository in /home/gitrepo/runoob.git/
     ```

     以上命令 Git 创建一个空仓库，服务器上的 Git 仓库通常都以 `.git` 结尾。然后，把仓库所属用户改为 git:

     ```sh
     chown -R git:git runoob.git
     ```

  1. 克隆仓库

  ```sh
  $ git clone git@192.168.45.4:/home/gitrepo/runoob.git
  Cloning into 'runoob'...
  warning: You appear to have cloned an empty repository.
  Checking connectivity... done.
  ```

  192.168.45.4 为 Git 所在服务器 ip ，您需要将其修改为您自己的 Git 服务 ip。

  这样我们的 Git 服务器安装就完成。
