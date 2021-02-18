---
title: 自动部署
icon: network
category: Git
tags:
  - Git
  - 软件
---

本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。

<!-- more -->

::: tip

由于 Centos 仍然是用 GitV1，本教程使用 Ubuntu 20.04 进行教学。

:::

## 服务器

为了能供自动部署到服务器，我们需要让服务器的网站目录成为一个 Git 仓库，这样我们可以在 GitHub Actions 中，通过向服务器对应 GitHub 仓库推送网站内容，使服务器网站获得自动更新。下面是服务器侧的部署配置

### 添加账户

为了安全，首先需要使用命令创建 Git 用户，为了安全请务必设置密码。

```sh
sudo adduser git
```

之后，查看部署目录所在组，git 用户添加到组中。

```sh
usermod -a -G <目录所在组> git
```

然后将部署目录的权限设置为 `775`，即允许同组访问。这样 git 就有权限访问部署目录。

### 添加权限

创建 `~/.ssh/` 文件夹，生成 `authorized_keys` 文件，并设置其权限为 `600`。

```sh
mkdir -p ~/.ssh/

touch ~/.ssh/authorized_keys

chmod 600 ~/.ssh/authorized_keys
```

之后将需要赋予权限的用户公钥依次粘贴至该文件，这样相关用户即可以使用对应私钥，向服务器相关仓库推送代码。

### 创建仓库

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

这是由于 Git 默认拒绝外部对当前分支的推送操作，因为这可能会覆盖或变更工作区文件。

设置完毕后，Git 会允许外部对当前工作区分支进行推送操作。

## GitHub Actions

在 GitHub 一侧，我们需要通过 GitHub Action，在新代码推送时自动构建网站，并部署到 GitHub 的 gh-pages 分支。之后，GitHub Action 将该分支的变动推送服务器的对应仓库，完成网站的自动部署。

之后只需要使用 GitHub Action 通过 Git 推送到 `git@<domain>:<部署目录> gh-pages` 即可。

### GitHub pages 部署

```yml
# 自动部署的名称
name: GitHub pages deploy

# 自动部署的条件
on:
  push:
    branches:
      - master

jobs:
  build-production:
    # 运行环境
    runs-on: ubuntu-latest

    # 步骤
    steps:
      # 第一步：下载源码
      # action 配置详见 https://github.com/actions/checkout
      - name: Checkout
        uses: actions/checkout@v2
        with:
          # 如果本项目包含了子模块 (git submodules)，需要将此项设置为 true
          # submodules: true

          # 这是获取历史 commit 的深度，默认为 1，即只拉取最后一个 commit，这样可以加快拉取速度
          # 如果项目使用 VuePress，为了正确通过 Git 历史提交记录生成页面的最后更新时间，需要设置为 0 以拉取完整的 git 历史提交
          # fetch-depth: 0

          # 如果本项目涉及到了非公共内容，如子模块包含私有仓库，需要设置 ssh key 或 token 以保证拥有拉取相应仓库的权限。你可以将 ssh-key 设置为 github 绑定公钥对应的私钥，可以新建一个具有相关仓库访问权限的 github token

      # 第二步:安装依赖
      - name: Install dependencies
        run: npm install

      # 第三步，打包代码
      - name: Build
        run: npm run build --if-present

      # 第四步，部署
      - name: Deploy
          uses: JamesIves/github-pages-deploy-action@releases/v3
          with:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            BRANCH: gh-pages    # 要部署的分支
            FOLDER: dist  # 要部署的文件夹
```
