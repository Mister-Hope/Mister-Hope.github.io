---
title: 安装 Node.js
icon: install
category: Node.js
tags:
  - Node.js
  - 软件
  - 安装
---

由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node.js 环境。

<!-- more -->

## 安装 Node.js

目前 Node.js 的 LTS 版本是 12.18.0。首先，从 Node.js 官网下载对应平台的安装程序。

- [Windows LTS 下载地址](https://nodejs.org/dist/v12.18.0/node-v12.18.0-x64.msi)

### 安装过程

- 在 Windows 上安装时务必选择全部组件，包括勾选 `Add to Path`。

  在安装过程中，无需勾选 "Automatically install the necessary tools"。选中此项会在电脑中安装 VS 等日常开发使用不到的软件。

  安装完成后，在 Windows 环境下，请打开命令提示符，然后输入 `node -v` ，如果安装正常，您应该看到 `v12.18.0` 这样的输出:

  ```bash
  C:\Users\IEUser>node -v
  v12.18.0
  ```

  继续在命令提示符输入 node，此刻您将进入 Node.js 的交互环境。在交互环境下，您可以输入任意 JavaScript 语句，例如 `100 + 200`，回车后将得到输出结果。

  要退出 Node.js 环境，连按两次 `Ctrl+C` 。

- 在 Mac 或 Linux 环境下，请打开终端，然后输入 `node -v`，您应该看到如下输出:

  ```sh
  $ node -v
  v12.18.0
  ```

## npm

在正式开始 Node.js 学习之前，我们先认识一下 npm。

Npm 是什么东东? npm 其实是 Node.js 的包管理工具(package manager)。

为啥我们需要一个包管理工具呢? 因为我们在 Node.js 上开发时，会用到很多别人写的 JavaScript 代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。于是一个集中管理的工具应运而生: 大家都把自己开发的模块打包后放到 npm 官网上，如果要使用，直接通过 npm 安装就可以直接用，不用管代码存在哪，应该从哪下载。

更重要的是，如果我们要使用模块 A，而模块 A 又依赖于模块 B，模块 B 又依赖于模块 X 和模块 Y，npm 可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。

讲了这么多，npm 究竟在哪?

其实 npm 已经在 Node.js 安装的时候顺带装好了。我们在命令提示符或者终端输入 `npm -v`，应该看到类似的输出:

```bash
C:\>npm -v
6.13.1
```

> 如果版本号太小，说明 npm 版本较低，请使用此命令升级到最新版本: `npm install -g npm`。

如果直接输入 `npm`，您会看到类似下面的输出:

```bash
C:\> npm

Usage: npm <command>

where <command> is one of:
    ...
```

上面的一大堆文字告诉您，npm 需要跟上命令。现在我们不用关心这些命令，后面会一一讲到。目前，您只需要确保 npm 正确安装了，能运行就行。

## 墙

大家都知道天朝是有墙的，有的时候，访问国外的 Node.js 服务器可能会十分缓慢以至于您想把它砸了。

所以贴心的马云爸爸提供了淘宝镜像，淘宝镜像有一个自己定制的 `cnpm` 工具，服务器在国内，十分快捷。不过大家在使用 `cnpm` 安装模块之后再使用 npm 安装会报错，只能重新删掉 `node_modules` 文件夹重新执行 `npm install` 全新安装才会不报错。

::: warning

如果大家可以使用 `npm` 命令，非常不建议大家使用 `cnpm` 命令安装模块。

:::

安装 `cnpm` 的命令如下:

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 小结

请在本机安装 Node.js 环境，并确保 Node.js 和 npm 能正常运行。
