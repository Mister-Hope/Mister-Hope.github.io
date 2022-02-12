---
title: 修改 DOM 结构
icon: edit
date: 2019-11-03
category: jQuery
---

::: tip 章节过时

而且目前浏览器 API 已经基本统一，除非兼容旧版本 IE，否则无需针对不同浏览器写不同的代码。

:::

<!-- more -->

直接使用浏览器提供的 API 对 DOM 结构进行修改，不但代码复杂，而且要针对浏览器写不同的代码。

有了 jQuery，我们就专注于操作 jQuery 对象本身，底层的 DOM 操作由 jQuery 完成就可以了，这样一来，修改 DOM 也大大简化了。

## 添加 DOM

要添加新的 DOM 节点，除了通过 jQuery 的 `html()` 这种暴力方法外，还可以用 `append()` 方法，例如:

```html
<div id="test-div">
  <ul>
    <li><span>JavaScript</span></li>
    <li><span>Python</span></li>
    <li><span>Swift</span></li>
  </ul>
</div>
```

如何向列表新增一个语言? 首先要拿到 `<ul>` 节点:

```js
const ul = $("#test-div>ul");
```

然后，调用 `append()` 传入 HTML 片段:

```js
ul.append("<li><span>Haskell</span></li>");
```

除了接受字符串，`append()` 还可以传入原始的 DOM 对象，jQuery 对象和函数对象:

```js
// 创建DOM对象:
const ps = document.createElement("li");
ps.innerHTML = "<span>Pascal</span>";
// 添加DOM对象:
ul.append(ps);

// 添加jQuery对象:
ul.append($("#scheme"));

// 添加函数对象:
ul.append(function (index, html) {
  return "<li><span>Language - " + index + "</span></li>";
});
```

传入函数时，要求返回一个字符串、DOM 对象或者 jQuery 对象。因为 jQuery 的 `append()` 可能作用于一组 DOM 节点，只有传入函数才能针对每个 DOM 生成不同的子节点。

`append()` 把 DOM 添加到最后，`prepend()` 则把 DOM 添加到最前。

另外注意，如果要添加的 DOM 节点已经存在于 HTML 文档中，它会首先从文档移除，然后再添加，也就是说，用 `append()`，您可以移动一个 DOM 节点。

如果要把新节点插入到指定位置，例如，JavaScript 和 Python 之间，那么，可以先定位到 JavaScript，然后用 `after()` 方法:

```js
const js = $("#test-div>ul>li:first-child");
js.after("<li><span>Lua</span></li>");
```

也就是说，同级节点可以用 `after()` 或者 `before()` 方法。

## 删除节点

要删除 DOM 节点，拿到 jQuery 对象后直接调用 `remove()` 方法就可以了。如果 jQuery 对象包含若干 DOM 节点，实际上可以一次删除多个 DOM 节点:

```js
const li = $("#test-div>ul>li");
li.remove(); // 所有<li>全被删除
```
