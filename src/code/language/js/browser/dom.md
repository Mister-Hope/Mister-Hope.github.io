---
title: 操作 DOM
icon: tree
date: 2019-10-16
category: JavaScript
---

由于 HTML 文档被浏览器解析后就是一棵 DOM 树，要改变 HTML 的结构，就需要通过 JavaScript 来操作 DOM。

始终记住 DOM 是一个树形结构。操作一个 DOM 节点实际上就是这么几个操作:

- 更新: 更新该 DOM 节点的内容，相当于更新了该 DOM 节点表示的 HTML 的内容；

- 遍历: 遍历该 DOM 节点下的子节点，以便进行进一步操作；

- 添加: 在该 DOM 节点下新增一个子节点，相当于动态增加了一个 HTML 节点；

- 删除: 将该节点从 HTML 中删除，相当于删掉了该 DOM 节点的内容以及它包含的所有子节点。

<!-- more -->

在操作一个 DOM 节点前，我们需要通过各种方式先拿到这个 DOM 节点。最常用的方法是使用 `querySelector()` 和 `querySelectorAll()`。

使用这个 API 需要了解 CSS selector 语法，然后使用条件来获取节点，十分方便:

```js
// 通过 querySelector 获取 ID 为 q1 的节点:
const q1 = document.querySelector("#q1");

// 通过 querySelectorAll 获取 q1 节点内的符合条件的所有节点:
const ps = q1.querySelectorAll("div.highlighted > p");
```

::: warning

低版本的 IE < 8 不支持 `querySelector` 和 `querySelectorAll`。IE8 仅有限支持。

在历史上，使用的方法是 `document.getElementById()` 和 `document.getElementsByTagName()`，以及 CSS 选择器 `document.getElementsByClassName()`。

由于 ID 在 HTML 文档中是唯一的，所以 `document.getElementById()` 可以直接定位唯一的一个 DOM 节点。`document.getElementsByTagName()` 和 `document.getElementsByClassName()` 总是返回一组 DOM 节点。要精确地选择 DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。

例如:

```js
// 返回ID为 'test' 的节点:
const test = document.getElementById("test");

// 先定位ID为'test-table'的节点，再返回其内部所有tr节点:
const trs = document.getElementById("test-table").getElementsByTagName("tr");

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点:
const reds = document.getElementById("test-div").getElementsByClassName("red");

// 获取节点 test 下的所有直属子节点:
const cs = test.children;

// 获取节点 test 下第一个、最后一个子节点:
const first = test.firstElementChild;
const last = test.lastElementChild;
```

:::

严格地讲，我们这里的 DOM 节点是指 `Element`，但是 DOM 节点实际上是 `Node`，在 HTML 中，`Node` 包括 `Element`、`Comment`、`CDATA_SECTION` 等很多种，以及根节点 `Document` 类型，但是，绝大多数时候我们只关心 `Element`，也就是实际控制页面结构的 `Node`，其他类型的 `Node` 忽略即可。根节点 Document 已经自动绑定为全局变量 `document`。

## 更新 DOM

拿到一个 DOM 节点后，我们可以对它进行更新。

可以直接修改节点的文本，方法有两种:

一种是修改 `innerHTML` 属性，这个方式非常强大，不但可以修改一个 DOM 节点的文本内容，还可以直接通过 HTML 片段修改 DOM 节点内部的子树:

```js
// 获取<p id="p-id">...</p>
const p = document.querySelector("#p-id");
// 设置文本为abc:
p.innerHTML = "ABC"; // <p id="p-id">ABC</p>
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p>的内部结构已修改
```

用 `innerHTML` 时要注意，是否需要写入 HTML。如果写入的字符串是通过网络拿到了，要注意对字符编码来避免 XSS 攻击。

第二种是修改 `innerText` 或 `textContent` 属性，这样可以自动对字符串进行 HTML 编码，保证无法设置任何 HTML 标签:

```js
// 获取<p id="p-id">...</p>
const p = document.querySelector("#p-id");
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
```

两者的区别在于读取属性时，`innerText` 不返回隐藏元素的文本，而 `textContent` 返回所有文本。

::: warning

IE < 9 不支持 `textContent`。

:::

修改 CSS 也是经常需要的操作。DOM 节点的 style 属性对应所有的 CSS，可以直接获取或设置。因为 CSS 允许 `font-size` 这样的名称，但它并非 JavaScript 有效的属性名，所以需要在 JavaScript 中改写为驼峰式命名 `fontSize`:

```js
// 获取<p id="p-id">...</p>
const p = document.querySelector("#p-id");
// 设置CSS:
p.style.color = "#ff0000";
p.style.fontSize = "20px";
p.style.paddingTop = "2em";
```

## 插入 DOM

当我们获得了某个 DOM 节点，想在这个 DOM 节点内插入新的 DOM，应该如何做?

如果这个 DOM 节点是空的，例如，`<div></div>`，那么，直接使用 `innerHTML = '<span>child</span>'` 就可以修改 DOM 节点的内容，相当于“插入”了新的 DOM 节点。

如果这个 DOM 节点不是空的，那就不能这么做，因为 `innerHTML` 会直接替换掉原来的所有子节点。

有两个办法可以插入新的节点。一个是使用 `appendChild`，把一个子节点添加到父节点的最后一个子节点。例如:

```html
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
  <p id="java">Java</p>
  <p id="python">Python</p>
  <p id="scheme">Scheme</p>
</div>
```

把 `<p id="js">JavaScript</p>` 添加到 `<div id="list">` 的最后一项:

```js
const js = document.querySelector("#js");
const list = document.querySelector("#list");

list.appendChild(js);
```

现在，HTML 结构变成了这样:

```html
<!-- HTML结构 -->
<div id="list">
  <p id="java">Java</p>
  <p id="python">Python</p>
  <p id="scheme">Scheme</p>
  <p id="js">JavaScript</p>
</div>
```

因为我们插入的 js 节点已经存在于当前的文档树，因此这个节点首先会从原先的位置删除，再插入到新的位置。

更多的时候我们会从零创建一个新的节点，然后插入到指定位置:

```js
const list = document.querySelector("#list");
const haskell = document.createElement("p");

haskell.id = "haskell";
haskell.innerText = "Haskell";
list.appendChild(haskell);
```

这样我们就动态添加了一个新的节点:

```html
<!-- HTML结构 -->
<div id="list">
  <p id="java">Java</p>
  <p id="python">Python</p>
  <p id="scheme">Scheme</p>
  <p id="haskell">Haskell</p>
</div>
```

动态创建一个节点然后添加到 DOM 树中，可以实现很多功能。举个例子，下面的代码动态创建了一个 `<style>` 节点，然后把它添加到 `<head>` 节点的末尾，这样就动态地给文档添加了新的 CSS 定义:

```js
const d = document.createElement("style");

d.setAttribute("type", "text/css");
d.innerHTML = "p { color: red }";
document.getElementsByTagName("head")[0].appendChild(d);
```

可以在 Chrome 的控制台执行上述代码，观察页面样式的变化。

### insertBefore

如果我们要把子节点插入到指定的位置怎么办? 可以使用 `parentElement.insertBefore(newElement, referenceElement);`，子节点会插入到 `referenceElement` 之前。

还是以上面的 HTML 为例，假定我们要把 `Haskell` 插入到 `Python` 之前:

```html
<!-- HTML结构 -->
<div id="list">
  <p id="java">Java</p>
  <p id="python">Python</p>
  <p id="scheme">Scheme</p>
</div>
```

可以这么写:

```js
const list = document.querySelector("#list");
const ref = document.querySelector("#python");
const haskell = document.createElement("p");

haskell.id = "haskell";
haskell.innerText = "Haskell";
list.insertBefore(haskell, ref);
```

新的 HTML 结构如下:

```html
<!-- HTML结构 -->
<div id="list">
  <p id="java">Java</p>
  <p id="haskell">Haskell</p>
  <p id="python">Python</p>
  <p id="scheme">Scheme</p>
</div>
```

可见，使用 `insertBefore` 重点是要拿到一个“参考子节点”的引用。很多时候，需要循环一个父节点的所有子节点，可以通过迭代 `children` 属性实现:

```js
let c;
const list = document.querySelector("#list");

for (let i = 0; i < list.children.length; i++) c = list.children[i]; // 拿到第i个子节点
```

## 删除 DOM

删除一个 DOM 节点就比插入要容易得多。

要删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的 `removeChild` 把自己删掉:

```js
// 拿到待删除节点:
const self = document.querySelector("#to-be-removed");
// 拿到父节点:
const parent = self.parentElement;
// 删除:
const removed = parent.removeChild(self);

removed === self; // true
```

::: warning

删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。

:::

当您遍历一个父节点的子节点并进行删除操作时，要注意，`children` 属性是一个只读属性，并且它在子节点变化时会实时更新。

例如，对于如下 HTML 结构:

```html
<div id="parent">
  <p>First</p>
  <p>Second</p>
</div>
```

当我们用如下代码删除子节点时:

```js
const parent = document.querySelector("#parent");

parent.removeChild(parent.children[0]);
parent.removeChild(parent.children[1]); // <-- 浏览器报错
```

浏览器报错: `parent.children[1]` 不是一个有效的节点。原因就在于，当 `<p>First</p>` 节点被删除后，`parent.children` 的节点数量已经从 `2` 变为了 `1`，索引 `[1]` 已经不存在了。

因此，删除多个节点时，要注意 `children` 属性时刻都在变化。
