---
title: head 标签
icon: heading
date: 2019-09-02
category: HTML
order: 2
---

在页面加载完成的时候，标签 `<head>` 里的内容，是不会在页面中显示出来的。

`<head>` 包含了像页面的 `<title>`(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。

<!-- more -->

## HTML 头部

HTML 头部是包含在 `<head>` 元素里面的内容。不像 `<body>` 元素的内容会显示在浏览器中，head 里面的内容不会在浏览器中显示，它的作用是包含一些页面的元数据。在下面的例子中，head 的内容很少。

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

当然，在大型的页面中，head 会包含很多的元数据。您可以用 [开发者工具](../../../../software/chrome.md#开发者工具) 去查看您喜欢的网页的 head 的内容。这里只会列出要包含在 head 里的主要元素。

## `<title>` 元素

`<title>` 可以用来给 HTML 文档添加一个标题。您可能会将它和给 body 添加标题的 `<h1>` 元素混淆，有些时候 `<h1>` 也会被称作网页标题。但是它们是不同的。

- 当被加载到浏览器中的时候，元素 `<h1>` 会出现在页面中 —— 通常它应该在一个页面中只被使用一次，它被用来标记您的页面内容的标题(故事的标题，新闻标题或者任何适当的方式)。
- 元素 `<title>` 用来表示整个 HTML 文档标题的元数据(不是文档的内容)。

直白点说，`<h1>` 会出现在页面上，而 `<title>` 会出现在选项卡或书签中。

## `<meta>` 元素

元数据就是描述数据的数据，有很多不同种类的 `<meta>` 元素可以被包含进您的页面的 `<head>` 元素，下面仅为最常用的。

### 指定编码

```html
<meta charset="utf-8" />
```

这个元素简单的指定了文档的字符编码 —— 在这个文档中被允许使用的字符集。

::: info

字符集的详情，请见 [基础知识 → 字符集](../../../basic/encoding.md)

:::

::: warning

如果您指定了错误的编码，则整个网页都会乱码。

:::

### 添加作者和描述

许多 `<meta>` 元素包含了 `name` 和 `content` 特性:

- `name` 指定了 meta 元素的类型； 说明该元素包含了什么类型的信息。
- `content` 指定了实际的元数据内容。

这两个 meta 元素用于定义页面作者与提供页面简要描述。

::: tip 案例

```html
<meta name="author" content="Mr.Hope" />
<meta name="description" content="Introduction about <head> tags" />
```

:::

指定作者在某些情况下是很有用的: 如果您需要联系页面的作者，问一些关于页面内容的问题。一些内容管理系统能够自动获取页面作者的信息，然后用于某些用途。

指定包含关于页面内容的关键字的页面内容的描述是很有用的，因为它可能或让您的页面在搜索引擎的相关的搜索出现得更多 (这些行为术语上被称为 Search Engine Optimization，简称 SEO.)

::: info

关于 SEO 详情，请见 [定义 → SEO](../../definition/seo.md)。

:::

### 自定义图标

您可以在元数据中添加对自定义图标的引用。现代浏览器在各种场合使用 favicons，如打开的页面标签页和书签面板中的书签页面。

这个不起眼的图标已经存在很多很多年了，16 x 16 像素是这种图标的第一种类型。

页面添加图标的方式有:

1. 将其保存在与网站的索引页面相同的目录中，以 `.ico` 格式保存(大多数浏览器将支持更通用的格式，如 .gif 或.png，但使用 ICO 格式将确保它能在如 IE6 一样久远的浏览器显示)
1. 将以下行添加到 HTML `<head>` 中以引用它

   ```html
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
   ```

::: info

更多元数据详情，请见 [MDN Meta 标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta))

:::

## 为文档设定主语言

您应该添加 `lang` 属性到 HTML 开始标签中来为您的站点设定语言。

```html
<html lang="zh-CN"></html>

<!-- or -->

<html lang="en-US"></html>
```

如果您设置了 HTML 文档语言，那么该 HTML 文档就能被搜索引擎更有效地索引 (保证它在特定于语言的结果中正确显示)。同时，这对于那些使用屏幕阅读器的视障人士也很有用。(比如，法语和英语中都有 “six” 这个单词，但是发音却完全不同)

您还可以将文档的片段设置为不同的语言:

```html
<p>Chinese example: <span lang="zh-CN">春眠不觉晓</span>.</p>
```
