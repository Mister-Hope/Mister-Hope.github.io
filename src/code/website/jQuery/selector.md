---
icon: list
title: 选择器
date: 2019-11-03
category: jQuery
---

选择器是 jQuery 的核心。一个选择器写出来类似 `$('#dom-id')`。

<!-- more -->

为什么 jQuery 要发明选择器? 回顾一下 DOM 操作中我们经常使用的代码:

```js
// 按ID查找:
const a = document.getElementById('dom-id');

// 按tag查找:
const divs = document.getElementsByTagName('div');

// 查找<p class="red">:
const ps = document.getElementsByTagName('p');
// 过滤出class="red":
// TODO:

// 查找<table class="green">里面的所有<tr>:
const table = ...
for (let i = 0; i < table.children; i++) {
    // TODO: 过滤出<tr>
}
```

这些代码实在太繁琐了，并且，在层级关系中，例如，查找 `<table class="green">` 里面的所有 `<tr>`，一层循环实际上是错的，因为 `<table>` 的标准写法是:

```html
<table>
  <tbody>
    <tr>
      ...
    </tr>
    <tr>
      ...
    </tr>
  </tbody>
</table>
```

很多时候，需要递归查找所有子节点。

jQuery 的选择器就是帮助我们快速定位到一个或多个 DOM 节点。

## 简单选择器

::: tip

jQuery 的选择器特别像 CSS 的选择器

:::

### 按 ID 查找

如果某个 DOM 节点有 id 属性，利用 jQuery 查找如下:

```js
// 查找<div id="abc">:
const div = $("#abc");
```

注意，`#abc` 以 `#` 开头。返回的对象是 jQuery 对象。

什么是 jQuery 对象? jQuery 对象类似数组，它的每个元素都是一个引用了 DOM 节点的对象。

以上面的查找为例，如果 id 为 `abc` 的 `<div>` 存在，返回的 jQuery 对象如下:

```html
[
<div id="abc">...</div>
]
```

如果 id 为 abc 的 `<div>` 不存在，返回的 jQuery 对象如下:

`[]`

总之 jQuery 的选择器不会返回 `undefined` 或者 `null`，这样的好处是您不必在下一行判断 `if (div === undefined)`。

jQuery 对象和 DOM 对象之间可以互相转化:

```js
const div = $("#abc"); // jQuery对象
const divDom = div.get(0); // 假设存在div，获取第1个DOM元素
const another = $(divDom); // 重新把DOM包装为jQuery对象
```

通常情况下您不需要获取 DOM 对象，直接使用 jQuery 对象更加方便。如果您拿到了一个 DOM 对象，那可以简单地调用 `$(aDomObject)` 把它变成 jQuery 对象，这样就可以方便地使用 jQuery 的 API 了。

### 按 tag 查找

按 tag 查找只需要写上 tag 名称就可以了:

```js
const ps = $("p"); // 返回所有 <p> 节点
ps.length; // 数一数页面有多少个 <p> 节点
```

### 按 class 查找

按 class 查找注意在 class 名称前加一个 `.`:

```js
const a = $(".red"); // 所有节点包含 `class="red"` 都将返回
// 例如:
// <div class="red">...</div>
// <p class="green red">...</p>
```

通常很多节点有多个 **class**，我们可以查找同时包含 `red` 和 `green` 的节点:

```js
const a = $(".red.green"); // 注意没有空格!
// 符合条件的节点:
// <div class="red green">...</div>
// <div class="blue green red">...</div>
```

### 按属性查找

一个 DOM 节点除了 id 和 class 外还可以有很多属性，很多时候按属性查找会非常方便，比如在一个表单中按属性来查找:

```js
const email = $("[name=email]"); // 找出 `<??? name="email">`
const passwordInput = $("[type=password]"); // 找出 `<??? type="password">`
const a = $('[items="A B"]'); // 找出 `<??? items="A B">`
```

当属性的值包含空格等特殊字符时，需要用双引号括起来。

按属性查找还可以使用前缀查找或者后缀查找:

```js
const icons = $("[name^=icon]"); // 找出所有name属性值以icon开头的DOM
// 例如: name="icon-1", name="icon-2"
const names = $("[name$=with]"); // 找出所有 name 属性值以 with 结尾的 DOM
// 例如: name="startswith", name="endswith"
```

这个方法尤其适合通过 class 属性查找，且不受 class 包含多个名称的影响:

```js
const icons = $('[class^="icon-"]'); // 找出所有 class 包含至少一个以 `icon-` 开头的DOM
// 例如: class="icon-clock", class="abc icon-home"
```

### 组合查找

组合查找就是把上述简单选择器组合起来使用。如果我们查找 `$('[name=email]')`，很可能把表单外的 `<div name="email">` 也找出来，但我们只希望查找 `<input>`，就可以这么写:

```js
const emailInput = $("input[name=email]"); // 不会找出 <div name="email">
```

同样的，根据 tag 和 class 来组合查找也很常见:

```js
const tr = $("tr.red"); // 找出 <tr class="red ...">...</tr>
```

## 多项选择器

多项选择器就是把多个选择器用，组合起来一块选:

```js
$("p,div"); // 把 <p> 和 <div> 选出来
$("p.red,p.green"); // 把 <p class="red"> 和 <p class="green"> 都选出来
```

要注意的是，选出来的元素是按照它们在 HTML 中出现的顺序排列的，而且不会有重复元素。例如，`<p class="red green">` 不会被上面的 `$('p.red,p.green')` 选择两次。

## 层级选择器

除了基本的选择器外，jQuery 的层级选择器更加灵活，也更强大。

因为 DOM 的结构就是层级结构，所以我们经常要根据层级关系进行选择。

### 层级选择器 (Descendant Selector)

如果两个 DOM 元素具有层级关系，就可以用 `$('ancestor descendant')` 来选择，层级之间用空格隔开。例如:

```html
<!-- HTML结构 -->
<div class="testing">
  <ul class="lang">
    <li class="lang-javascript">JavaScript</li>
    <li class="lang-python">Python</li>
    <li class="lang-lua">Lua</li>
  </ul>
</div>
```

要选出 JavaScript，可以用层级选择器:

```js
$("ul.lang li.lang-javascript"); // [<li class="lang-javascript">JavaScript</li>]
$("div.testing li.lang-javascript"); // [<li class="lang-javascript">JavaScript</li>]
```

因为 `<div>` 和 `<ul>` 都是 `<li>` 的祖先节点，所以上面两种方式都可以选出相应的 `<li>` 节点。

要选择所有的 `<li>` 节点，用:

```js
$("ul.lang li");
```

这种层级选择器相比单个的选择器好处在于，它缩小了选择范围，因为首先要定位父节点，才能选择相应的子节点，这样避免了页面其他不相关的元素。

例如:

```js
$("form[name=upload] input");
```

就把选择范围限定在 `name` 属性为 `upload` 的表单里。如果页面有很多表单，其他表单的 `<input>` 不会被选择。

多层选择也是允许的:

```js
$("form.test p input"); // 在 form 表单选择被 <p> 包含的 <input>
```

## 子选择器(Child Selector)

子选择器 `$('parent>child')` 类似层级选择器，但是限定了层级关系必须是父子关系，就是 `<child>` 节点必须是 `<parent>` 节点的直属子节点。还是以上面的例子:

```js
$("ul.lang>li.lang-javascript"); // 可以选出 [<li class="lang-javascript">JavaScript</li>]
$("div.testing>li.lang-javascript"); // [], 无法选出，因为 <div> 和 <li> 不构成父子关系
```

## 过滤器(Filter)

过滤器一般不单独使用，它通常附加在选择器上，帮助我们更精确地定位元素。观察过滤器的效果:

```js
$("ul.lang li"); // 选出JavaScript、Python和Lua 3个节点

$("ul.lang li:first-child"); // 仅选出JavaScript
$("ul.lang li:last-child"); // 仅选出Lua
$("ul.lang li:nth-child(2)"); // 选出第N个元素，N从1开始
$("ul.lang li:nth-child(even)"); // 选出序号为偶数的元素
$("ul.lang li:nth-child(odd)"); // 选出序号为奇数的元素
```

## 表单相关

针对表单元素，jQuery 还有一组特殊的选择器:

- `:input`: 可以选择 `<input>`，`<textarea>`，`<select>` 和 `<button>`；

- `:file`: 可以选择 `<input type="file">`，和 `input[type=file]` 一样；

- `:checkbox`: 可以选择复选框，和 `input[type=checkbox]` 一样；

- `:radio`: 可以选择单选框，和 `input[type=radio]` 一样；

- `:focus`: 可以选择当前输入焦点的元素，例如把光标放到一个 `<input>` 上，用`$('input:focus')` 就可以选出；

- `:checked`: 选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如`$('input[type=radio]:checked')`；

- `:enabled`: 可以选择可以正常输入的 `<input>`、`<select>` 等，也就是没有灰掉的输入；

- `:disabled`: 和 `:enabled` 正好相反，选择那些不能输入的。

此外，jQuery 还有很多有用的选择器，例如，选出可见的或隐藏的元素:

```js
$("div:visible"); // 所有可见的 div
$("div:hidden"); // 所有隐藏的 div
```

## 查找和过滤

通常情况下选择器可以直接定位到我们想要的元素，但是，当我们拿到一个 jQuery 对象后，还可以以这个对象为基准，进行查找和过滤。

### 查找

最常见的查找是在某个节点的所有子节点中查找，使用 `find()` 方法，它本身又接收一个任意的选择器。例如如下的 HTML 结构:

```md
JavaScript
Python
Swift
Scheme
Haskell
```

```html
<!-- HTML结构 -->
<ul class="lang">
  <li class="js dy">JavaScript</li>
  <li class="dy">Python</li>
  <li id="swift">Swift</li>
  <li class="dy">Scheme</li>
  <li name="haskell">Haskell</li>
</ul>
```

用 `find()` 查找:

```js
const ul = $("ul.lang"); // 获得 <ul>
const dy = ul.find(".dy"); // 获得 JavaScript, Python, Scheme
const swf = ul.find("#swift"); // 获得 Swift
const hsk = ul.find("[name=haskell]"); // 获得 Haskell
```

如果要从当前节点开始向上查找，使用 `parent()` 方法:

```js
const swf = $("#swift"); // 获得 Swift
const parent = swf.parent(); // 获得 Swift 的上层节点 <ul>
const a = swf.parent(".red"); // 获得 Swift 的上层节点 <ul>，同时传入过滤条件。如果 ul 不符合条件，返回空 jQuery 对象
```

对于位于同一层级的节点，可以通过 `next()` 和 `prev()` 方法，例如:

当我们已经拿到 Swift 节点后:

```js
const swift = $("#swift");

swift.next(); // Scheme
swift.next("[name=haskell]"); // 空的 jQuery 对象，因为 Swift 的下一个元素 Scheme 不符合条件 [name=haskell]

swift.prev(); // Python
swift.prev(".dy"); // Python，因为 Python 同时符合过滤器条件 .dy
```

### 过滤

和函数式编程的 `map`、`filter` 类似，jQuery 对象也有类似的方法。

`filter()` 方法可以过滤掉不符合选择器条件的节点:

```js
const langs = $("ul.lang li"); // 拿到 JavaScript, Python, Swift, Scheme 和 Haskell
const a = langs.filter(".dy"); // 拿到 JavaScript, Python, Scheme
```

或者传入一个函数，要特别注意函数内部的 `this` 被绑定为 DOM 对象，不是 jQuery 对象:

```js
const langs = $("ul.lang li"); // 拿到JavaScript, Python, Swift, Scheme和Haskell
langs.filter(function () {
  return this.innerHTML.indexOf("S") === 0; // 返回 S 开头的节点
}); // 拿到 Swift, Scheme
```

`map()` 方法把一个 jQuery 对象包含的若干 DOM 节点转化为其他对象:

```js
const langs = $("ul.lang li"); // 拿到 JavaScript, Python, Swift, Scheme 和 Haskell
const arr = langs
  .map(function () {
    return this.innerHTML;
  })
  .get(); // 用 get() 拿到包含 string 的 Array: ['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']
```

此外，一个 jQuery 对象如果包含了不止一个 DOM 节点，`first()`、`last()` 和 `slice()` 方法可以返回一个新的 jQuery 对象，把不需要的 DOM 节点去掉:

```js
const langs = $("ul.lang li"); // 拿到 JavaScript, Python, Swift, Scheme 和 Haskell
const js = langs.first(); // JavaScript，相当于 $('ul.lang li:first-child')
const haskell = langs.last(); // Haskell, 相当于 $('ul.lang li:last-child')
const sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的 slice() 方法一致
```
