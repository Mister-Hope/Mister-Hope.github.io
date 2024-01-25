---
title: 快速上手
icon: creative
date: 2019-09-14
category: JavaScript
tag:
  - 快速上手
---

::: tip

因为 JavaScript 是一门编程语言，不再是 HTML 和 CSS 这种看得见摸得着的东西，所以我们从如何引入、运行并调试开始讲起。

:::

<!-- more -->

## 练习方法

本博客包含大量的示例代码，只要电脑安装了浏览器，就可以用来实验了。读者可以一边读一边运行示例，加深理解。

推荐安装 [Chrome 浏览器](../../../../software/chrome.md)，它的“开发者工具”(Developer Tools)里面的“控制台”(console)，就是运行 JavaScript 代码的理想环境。

进入 Chrome 浏览器的“控制台”，有两种方法。

- 直接进入: 按下 `Option + Command + J` (Mac) 或者 `Ctrl + Shift + J` (Windows / Linux)
- 开发者工具进入: 开发者工具的快捷键是 F12，或者 `Option + Command + I` (Mac) 以及 `Ctrl + Shift + I` (Windows / Linux)，然后选择 Console 面板

进入控制台以后，就可以在提示符后输入代码，然后按 `Enter` 键，代码就会执行。如果按 `Shift + Enter` 键，就是代码换行，不会触发执行。建议阅读本教程时，将代码复制到控制台进行实验。

作为尝试，您可以将下面的程序复制到“控制台”，按下回车后，就可以看到运行结果。

```js
function greetMe(yourName) {
  console.log("Hello " + yourName);
}
greetMe("World");
// Hello World
```

## JavaScript 的引入

JavaScript 代码可以直接嵌在网页的任何地方。

如果想要在网页显示前就载入并运行 JavaScript，通常我们把代码放到 `<head>` 中，如图:

```html
<html>
  <head>
    <script>
      alert("Hello, world");
    </script>
  </head>
  <body>
    ...
  </body>
</html>
```

由 `<script>...</script>` 包含的代码就是 JavaScript 代码，它将直接被浏览器执行。

::: tip

和 CSS 类似，我们管这种引入方式叫做 “内联脚本”。

:::

第二种方法是把 JavaScript 代码放到一个单独的 `js` 文件，然后在 HTML 中通过 `<script src="..."></script>` 引入这个文件:

```html
<html>
  <head>
    <script src="/static/js/abc.js"></script>
  </head>
  <body>
    ...
  </body>
</html>
```

这样， `/static/js/abc.js` 就会被浏览器执行。

::: tip

和 CSS 类似，我们称这种引入方式为外部引入。

外部引入有多种好处:

- 把 JavaScript 代码放入一个单独的 js 文件中更利于维护代码，并且多个页面可以各自引用同一份 js 文件。
- 可以在同一个页面中引入多个.js 文件，还可以在页面中多次编写 `<script> js代码... </script>` ，浏览器按照顺序依次执行。
- 如果网页是静态的，希望尽快向用户呈现，可以将 JavaScript 代码放在文件的最后。

  :::

::: warning

因为 `<script>` 标签默认的 `type` 就是 JavaScript，所以下方的写法是没有必要的。

```html
<script type="text/javascript">
  ...
</script>
```

:::

## JavaScript 的编写

可以用任何文本编辑器来编写 JavaScript 代码。这里推荐 [Visual Studio Code](../../../../software/vscode/README.md)。

## JavaScript 的运行

### 浏览器运行

要让浏览器运行 JavaScript，必须先有一个 HTML 页面，在 HTML 页面中引入 JavaScript，然后，让浏览器加载该 HTML 页面，就可以执行 JavaScript 代码。

::: warning

直接在硬盘上创建好 HTML 和 JavaScript 文件，然后用浏览器打开的方式运行部分 JavaScript 代码没有问题，但由于浏览器的安全限制，以 `file://` 开头的地址无法执行如联网等 JavaScript 代码，

:::

### 架设本地服务器

运行 JavaScript 也可以在本地架设一个 Web 服务器，然后以 `http://` 或 `https://` 开头的地址来正常执行所有 JavaScript 代码。如有需要请下载 Mr.Hope 制作的 WAMP / WNMP 一键安装工具。

### 使用 Node.js

Node.js 是一个著名的基于 JavaScript 的后端工具，可以很方便快捷的执行并调试 JavaScript。

::: tip

关于 Node.js 的详细教程，请查看[这里](../../../node-js/README.md)

:::

## JavaScript 的调试

### 浏览器

写 JavaScript 的时候，如果期望显示 `ABC` ，结果却显示 `XYZ` ，找出问题代码，这就需要调试。

怎么在浏览器中调试 JavaScript 代码呢?

首先，安装 Google Chrome 浏览器，Chrome 浏览器对开发者非常友好，可以方便地调试 JavaScript 代码。

安装后，在调试的网页上直接按 `F12` 就可以进入到开发者工具模式。

可以在控制台进行代码的调试与执行。

开发者工具的 “源码(Sources)”，可以提供更高级的操作，比如断点、单步执行等高级调试技巧。

### Node.js

如果本地已经安装了 Node.js，也可以通过使用 Node.js 直接执行相应文件的方式来进行调试。

### VS Code

1. 安装 Live Server 扩展。

1. 新建一个 HTML 网页，补全必要结构。

1. 通过 `<script>` 标签引入 Javascript。

1. 在 HTML 文件中右键选择 "Open with Live Server" 或者点击右下角的 Go Live，这会在 VSCode 内的 Tab 选项卡打开一个网页。

1. 在 VS Code 编辑器中在需要的位置设置断点，按 F5 调试，运行与调试窗口就会显示变量数值，下方的调试控制台会显示输出内容。
