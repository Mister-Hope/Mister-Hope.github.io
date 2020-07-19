---
title: 自动部署
icon: network
category: Git
tags:
  - Git
  - 软件
---

本文介绍如何利用 Git 和 Github Action，自动部署代码到服务器。

<!-- more -->

::: tip
由于 Centos 仍然是用 GitV1，本教程使用 Ubuntu 18.04 进行教学。
:::

## 添加账户

为了安全，首先需要使用命令创建 Git 用户，为了安全请务必设置密码。

```sh
sudo adduser git
```

之后，查看部署目录所在组，git 用户添加到组中。

```sh
usermod -a -G <目录所在组> git
```

然后将部署目录的权限设置为 `775`，即允许同组访问。这样 git 就有权限访问部署目录。

## 添加权限

创建 `~/.ssh/` 文件夹，生成 `authorized_keys` 文件，并设置其权限为 `600`。

```sh
mkdir -p ~/.ssh/

touch ~/.ssh/authorized_keys

chmod 600 ~/.ssh/authorized_keys
```

之后将需要赋予权限的用户公钥依次粘贴至该文件。

## 创建仓库

回到 `/home/git/`，创建所需的文件夹:

```sh
cd ~
mkdir <仓库名>
```

进入文件夹，使用

```sh
git init --separate-git-dir=. <部署位置>
```

这会将 git 库保持在 `/home/git/<仓库名>` 下，同时将工作区设置到部署文件夹中。

接下来执行:

```sh
git config receive.denyCurrentBranch ignore
```

这是由于 Git 默认拒绝外部对当前的推送操作，因为这可能会覆盖或变更工作区文件。

## Github Actions 构建

在正常的工作流程中，完成页面的构建，并将其推送到 gh-pages 上。

之后只需要使用 Github Action 推送到 `git@<ip>:<部署目录> gh-pages` 即可。
