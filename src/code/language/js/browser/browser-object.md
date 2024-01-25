---
title: 浏览器对象
icon: object
date: 2019-10-16
category: JavaScript
---

JavaScript 可以获取浏览器提供的很多对象，并进行操作。

<!-- more -->

## window

`window` 对象不但充当全局作用域，而且表示浏览器窗口。

`window` 对象有 `innerWidth` 和 `innerHeight` 属性，可以获取浏览器窗口的内部宽度和高度。内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。

::: info 兼容性

IE <= 8 不支持。

:::

```js
"use strict";

// 可以调整浏览器窗口大小试试:
console.log(`window inner size: ${window.innerWidth} x ${window.innerHeight}`);
```

对应的，还有一个 `outerWidth` 和 `outerHeight` 属性，可以获取浏览器窗口的整个宽高。

## navigator

`navigator` 对象表示浏览器的信息，最常用的属性包括:

- `navigator.appName`: 浏览器名称；
- `navigator.appVersion`: 浏览器版本；
- `navigator.language`: 浏览器设置的语言；
- `navigator.platform`: 操作系统类型；
- `navigator.userAgent`: 浏览器设定的 User-Agent 字符串。

```js
"use strict";

console.log(`appName = ${navigator.appName}`);
console.log(`appVersion = ${navigator.appVersion}`);
console.log(`language = ${navigator.language}`);
console.log(`platform = ${navigator.platform}`);
console.log(`userAgent = ${navigator.userAgent}`);
```

请注意，`navigator` 的信息可以很容易地被用户修改，所以 JavaScript 读取的值不一定是正确的。很多初学者为了针对不同浏览器编写不同的代码，喜欢用 `if` 判断浏览器版本，例如:

```js
let width;
if (getIEVersion(navigator.userAgent) < 9) width = document.body.clientWidth;
else width = window.innerWidth;
```

但这样既可能判断不准确，也很难维护代码。正确的方法是充分利用 JavaScript 对不存在属性返回 `undefined` 的特性，直接用短路运算符 `||` 计算:

```js
const width = window.innerWidth || document.body.clientWidth;
```

## screen

`screen` 对象表示屏幕的信息，常用的属性有:

- `screen.width`: 屏幕宽度，以像素为单位；
- `screen.height`: 屏幕高度，以像素为单位；
- `screen.colorDepth`: 返回颜色位数，如 8、16、24。

```js
"use strict";

console.log(`Screen size = ${screen.width} x ${screen.height}`);
```

## location

`location` 对象表示当前页面的 URL 信息。例如，一个完整的 URL:

`https://www.example.com:8080/path/index.html?a=1&b=2#TOP`
可以用 `location.href` 获取。要获得 URL 各个部分的值，可以这么写:

```js
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'
```

要加载一个新页面，可以调用 `location.assign()`。如果要重新加载当前页面，调用 `location.reload()` 方法非常方便。

```js
"use strict";

if (confirm("重新加载当前页" + location.href + "?")) location.reload();
else location.assign("/"); // 设置一个新的 URL 地址
```

## document

`document` 对象表示当前页面。由于 HTML 在浏览器中以 DOM 形式表示为树形结构，`document` 对象就是整个 DOM 树的根节点。

`document` 的 title 属性是从 HTML 文档中的 `<title>xxx</title>` 读取的，但是可以动态改变:

```js
"use strict";
document.title = "努力学习JavaScript!";
```

要查找 DOM 树的某个节点，需要从 document 对象开始查找。最常用的查找是根据 ID 和 Tag Name。

我们先准备 HTML 数据:

```html
<dl id="drink-menu" style="border:solid 1px #ccc;padding:6px;">
  <dt>摩卡</dt>
  <dd>热摩卡咖啡</dd>
  <dt>酸奶</dt>
  <dd>北京老酸奶</dd>
  <dt>果汁</dt>
  <dd>鲜榨苹果汁</dd>
</dl>
```

用 `document` 对象提供的 `getElementById()` 和 `getElementsByTagName()` 可以按 ID 获得一个 DOM 节点和按 Tag 名称获得一组 DOM 节点:

```js
"use strict";

let menu = document.getElementById("drink-menu");
let drinks = document.getElementsByTagName("dt");
let s, menu, drinks;

menu = document.getElementById("drink-menu");
menu.tagName; // 'DL'

drinks = document.getElementsByTagName("dt");
s = "提供的饮料有:";
for (let i = 0; i < drinks.length; i++) s = s + drinks[i].innerHTML + ",";

console.log(s);
```

```text
摩卡
热摩卡咖啡
酸奶
北京老酸奶
果汁
鲜榨苹果汁
```

`document` 对象还有一个 `cookie` 属性，可以获取当前页面的 Cookie。

Cookie 是由服务器发送的 `key-value` 标示符。因为 HTTP 协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，就可以用 Cookie 来区分。当一个用户成功登录后，服务器发送一个 Cookie 给浏览器，例如 `user=ABC123XYZ` (加密的字符串)...，此后，浏览器访问该网站时，会在请求头附上这个 Cookie，服务器根据 Cookie 即可区分出用户。

Cookie 还可以存储网站的一些设置，例如，页面显示的语言等等。

JavaScript 可以通过 `document.cookie` 读取到当前页面的 Cookie:

```js
document.cookie; // 'v=123; remember=true; prefer=zh'
```

由于 JavaScript 能读取到页面的 Cookie，而用户的登录信息通常也存在 Cookie 中，这就造成了巨大的安全隐患，这是因为在 HTML 页面中引入第三方的 JavaScript 代码是允许的:

```html
<!-- 当前页面在 www.example.com -->
<html>
  <head>
    <script src="https://www.foo.com/jquery.js"></script>
  </head>
  ...
</html>
```

如果引入的第三方的 JavaScript 中存在恶意代码，则 `www.foo.com` 网站将直接获取到 `www.example.com` 网站的用户登录信息。

为了解决这个问题，服务器在设置 Cookie 时可以使用 `httpOnly`，设定了 httpOnly 的 Cookie 将不能被 JavaScript 读取。这个行为由浏览器实现，主流浏览器均支持 httpOnly 选项，IE 从 IE6 SP1 开始支持

为了确保安全，服务器端在设置 Cookie 时，应该始终坚持使用 `httpOnly`。

## history

`history` 对象保存了浏览器的历史记录，JavaScript 可以调用 history 对象的 `back()` 或 `forward ()`，相当于用户点击了浏览器的“后退”或“前进”按钮。

这个对象属于历史遗留对象，对于现代 Web 页面来说，由于大量使用 Ajax 和页面交互，简单粗暴地调用 `history.back()` 可能会让用户感到非常愤怒。

新手开始设计 Web 页面时喜欢在登录页登录成功时调用 `history.back()`，试图回到登录前的页面。这是一种错误的方法。
