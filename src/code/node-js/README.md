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

## Yarn

快速、可靠、安全的依赖管理工具。

- Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，因此安装速度更快。
- 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
- 使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

- [下载地址](https://www.yarnpkg.com/zh-Hans/docs/install#windows-stable)
- [官方文档](https://www.yarnpkg.com/zh-Hans/docs)

### 命令

- `yarn install`: 执行安装

- `yarn upgrade`: 执行升级

- `yarn add <package>`: 添加一个包

- `yarn config set cache-folder <path>`: 更改缓存文件夹

- `yarn config set registry <registry>`: 更改源

  ::: tip

  在国内，建议换成淘宝源 <https://registry.npm.taobao.org>

  即执行

  ```sh
  yarn config set registry https://registry.npm.taobao.org
  ```

  :::
