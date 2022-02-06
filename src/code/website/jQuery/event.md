---
title: 事件
icon: activity
date: 2019-11-04
category: jQuery
---

::: tip 章节过时

由于目前各浏览器 API 已经基本统一，无需使用 jQuery 绑定事件了。

:::

<!-- more -->

因为 JavaScript 在浏览器中以单线程模式运行，页面加载后，一旦页面上所有的 JavaScript 代码被执行完后，就只能依赖触发事件来执行 JavaScript 代码。

浏览器在接收到用户的鼠标或键盘输入后，会自动在对应的 DOM 节点上触发相应的事件。如果该节点已经绑定了对应的 JavaScript 处理函数，该函数就会自动调用。

由于不同的浏览器绑定事件的代码都不太一样，所以用 jQuery 来写代码，就屏蔽了不同浏览器的差异，我们总是编写相同的代码。

举个例子，假设要在用户点击了超链接时弹出提示框，我们用 jQuery 这样绑定一个 `click` 事件:

```js
/* HTML:
 *
 * <a id="test-link" href="#0">点我试试</a>
 *
 */

// 获取超链接的jQuery对象:
const a = $("#test-link");

a.on("click", function () {
  alert("Hello!");
});
```

`on` 方法用来绑定一个事件，我们需要传入事件名称和对应的处理函数。

另一种更简化的写法是直接调用 `click()` 方法:

```js
a.click(function () {
  alert("Hello!");
});
```

两者完全等价。我们通常用后面的写法。

jQuery 能够绑定的事件主要包括:

## 鼠标事件

- `click`: 鼠标单击时触发；
- `dblclick`: 鼠标双击时触发；
- `mouseenter`: 鼠标进入时触发；
- `mouseleave`: 鼠标移出时触发；
- `mousemove`: 鼠标在 DOM 内部移动时触发；
- `hover`: 鼠标进入和退出时触发两个函数，相当于 `mouseenter` 加上 `mouseleave`。

## 键盘事件

键盘事件仅作用在当前焦点的 DOM 上，通常是 `<input>` 和 `<textarea>`。

- `keydown`: 键盘按下时触发；
- `keyup`: 键盘松开时触发；
- `keypress`: 按一次键后触发。

## 其他事件

- `focus`: 当 DOM 获得焦点时触发；
- `blur`: 当 DOM 失去焦点时触发；
- `change`: 当 `<input>`、`<select>` 或 `<textarea>` 的内容改变时触发；
- `submit`: 当 `<form>` 提交时触发；
- `ready`: 当页面被载入并且 DOM 树完成初始化后触发。

其中，`ready` 仅作用于 document 对象。由于 ready 事件在 DOM 完成初始化后触发，且只触发一次，所以非常适合用来写其他的初始化代码。假设我们想给一个 `<form>` 表单绑定 submit 事件，下面的代码没有预期的效果:

```html
<html>
  <head>
    <script>
      // 代码有误:
      $('#testForm).on('submit', function () {
          alert('submit!');
      });
    </script>
  </head>
  <body>
    <form id="testForm">...</form>
  </body>
</html>
```

因为 JavaScript 在此执行的时候，`<form>` 尚未载入浏览器，所以 `$('#testForm)` 返回 `[]`，并没有绑定事件到任何 DOM 上。

所以我们自己的初始化代码必须放到 document 对象的 `ready` 事件中，保证 DOM 已完成初始化:

```html
<html>
  <head>
    <script>
      $(document).on('ready', function () {
          $('#testForm).on('submit', function () {
              alert('submit!');
          });
      });
    </script>
  </head>
  <body>
    <form id="testForm">...</form>
  </body>
</html>
```

这样写就没有问题了。因为相关代码会在 DOM 树初始化后再执行。

由于 `ready` 事件使用非常普遍，所以可以这样简化:

```js
$(document).ready(function () {
    // on('submit', function)也可以简化:
    $('#testForm).submit(function () {
        alert('submit!');
    });
});
```

甚至还可以再简化为:

```js
$(function () {
  // init...
});
```

上面的这种写法最为常见。如果您遇到 `$(function () {...})` 的形式，牢记这是 document 对象的 `ready` 事件处理函数。

完全可以反复绑定事件处理函数，它们会依次执行:

```js
$(function () {
  console.log("init A...");
});
$(function () {
  console.log("init B...");
});
$(function () {
  console.log("init C...");
});
```

## 事件参数

有些事件，如 `mousemove` 和 `keypress`，我们需要获取鼠标位置和按键的值，否则监听这些事件就没什么意义了。所有事件都会传入 Event 对象作为参数，可以从 Event 对象上获取到更多的信息:

```js
$(function () {
  $("#testMouseMoveDiv").mousemove(function (e) {
    $("#testMouseMoveSpan").text("pageX = " + e.pageX + ", pageY = " + e.pageY);
  });
});
```

## 取消绑定

一个已被绑定的事件可以解除绑定，通过 `off('click', function)` 实现:

```js
function hello() {
    alert('hello!');
}

a.click(hello); // 绑定事件

// 10秒钟后解除绑定:
setTimeout(function () {
    a.off('click', hello);
}, 10000);
需要特别注意的是，下面这种写法是无效的:

// 绑定事件:
a.click(function () {
    alert('hello!');
});

// 解除绑定:
a.off('click', function () {
    alert('hello!');
});
```

这是因为两个匿名函数虽然长得一模一样，但是它们是两个不同的函数对象，`off('click', function () {...})` 无法移除已绑定的第一个匿名函数。

为了实现移除效果，可以使用 `off('click')` 一次性移除已绑定的 click 事件的所有处理函数。

同理，无参数调用 `off()` 一次性移除已绑定的所有类型的事件处理函数。

## 事件触发条件

一个需要注意的问题是，事件的触发总是由用户操作引发的。例如，我们监控文本框的内容改动:

```js
const input = $("#test-input");

input.change(function () {
  console.log("changed...");
});
```

当用户在文本框中输入时，就会触发 `change` 事件。但是，如果用 JavaScript 代码去改动文本框的值，将不会触发 `change` 事件:

```js
const input = $("#test-input");

input.val("change it!"); // 无法触发change事件
```

有些时候，我们希望用代码触发 `change` 事件，可以直接调用无参数的 `change()` 方法来触发该事件:

```js
const input = $("#test-input");

input.val("change it!");
input.change(); // 触发change事件
```

`input.change()` 相当于 `input.trigger('change')`，它是 `trigger()` 方法的简写。

为什么我们希望手动触发一个事件呢? 如果不这么做，很多时候，我们就得写两份一模一样的代码。

## 浏览器安全限制

在浏览器中，有些 JavaScript 代码只有在用户触发下才能执行，例如，`window.open()` 函数:

```js
// 无法弹出新窗口，将被浏览器屏蔽:
$(function () {
  window.open("/");
});
```

这些 “敏感代码” 只能由用户操作来触发:

```js
const button1 = $("#testPopupButton1");
const button2 = $("#testPopupButton2");

function popupTestWindow() {
  window.open("/");
}

button1.click(function () {
  popupTestWindow();
});

button2.click(function () {
  // 不立刻执行 popupTestWindow()，100 毫秒后执行:
  setTimeout(popupTestWindow, 100);
});
```

当用户点击 button1 时，`click` 事件被触发，由于 `popupTestWindow()` 在 `click` 事件处理函数内执行，这是浏览器允许的，而 button2 的 `click` 事件并未立刻执行 `popupTestWindow()`，延迟执行的 `popupTestWindow()` 将被浏览器拦截。
