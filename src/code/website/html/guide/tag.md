---
title: 常见标签
icon: code
date: 2019-09-01
category: HTML
tag:
  - 快速上手
order: 2
next: ../intro/history.html
---

## HTML 标题

HTML 标题 (Heading) 是通过 `<h1>` - `<h6>` 标签来定义的。

::: normal-demo HTML 标题

```html
<h1>这是一个标题</h1>
<h2>这是一个标题</h2>
<h3>这是一个标题</h3>
```

:::

## HTML 段落

HTML 段落是通过标签 `<p>` 来定义的。

::: normal-demo HTML 段落

```html
<p>这是一个段落。</p>
<p>这是另外一个段落。</p>
```

:::

## HTML 列表

文档许多内容都是列表，HTML 有一些特别的列表元素。标记列表通常包括至少两个元素。最常用的列表类型为:

- 无序列表 (Unordered List) 中项目的顺序不重要，比如购物清单。用一个 `<ul>` 元素包围。
- 有序列表 (Ordered List) 中项目的顺序很重要，比如使用指南。用一个 `<ol>` 元素包围。

列表的每个项目用一个列表项目 (List Item) 元素 `<li>` 包围。

::: normal-demo HTML 列表

```html
<p>购物清单</p>
<ul>
  <li>牛奶</li>
  <li>鸡蛋</li>
  <li>面粉</li>
</ul>

<p>把大象放进冰箱</p>
<ol>
  <li>打开冰箱</li>
  <li>塞入大象</li>
  <li>关上冰箱</li>
</ol>
```

:::

## HTML 链接

HTML 链接是通过标签 `<a>` 来定义的。

::: normal-demo HTML 链接

```html
<a href="https://mister-hope.com">这是一个链接</a>
```

:::

::: tip

href 属性指定链接的地址。

:::

## HTML 图像

HTML 图像是通过标签 `<img>` 来定义的。

::: normal-demo HTML 图像

```html
<img src="/logo.svg" width="60" height="60" />
```

:::

## HTML 水平线

`<hr>` 标签在 HTML 页面中创建水平线。

`hr` 元素可用于分隔内容。

::: normal-demo HTML 水平线

```html
<p>这是一个段落。</p>
<hr />
<p>这是一个段落。</p>
<hr />
<p>这是一个段落。</p>
```

:::

## HTML 注释

如同大部分的编程语言一样，在 HTML 中可以添加注释。

注释是被浏览器忽略的，而且是对用户不可见的，它们的目的是允许您描述您的代码是如何工作的和不同部分的代码做了什么等等。

注释写法如下:

```html
<!-- 这是一个注释 -->
```

::: tip

开始括号之后(左边的括号)需要紧跟一个叹号，结束括号之前(右边的括号)不需要，合理地使用注释可以对未来的代码编辑工作产生帮助。

:::

## HTML 折行

如果您希望在不产生一个新段落的情况下进行换行(新行)，请使用 `<br>` 标签:

::: normal-demo HTML 折行

```html
<p>这个<br />段落<br />演示了分行的效果</p>
```

:::

`<br />` 元素是一个空的 HTML 元素。所以推荐写成自闭合标签的形式。

## HTML 块

在开发中，最常用的就是块标签(`<div />`)。

::: normal-demo HTML 块

```html
<div>这是一个没有任何样式的块</div>
```

:::

## 其他标签

更多 HTML 标签如 `<form>` `<button>` 等，请见: [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)。

::: tip

请注意，不要使用弃用的元素，如 `<center>` `<font>` 等。

:::
