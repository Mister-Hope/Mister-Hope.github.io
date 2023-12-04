---
title: 引入 CSS
icon: link
date: 2019-09-05
order: 3
category: CSS
tag:
  - 快速上手
---

有三种方式引入并应用 CSS。

## 外部样式表

外部样式表将样式写入 CSS 文件中，在 HTML 中使用 `<link>` 引用，可以根据实际需要放在 `<head>` 标签里或 `<body>` 标签的末尾。比如:

```html
<head>
  <link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```

浏览器会从文件 `mystyle.css` 中读到样式声明，并根据它来格式文档。

外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 HTML 标签。样式表应该以 `.css` 扩展名进行保存。

## 内部样式表

当单个文档需要特殊的样式时，就应该使用内部样式表。您可以使用 `<style>` 标签定义内部样式表，就像这样:

```html
<head>
  <style>
    hr {
      color: sienna;
    }

    p {
      margin-left: 20px;
    }

    body {
      background-image: url("images/back40.gif");
    }
  </style>
</head>
```

## 内联样式

在 HTML 中使用 style 属性指定。

由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势，请慎用这种方法。

您可以在特定情况下使用它，例如当 1 -3 个样式仅需要在一个元素上应用一次时。

**案例**:

```html
<!-- 改变了这个段落的字体颜色和左外边距 -->
<p style="color: sienna; margin-left: 20px">这是一个段落。</p>
```
