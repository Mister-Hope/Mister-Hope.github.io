---
date: 2021-00-27
title: 安装 Node.js
icon: install
order: 2
category: Node.js
tag:
  - Node.js
  - 软件
  - 安装
---

由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node.js 环境。

<!-- more -->

## 安装 Node.js

目前 Node.js 的 LTS 版本是 18.15.0。首先，从 Node.js 官网下载对应平台的安装程序。点击**长期维护版**的下载按钮。

- [Node.js 官网](https://nodejs.org/zh-cn/)

### 安装过程

- 在 Windows 上安装时务必选择全部组件，包括勾选 `Add to Path`。

  在安装过程中，无需勾选 "Automatically install the necessary tools"。选中此项会在电脑中安装 VS 等日常开发使用不到的软件。

  安装完成后，在 Windows 环境下，请打开命令提示符，然后输入 `node -v` ，如果安装正常，您应该看到 `v18.15.0` 这样的输出:

  ```bash
  C:\Users\IEUser>node -v
  v18.15.0
  ```

  继续在命令提示符输入 node，此刻您将进入 Node.js 的交互环境。在交互环境下，您可以输入任意 JavaScript 语句，例如 `100 + 200`，回车后将得到输出结果。

  要退出 Node.js 环境，连按两次 `Ctrl + C` 。

- 在 Mac 或 Linux 环境下，请打开终端，然后输入 `node -v`，您应该看到如下输出:

  ```sh
  $ node -v
  v18.15.0
  ```

## npm

npm 是 Node.js 的包管理工具(package manager)。

我们在 Node.js 上开发时，会用到很多别人写的 JavaScript 代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。于是一个集中管理的工具应运而生: 大家都把自己开发的模块打包后放到 npm 官网上，如果要使用，直接通过 npm 安装就可以直接用，不用管代码存在哪，应该从哪下载。

更重要的是，如果我们要使用模块 A，而模块 A 又依赖于模块 B，模块 B 又依赖于模块 X 和模块 Y，npm 可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。

讲了这么多，npm 究竟在哪?

其实 npm 已经在 Node.js 安装的时候顺带装好了。我们在命令提示符或者终端输入 `npm -v`，应该看到类似的输出:

```bash
C:\>npm -v
9.6.0
```

> 如果版本号太小，说明 npm 版本较低，请使用此命令升级到最新版本: `npm i -g npm`。

如果直接输入 `npm`，您会看到类似下面的输出:

```bash
C:\> npm
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
    ...
```

上面的一大堆文字告诉您，npm 需要附带命令。现在我们不用关心这些命令，后面会一一讲到。目前，您只需要确保 npm 正确安装了，能运行就行。

## 国内镜像站

由于 GFW，有的时候，访问国外的 Node.js 服务器可能会十分缓慢以至于您想把它砸了。

阿里巴巴免费为国内开发者提供镜像源。你可以将 npm 的源配置为该镜像源，以在每次安装依赖的时候从国内镜像站拉取镜像。这可以极大的提升安装速度。

::: note

如果官方源的速度还可以的话请尽可能使用官方源。

国内源毕竟是镜像站点，同步官方源的包会出现延迟，所以有时候你可能会遇到 `version xxx not found` 之类的错误，这是因为所需要的版本还没来得及被镜像站点同步所导致。

你可以通过访问 `npmmirror.com/sync/<包名>` 来手动同步一个包。

:::

设置及国内源的命令如下:

```sh
npm config set registry https://registry.npmmirror.com/
```

::: caution

`https://registry.npm.taobao.org/` 是老的淘宝源地址，现已停止维护，请不要使用!!!

:::

## 启用 Corepack

Node.js 自带的包管理工具 npm 并不是那么的强大，其安装速度也很慢，所以社区开发了一些其他的包管理工具如 `yarn` 和 `pnpm`，它们有自己的优势。

Mr.Hope 推荐使用 pnpm 进行包管理，因为它使用硬链接索引包文件，安装速度更快而且节省磁盘空间。

从 v16 开始，Node.js 引入了 Corepack 工具，并在 package.json 支持了 `packageManager` 选项以支持第三方管理工具。

你需要通过下方命令启用 Corepack:

```bash
corepack enable
```

这样每个项目会自动应用根目录 package.json 中的 `packageManager` 选项。比如设置 `"packageManager": "pnpm@7.30.3"` 的时候，会自动下载并使用 `pnpm@7.30.3`。

::: info 设置全局的 packageManager

你可以使用 `corepack prepare packageManager@semver` 来全局准备一个 packageManager 版本，并使用 `--activate` 选新娘 全局激活。

比如以下命令下载 `pnpm@7.30.3` 并将其作为默认的全局包管理器:

```bash
corepack prepare pnpm@7.30.3 --activate
```

:::

## 小结

请在本机安装 Node.js 环境，并确保 Node.js 和 npm 能正常运行。
