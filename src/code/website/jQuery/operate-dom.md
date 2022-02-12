---
title: 操作 DOM
icon: operate
date: 2019-11-03
category: jQuery
---

::: tip 章节过时

目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。

:::

<!-- more -->

jQuery 的选择器很强大，用起来又简单又灵活，但是搞了这么久，我拿到了 jQuery 对象，到底要干什么?

答案当然是操作对应的 DOM 节点啦!

回顾一下修改 DOM 的 CSS、文本、设置 HTML 有多么麻烦，而且有的浏览器只有 innerHTML，有的浏览器支持 innerText，有了 jQuery 对象，不需要考虑浏览器差异了，全部统一操作!

## 修改 Text 和 HTML

jQuery 对象的 `text()` 和 `html()` 方法分别获取节点的文本和原始 HTML 文本，例如，如下的 HTML 结构:

```html
<!-- HTML结构 -->
<ul id="test-ul">
  <li class="js">JavaScript</li>
  <li name="book">Java &amp; JavaScript</li>
</ul>
```

分别获取文本和 HTML:

```js
$("#test-ul li[name=book]").text(); // 'Java & JavaScript'
$("#test-ul li[name=book]").html(); // 'Java &amp; JavaScript'
```

如何设置文本或 HTML ? jQuery 的 API 设计非常巧妙: 无参数调用 `text()` 是获取文本，传入参数就变成设置文本，HTML 也是类似操作，自己动手试试:

```js
"use strict";
const j1 = $("#test-ul li.js");
const j2 = $("#test-ul li[name=book]");

j1.html('<span style="color: red">JavaScript</span>');
j2.text("JavaScript & ECMAScript");
```

```md
JavaScript
Java & JavaScript
```

一个 jQuery 对象可以包含 0 个或任意个 DOM 对象，它的方法实际上会作用在对应的每个 DOM 节点上。在上面的例子中试试:

```js
$("#test-ul li").text("JS"); // 是不是两个节点都变成了JS?
```

所以 jQuery 对象的另一个好处是我们可以执行一个操作，作用在对应的一组 DOM 节点上。即使选择器没有返回任何 DOM 节点，调用 jQuery 对象的方法仍然不会报错:

```js
// 如果不存在 id 为 not-exist 的节点:
$("#not-exist").text("Hello"); // 代码不报错，没有节点被设置为'Hello'
```

这意味着 jQuery 帮您免去了许多 if 语句。

## 修改 CSS

jQuery 对象有“批量操作”的特点，这用于修改 CSS 实在是太方便了。考虑下面的 HTML 结构:

```html
<!-- HTML 结构 -->
<ul id="test-css">
  <li class="lang dy"><span>JavaScript</span></li>
  <li class="lang"><span>Java</span></li>
  <li class="lang dy"><span>Python</span></li>
  <li class="lang"><span>Swift</span></li>
  <li class="lang dy"><span>Scheme</span></li>
</ul>
```

要高亮显示动态语言，调用 jQuery 对象的 `css('name', 'value')` 方法，我们用一行语句实现:

```js
"use strict";

$("#test-css li.dy>span")
  .css("background-color", "#ffd351")
  .css("color", "red");
```

```md
JavaScript
Java
Python
Swift
Scheme
```

注意，jQuery 对象的所有方法都返回一个 jQuery 对象(可能是新的也可能是自身)，这样我们可以进行链式调用，非常方便。

jQuery 对象的 `css()` 方法可以这么用:

```js
const div = $("#test-div");
div.css("color"); // '#000033', 获取CSS属性
div.css("color", "#336699"); // 设置CSS属性
div.css("color", ""); // 清除CSS属性
```

为了和 JavaScript 保持一致，CSS 属性可以用 `'background-color'` 和 `'backgroundColor'` 两种格式。

`css()` 方法将作用于 DOM 节点的 style 属性，具有最高优先级。如果要修改 class 属性，可以用 jQuery 提供的下列方法:

```js
const div = $("#test-div");
div.hasClass("highlight"); // false， class是否包含highlight
div.addClass("highlight"); // 添加highlight这个class
div.removeClass("highlight"); // 删除highlight这个class
```

## 显示和隐藏 DOM

要隐藏一个 DOM，我们可以设置 CSS 的 `display` 属性为 `none`，利用 `css()` 方法就可以实现。不过，要显示这个 DOM 就需要恢复原有的 `display` 属性，这就得先记下来原有的 `display` 属性到底是 `block` 还是 `inline` 还是别的值。

考虑到显示和隐藏 DOM 元素使用非常普遍，jQuery 直接提供 `show()` 和 `hide()` 方法，我们不用关心它是如何修改 display 属性的，总之它能正常工作:

```js
const a = $("a[target=_blank]");
a.hide(); // 隐藏
a.show(); // 显示
```

注意，隐藏 DOM 节点并未改变 DOM 树的结构，它只影响 DOM 节点的显示。这和删除 DOM 节点是不同的。

## 获取 DOM 信息

利用 jQuery 对象的若干方法，我们直接可以获取 DOM 的高宽等信息，而无需针对不同浏览器编写特定代码:

```js
// 浏览器可视窗口大小:
$(window).width(); // 800
$(window).height(); // 600

// HTML 文档大小:
$(document).width(); // 800
$(document).height(); // 3500

// 某个 div 的大小:
const div = $("#test-div");
div.width(); // 600
div.height(); // 300
div.width(400); // 设置 CSS 属性 width: 400px，是否生效要看 CSS 是否有效
div.height("200px"); // 设置 CSS 属性 height: 200px，是否生效要看 CSS 是否有效
```

`attr()` 和 `removeAttr()` 方法用于操作 DOM 节点的属性:

```js
// <div id="test-div" name="Test" start="1">...</div>
const div = $("#test-div");
div.attr("data"); // undefined, 属性不存在
div.attr("name"); // 'Test'
div.attr("name", "Hello"); // div 的 name 属性变为 'Hello'
div.removeAttr("name"); // 删除 name 属性
div.attr("name"); // undefined
```

`prop()` 方法和 `attr()` 类似，但是 HTML5 规定有一种属性在 DOM 节点中可以没有值，只有出现与不出现两种，例如:

```html
<input id="test-radio" type="radio" name="test" checked value="1" />
```

等价于:

```html
<input id="test-radio" type="radio" name="test" checked="checked" value="1" />
```

`attr()` 和 `prop()` 对于属性 `checked` 处理有所不同:

```js
const radio = $("#test-radio");
radio.attr("checked"); // 'checked'
radio.prop("checked"); // true
```

`prop()` 返回值更合理一些。不过，用 `is()` 方法判断更好:

```js
const radio = $("#test-radio");
radio.is(":checked"); // true
```

类似的属性还有 `selected`，处理时最好用 `is(':selected')`。

## 操作表单

对于表单元素，jQuery 对象统一提供 `val()` 方法获取和设置对应的 `value` 属性:

```js
/*
    <input id="test-input" name="email" value="">
    <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
        <option value="SH">Shanghai</option>
        <option value="SZ">Shenzhen</option>
    </select>
    <textarea id="test-textarea">Hello</textarea>
*/
const input = $("#test-input"),
  select = $("#test-select"),
  textarea = $("#test-textarea");

input.val(); // 'test'
input.val("abc@example.com"); // 文本框的内容已变为 abc@example.com

select.val(); // 'BJ'
select.val("SH"); // 选择框已变为 Shanghai

textarea.val(); // 'Hello'
textarea.val("Hi"); // 文本区域已更新为 'Hi'
```

可见，一个 `val()` 就统一了各种输入框的取值和赋值的问题。
