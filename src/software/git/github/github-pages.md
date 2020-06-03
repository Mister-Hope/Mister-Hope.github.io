---
title: Github Pages
icon: window
author: 林传舜
time: 2019-09-18
category: Github
tags:
  - 部署
---

本教程将指导您开启 Github Pages。

<!-- more -->

::: tip
需要重构
:::

## 前置工作

完成 git 软件的安装与配置。

## 配置过程

1. 创建仓库

   新建一个 repository，名字随意。将 clone or download 按钮(图中绿 色键)里面的地址复制下来。

2. 创建并推送 index.html 文件

   在本地创建一个空的文件夹，依次执行:

   - 先创建 index.html(可以新建一个 xx.txt，并改名 index.html)。
   - 开启命令行工具
   - git init
   - git remote add 自己用英文起个短小的名字 "刚刚复制的网址"
   - git add .
   - git commit -m"自己任意写的注释"
   - git push 自己用英文起的那个短小的名字 master
   - 如果成功，刷新 Github 仓库(repository)，可以看到 index.html 已经存在于仓库里

3. 开启 Github Pages 功能

   在 repository 的 settings 部分开启 Github Pages 功能。
