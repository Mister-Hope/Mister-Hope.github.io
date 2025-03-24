---
date: 2022-01-07
title: Node.js
icon: nodeJS
category: Node.js
tag:
  - Node.js
  - 软件
---

Node.js 是一款全球使用广泛的框架，可以用在前端与后端上，拥有大量的模块。Node.js 主要以其丰富并及其容易导入的 Node.js package，以及其方便管理 npm (Node.js Package Manager)闻名。

<!-- more -->

## 教程目录

- [Node.js 介绍](intro.md)

- [Node.js 与 npm 安装](install.md)

- [Node.js 环境](environment.md)

- [编程](program.md)

- [Node.js CJS 模块](cjs.md)

以上，就是 Node.js 的简易介绍，系统学习可以查看下方的详细教程。

## 初学者教程

- [Node.js 入门](https://www.nodebeginner.org/index-zh-cn.html)

- [W3CSchool](https://www.w3cschool.cn/nodejs/)

## 官方文档

- [地址](https://nodejs.org/dist/latest-v14.x/docs/api/)

## 包管理器

自从 Node.js 18 以来，Node.js 自带了 Corepack 来处理项目使用何种包管理器，目前支持 `npm`, `yarn` 和 `pnpm`。它是默认禁用的，可以通过以下命令启用：

```bash
corepack enable
```

如果希望在全局范围内使用某个包管理器，可以使用以下命令：

```bash
# 可以使用 npm, yarn, pnpm，并指定各种版本
corepack prepare pnpm@latest --activate
```

如果想为某个项目指定包管理器，可以使用以下命令：

```bash
# 可以使用 npm, yarn, pnpm，并指定各种版本
corepack use pnpm@latest
```

::: tip

在国内，如果你不能为 npm 配置代理，建议换成 npmmirror。 <https://registry.npmmirror.com>

在项目的 `.npmrc` 文件中添加:

```
registry=https://registry.npmmirror.com
```

同时，你也设置环境变量 `NPM_CONFIG_REGISTRY` 为 `https://registry.npmmirror.com`。

:::
