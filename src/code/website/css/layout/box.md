---
title: 盒模型
icon: box
time: 2019-09-06
category: CSS
---

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。

<!-- more -->

## 盒模型介绍

所有 HTML 元素可以看作盒子，在 CSS 中，"**Box Model**" 这一术语是用来设计和布局时使用。

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

下面的图片说明了盒子模型 (Box Model):

![Box Model 示意图](./assets/box-model.gif)

不同部分的说明:

- Margin (边距) - 清除边框外的区域，边距是透明的。
- Border (边框) - 围绕在内边距和内容外的边框。
- Padding (填充) - 清除内容周围的区域，填充是透明的。
- Content (内容) - 盒子的内容，显示文本和图像。

```css
div {
  width: 300px;
  border: 25px solid green;
  padding: 25px;
  margin: 25px;
}
```

为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。

::: tip 元素的宽度和高度
当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域的宽度和高度。要知道，完全大小的元素，您还必须添加填充，边框和边距。
:::

下面的例子中的元素的总宽度为 300px:

```css
div {
  width: 300px;
  border: 25px solid green;
  padding: 25px;
  margin: 25px;
}
```

300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px

试想一下，您只有 250 像素的空间。让我们设置总宽度为 250 像素的元素:

```css
div {
  width: 220px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

最终元素的总宽度计算公式是这样的:

总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距

元素的总高度最终计算公式是这样的:

总元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距

::: tip
更多相关可见[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
:::
