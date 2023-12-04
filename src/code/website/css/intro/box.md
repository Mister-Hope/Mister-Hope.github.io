---
title: 盒模型
icon: box
date: 2019-09-06
order: 2
category: CSS
---

在 CSS 中，所有的元素都被一个个的“盒子(box)”包围着。

<!-- more -->

## 块级与内联

在 CSS 中我们广泛地使用两种“盒子” —— 块级盒子 (block box) 和 内联盒子 (inline box)。这两种盒子会在页面流(page flow)和元素之间的关系方面表现出不同的行为:

一个被定义成块级的(block)盒子会表现出以下行为:

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- `width` 和 `height` 属性可以发挥作用
- 内边距 (padding), 外边距 (margin) 和边框 (border) 会将其他元素从当前盒子周围“推开”

除非特殊指定，诸如标题 (`<h1>` 等) 和段落 (`<p>`) 默认情况下都是块级的盒子。

如果一个盒子对外显示为 `inline`，那么他的行为如下:

- 盒子不会产生换行。
- `width` 和 `height` 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用而且也会把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。

我们通过对盒子 `display` 属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。

::: info

显示类型分为 **内部** 和 **外部** 显示类型。如上所述， CSS 的 box 模型有一个外部显示类型，来决定盒子是块级还是内联。

同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照正常文档流布局，也意味着它们和其他块元素以及内联元素一样(如上所述).

但是，我们可以通过使用类似 `flex` 的 `display` 属性值来更改内部显示类型。如果设置 `display: flex`，在一个元素上，外部显示类型是 `block`，但是内部显示类型修改为 `flex`。该盒子的所有直接子元素都会成为 `flex` 元素，会根据 弹性盒子(Flexbox )规则进行布局。同样，我们也可以设置诸如 `inline-block` `inline-flex` 这种混合显示类型。

块级和内联布局是 web 上默认的行为，它被称为正常文档流， 因为如果没有其他说明，我们的盒子布局默认是块级或者内联。

:::

## 盒模型介绍

所有 HTML 元素可以看作盒子，在 CSS 中，"**Box Model**" 这一术语是用来设计和布局时使用。

CSS 盒模型定义了封装 HTML 元素的方式，它包括: 外边距，边框，内边距，和实际内容。

完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。

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

::: tip

`padding` 和 `margin` 直译为 “填充” 和 “边距”，有些教程也会这么叫。

所以您需要清楚 “填充” 和 “内边距”、“边距” 和 “外边距” 说的是一回事。

:::

### 标准盒模型

当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。`padding` 和 `border` 再加上设置的宽高一起决定整个盒子的大小。

::: warning

margin 不计入实际大小，但它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到 margin。

:::

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

:::

元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px

元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px

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

### 替代(IE)盒模型

您可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且您的想法是对的! 因为这个原因，CSS 还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).

默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。这样就可以告诉浏览器使用 `border-box` 来定义区域，从而设定您想要的大小。

```css
.box {
  box-sizing: border-box;
}
```

如果您希望所有元素都使用替代模式，而且确实很常用，设置 `box-sizing` 在 `<html>` 元素上，然后设置所有元素继承该属性。这是一个很有用的小技巧:

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

### 使用调试工具来查看盒模型

浏览器开发者工具 可以使您更容易地理解 box 模型。您可以看到元素的大小以及它的外边距、内边距和边框。这是一个很好的检查元素大小的方式，可以便捷的判断您的盒子大小是否符合预期。

::: info

更多盒模型相关内容可见 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)

:::

## 控制盒模型

`margin`、`padding` 和 `border` 是属性的简写，允许我们一次设置盒子的四个边。这些简写等价于分别控制盒子的不同边的普通写法。

### 外边距

外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。

我们可以使用 `margin` 属性一次控制一个元素的所有边距，或者每边单独使用等价的普通属性控制:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

#### 外边距折叠

如果您有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

::: normal-demo 外边距折叠案例

我们有两个段落。顶部段落 `margin-bottom` 为 `50px`。第二段的 `margin-top` 为 `30px`。因为外边距折叠的概念，所以框之间的实际外边距是 `50px`，而不是两个外边距的总和。

```html
<div class="container">
  <p class="one">I am paragraph one.</p>
  <p class="two">I am paragraph two.</p>
</div>
```

```css
.one {
  margin-bottom: 50px;
}

.two {
  margin-top: 30px;
}
```

:::

::: info 外边距重叠

有许多规则规定了什么时候外边距会折叠，什么时候不会折叠。相关更多信息，请参阅 [外边距重叠](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)。初学时您需要首先记住外边距会折叠，如果您用外边距创建空间而没有得到您想要的效果，请参阅上方链接寻找原因。

:::

### 边框

边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。

为边框设置样式时，有大量的属性可以使用。由于有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。

可以使用 `border` 属性一次设置所有四个边框的宽度、颜色和样式。

分别设置每边的宽度、颜色和样式，可以使用:

- `border-top`
- `border-right`
- `border-bottom`
- `border-left`

设置所有边的颜色、样式或宽度，请使用以下属性:

- `border-width`
- `border-style`
- `border-color`

设置单边的颜色、样式或宽度，可以使用最细粒度的普通属性之一:

- `border-top-width`
- `border-top-style`
- `border-top-color`
- `border-right-width`
- `border-right-style`
- `border-right-color`
- `border-bottom-width`
- `border-bottom-style`
- `border-bottom-color`
- `border-left-width`
- `border-left-style`
- `border-left-color`

设置边框的颜色、样式或宽度，可以使用最细粒度的普通属性或者简写属性。

::: normal-demo 边框案例

```html
<div class="container">
  <div class="box">Change my borders.</div>
</div>
```

```css
.container {
  border-top: 5px dotted green;
  border-right: 1px solid black;
  border-bottom: 20px double rgb(23, 45, 145);
}

.box {
  border: 1px solid #333333;
  border-top-style: dotted;
  border-right-width: 20px;
  border-bottom-color: hotpink;
}
```

:::

### 内边距

内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是 0 或正的值。应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。

同 `margin`，我们可以使用 `padding` 简写属性控制元素所有边，或者每边单独使用等价的普通属性:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

## inline-block

`display` 有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用: 您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。

一个元素使用 `display: inline-block`，实现我们需要的块级的部分效果:

- 设置 `width` 和 `height` 属性会生效。
- `padding`, `margin`, 以及 `border` 会推开其他元素。

但是，它不会跳转到新行，如果显式添加 `width` 和 `height` 属性，它只会变得比其内容更大。

::: tip

当您想要通过添加内边距使链接具有更大的命中区域时，这是很有用的。

比如 `<a>` 是像 `<span>` 一样的内联元素；您可以使用 `display: inline-block` 来设置内边距，让用户更容易点击链接。

:::
