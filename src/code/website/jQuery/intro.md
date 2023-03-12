---
title: jQuery 介绍
icon: creative
category: jQuery
date: 2019-11-02
tag:
  - 介绍
---

jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。

jQuery 能帮我们干这些事情:

- 消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；
- 简洁的操作 DOM 的方法: 写 `$('#test')` 肯定比 `document.getElementById('test')` 来得简洁；
- 轻松实现动画、修改 CSS 等各种操作。
- jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!

<!-- more -->

## jQuery 版本

::: tip

jQuery 的 `1.x` 版本 兼容 ie678，`2.x` 为了精简代码体积移除了 ie678 的兼容。`3.x` 只兼容最新的一批浏览器，是官方还在更新维护的把呢不能

由于已经 2023 年了，直接选用 jQuery`3.x` 版本即可。

:::

从 jQuery 官网可以下载最新版本。jQuery 只是一个 jquery-xxx.js 文件，但您会看到有 compressed(已压缩)和 uncompressed(未压缩)两种版本，使用时完全一样，但如果您想深入研究 jQuery 源码，那就用 uncompressed 版本。

## 使用 jQuery

使用 jQuery 只需要在页面的 `<head>` 引入 jQuery 文件即可:

```html
<html>
  <head>
    <script src="//code.jquery.com/jquery-3.4.1.min.js"></script>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

## \$ 符号

`$` 是著名的 jQuery 符号。实际上，jQuery 把所有功能全部封装在一个全局变量 jQuery 中，而 `$` 也是一个合法的变量名，它是变量 jQuery 的别名:

```js
window.jQuery; // jQuery(selector, context)
window.$; // jQuery(selector, context)
$ === jQuery; // true
typeof $; // 'function'
```

`$` 本质上就是一个函数，但是函数也是对象，于是 `$` 除了可以直接调用外，也可以有很多其他属性。

注意，您看到的 `$` 函数名可能不是 `jQuery(selector, context)`，因为很多 JavaScript 压缩工具可以对函数名和参数改名，所以压缩过的 jQuery 源码 `$` 函数可能变成 `a(b, c)`。

绝大多数时候，我们都直接用 `$` (因为写起来更简单嘛)。但是，如果 `$` 这个变量不幸地被占用了，而且还不能改，那我们就只能让 jQuery 把 `$` 变量交出来，然后就只能使用 `jQuery` 这个变量:

```js
$; // jQuery(selector, context)
jQuery.noConflict();
$; // undefined
jQuery; // jQuery(selector, context)
```

这种黑魔法的原理是 jQuery 在占用`$`之前，先在内部保存了原来的`$`,调用 `jQuery.noConflict()` 时会把原来保存的变量还原。
