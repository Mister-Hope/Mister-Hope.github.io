---
title: 溢出
icon: overflow
date: 2019-09-06
order: 6
category: CSS
---

溢出是在盒子无法容纳下太多的内容的时候发生的。

## 概念

我们知道，CSS 中万物皆盒，因此我们可以通过给 `width` 和 `height`(或者 `inline-size` 和 `block-size`) 赋值的方式来约束盒子的尺寸。溢出是在您往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了您好几种工具来控制溢出。

## CSS 尽可能不丢弃内容

在默认情况下，CSS 会将元素溢出的部分显示在和盒子外。

::: normal-demo 例子

```html
<div class="word">Overflow</div>
<div class="box">
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden then any overflow will not be visible.
</div>

<p>This content is outside of the box.</p>
```

```css
.word {
  border: 1px solid #333333;
  width: 100px;
  font-size: 250%;
}

.box {
  border: 1px solid #333333;
  width: 200px;
  height: 100px;
}
```

:::

只要有可能，CSS 就不会隐藏您的内容，隐藏引起的数据损失通常会造成困扰。

如果您已经用 `width` 或者 `height` 限制住了一个盒子，CSS 假定，您知道您在做什么，而且您已经控制住了溢出的隐患。总之，在盒子里面需要放置文本的时候，限制住块方向的尺寸是会引起问题的，比如用户增加字体大小，或者填入了远超您设计时预计数量的文本。

## overflow 属性

`overflow` 属性是您控制一个元素溢出的方式，它告诉浏览器您想怎样处理溢出。`overflow` 的默认值为 `visible`，这就是我们的内容溢出的时候，我们在默认情况下看到它们的原因。

如果您想在内容溢出的时候把它裁剪掉，设置 `overflow: hidden`。这就会隐藏掉溢出。这可能会很自然地让东西消失掉，所以您只应该在判断隐藏内容不会引起问题的时候这样做。

如果您想在有内容溢出的时候加个滚动条，设置 `overflow: scroll`，那么即使没有足够多引起溢出的内容，您的浏览器也总会显示滚动条。您可能会需要这样的样式，它避免了滚动条在内容变化的时候出现和消失。

如果仅仅需要在 y 轴方向上滚动，可以使用 `overflow-y` 属性，设置 `overflow-y: scroll` 来仅在 y 轴方向滚动。您也可以用 `overflow-x`，以在 x 轴方向上滚动。

::: warning

请注意，`overflow-x` 不是处理长单词的好办法! 如果您真的需要在小盒子里面和长英文词打交道，使用 `word-break` 或者 `overflow-wrap` 属性。

:::

和 `scroll` 一样，在无论内容是否会溢出，页面上都会显示一个滚动条。

::: tip

您可以用 `overflow` 属性指定 x 轴和 y 轴方向的滚动，同时使用两个值进行传递。如果指定了两个关键字，第一个对 `overflow-x` 生效而第二个对 `overflow-y` 生效。否则，`overflow-x` 和 `overflow-y` 将会被设置成同样的值。例如，`overflow: scroll hidden` 会把 `overflow-x` 设置成 `scroll`，而 `overflow-y` 则为 `hidden`。

:::

如果您想让滚动条只在必要时才显示，那么使用 `overflow: auto`。此时由浏览器决定是否显示滚动条。浏览器一般仅仅会在有足以引起溢出的内容的时候这么做。

## 块级排版上下文

CSS 中有所谓块级排版上下文(Block Formatting Context，BFC)的概念。在您使用诸如 `scroll` 或者 `auto` 的时候，您就建立了一个块级排版上下文。结果就是，您改变了 `overflow` 的值的话，对应的盒子就变成了更加小巧的状态。在容器之外的东西没法混进容器内，也没有东西可以突出盒子，进入周围的版面。激活了滚动动作，您的盒子里面所有的内容会被收纳，而且不会遮到页面上其他的物件，于是就产生了一个协调的滚动体验。

## 网页设计时不需要的溢出

现代网页布局的方式 (正如 CSS layout 模块中所介绍的那些) 可以很好地处理溢出。我们不一定能预料到网页上会有多少内容，您很好地设计它们，使得它们能与这种现状协调。在开发网站的时候，您应该一直把溢出的问题挂在心头，您应该用或多或少的内容测试设计，增加文本的字号，确保您的 CSS 可以正常地协调。改变溢出属性的值，来隐藏内容或者增加滚动条，会是您仅仅在少数特别情况下需要的，例如在您确实需要一个可滚动盒子的时候。
