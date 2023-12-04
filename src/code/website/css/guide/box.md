---
title: 盒模型简介
icon: box
date: 2019-09-06
order: 5
category: CSS
tag:
  - 快速上手
---

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。

<!-- more -->

## 盒模型介绍

下面的图片说明了盒子模型 (Box Model):

![Box Model 示意图](./assets/box-model.gif)

不同部分的说明:

- Content box (内容) - 盒子的内容，显示文本和图像，可以通过 `width` 和 `height` 设置大小。
- Padding box (内边距) - 包围在内容区域外部的空白区域，通过 `padding` 属性设置。
- Border box (边框) - 围绕在填充和内容外的边框，通过 `border` 属性设置。
- Margin box (外边距) - 这是最外面的区域，是盒子和其他元素之间的空白区域，通过 `margin` 属性设置。

```css
div {
  width: 300px;
  border: 25px solid green;
  padding: 25px;
  margin: 25px;
}
```

为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。

## 元素的宽度和高度

当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。`padding` 和 `border` 再加上设置的宽高一起决定整个盒子的大小。

::: normal-demo 元素的宽度与高度

```html
<div class="box" />
```

```css
div.box {
  width: 300px;
  border: 25px solid green;
  padding: 25px;
  margin: 25px;
}
```

元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px

元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px

:::

试想一下，您只有 250px 的空间。让我们设置总宽度为 250px 的元素:

::: normal-demo 总宽度 250px 的元素

```html
<div class="box" />
```

```css
div.box {
  width: 220px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

:::

最终元素的总宽度计算公式是这样的:

元素的宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框
元素占据的水平空间 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距

元素的总高度最终计算公式是这样的:

元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框
元素占据的垂直空间 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距

::: tip

更多相关可见 [盒模型](../intro/box.md)

:::
