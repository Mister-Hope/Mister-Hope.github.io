---
title: 快速上手
icon: creative
date: 2019-09-05
dir:
  collapsible: false
  order: 1
category: CSS
tag:
  - 快速上手
prev: ../
---

CSS 指层叠样式表 (**C**ascading **S**tyle **S**heets)。

<!-- more -->

## 简介

和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。举例来说，要选择一个 HTML 页面里所有的段落元素，然后将其中的文本改成红色，可以这样写 CSS:

```css
p {
  color: red;
}
```

您可以很方便的创建一个 `<style>` 标签并将上述样式表作为该标签的内容，这样页面所有段落的文字就会变成红色。

## CSS 规则集

CSS 规则集由两个主要的部分构成: 选择器，以及一条或多条声明:

![CSS 规则图示](./assets/css-rule.jpg)

- **选择器** (Selector): 通常是您需要改变样式的 HTML 元素。

- **声明** (Declaration): 每条声明由一个属性和一个值组成。每个属性有一个值。

  - **属性** (Properties): 您希望设置的样式属性 (style attribute)，也是改变 HTML 元素样式的途径。(本例中 color 就是 `<h1>` 元素的属性) CSS 中，由编写人员决定修改哪个属性以改变规则。
  - **属性的值** (Property value): 在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值 (我们除了 blue 之外还有很多属性值可以用于 color )。

::: tip 语法

- 每个规则集声明都应该包含在成对的花括号 `{}` 里
- 在每个声明里要用冒号 `:` 将属性与属性值分隔开
- 每个声明总是以分号 `;` 结束，以分隔多个声明。

更多声明详情，请见 [CSS → 快速上手 → 声明](declaration.md)

:::

```css
p {
  color: red;
  text-align: center;
}
```

::: warning

CSS 块内的每一条声明都必须以分号结束，否则会报错(最后一条除外)，而每个 CSS 块不是以分号结束的!

:::

### CSS 注释

与 HTML 一样，CSS 也可以包含注释来解释您的代码，浏览器会忽略它。

CSS 注释以 `/*` 开始, 以 `*/` 结束。

**案例**:

```css
/* 这是个注释 */
p {
  text-align: center;
  /* 这是另一个注释 */
  color: black;
  font-family: arial;
}
```

::: tip 总结

- 样式定义如何显示 HTML 元素
- 样式通常存储在样式表中
- CSS 可以将多个样式层叠为一

:::

## CSS 选择器

CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。

选择器所选择的元素，叫做“选择器的对象”。

- [查看详情](selector.md)

## 引入 CSS

共有三种方式引入并应用 CSS。

- [查看详情](import.md)

## @ 规则

`@rules` 是一些特殊的规则，为 CSS 提供了一些关于如何表现的指导。有些 `@rules` 规则很简单，有规则名和值。

例如，要将额外的样式表导入主 CSS 样式表，可以使用 `@import`:

```css
@import "styles2.css";
```

最常见的 `@rules` 之一是 `@media`，它允许您使用 媒体查询 来应用 CSS，仅当某些条件成立 (例如，当屏幕分辨率高于某一数量，或屏幕宽度大于某一宽度时)。

```css
body {
  background-color: pink;
}

@media (min-width: 540px) {
  body {
    background-color: blue;
  }
}
```

::: info

更多详情，请见 [CSS → 媒体查询](../intro/media.md)
