---
title: 调整大小
icon: resize
date: 2019-09-06
order: 8
category: CSS
---

## 原始尺寸与固有尺寸

在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。

一个空的 `<div>` 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 `<div>` 并给予其边框，您会在页面上看到一条线。

::: normal-demo 案例

```html
<img src="/assets/img/star.png" alt="star" />
<div class="box" />
```

```css
img {
  border: 5px solid darkblue;
}

.box {
  border: 5px solid darkblue;
}
```

:::

## 设置具体的尺寸

当给元素指定尺寸时，我们将其称为**外部尺寸**。 我们可以给它一个具体的 `width` 和 `height` 值, 不论它的内容是什么，它将都是该尺寸。

::: normal-demo 设置尺寸

```html
<div class="wrapper">
  <div class="box" />
  <div class="box">
    这两个盒子都设置了高度，但是这个盒子因为内容很多，无法装下，所以最终产生了溢出。Mr.Hope
    很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
    Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
  </div>
</div>
```

```css
.wrapper {
  display: flex;
}

.box {
  border: 5px solid darkblue;
  height: 150px;
  width: 200px;
}
```

:::

### 使用百分数

当使用百分数时，您需要清楚，它是什么东西的百分数。对于一个处于另外一个容器当中的盒子，如果您给予了子盒子一个百分数作为宽度，那么它指的是父容器宽度的百分数。

::: normal-demo 使用百分数

```html
<div class="box">我是百分比长度</div>
```

```css
.box {
  border: 5px solid darkblue;
  width: 50%;
}
```

:::

百分数是以包含盒子的块为根据解析的。如果我们的 `<div>` 没有被指定百分数的值，那么它会占据 100%的可用空间，因为它是块级别的元素。如果我们给了它一个百分数作为宽度，那么这就是它原来情况下可以占据空间的百分数。

### 把百分数作为内外边距

如果您把 `margin` 和 `padding` 设置为百分数的话，您会注意到一些奇怪的表现。

您也许会希望上下的外边距是元素高的一个百分数，左右外边距是元素宽的百分数。但是，情况不是这样的!

当您用百分数设定内外边距的时候，值是以**内联尺寸**进行计算的，也即对于左右书写的语言来说的宽度。在我们的例子里面，所有的内外边距是这一宽度的 10%，也就是说，您可以让盒子周围的内外边距大小相同。在您以这种方式使用百分数的时候，这是一个需要记住的事实。

::: normal-demo 边距

```html
<div class="box">所有方向的 margin and padding 都是 10%</div>
```

```css
.box {
  border: 5px solid darkblue;
  width: 300px;
  margin: 10%;
  padding: 10%;
}
```

:::

## `min-` 和 `max-`

我们可以让 CSS 给定一个元素的最大或最小尺寸。

如果您有一个包含了变化容量的内容的盒子，而且您总是想让它至少有个确定的高度，您应该给它设置一个 `min-height` 属性。盒子就会一直保持大于这个最小高度，但是如果有比这个盒子在最小高度状态下所能容纳的更多内容，那么盒子就会变大。这在避免溢出的同时并处理变化容量的内容的时候是很有用的。

::: normal-demo 最大最小尺寸

```html
<div class="wrapper">
  <div class="box" />
  <div class="box">
    这两个盒子都设置了最小高度，但是这个盒子因为内容很多，无法装下，所以最终高度产生了扩大。Mr.Hope
    很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
    Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
  </div>
</div>
```

```css
.wrapper {
  display: flex;
}

.box {
  border: 5px solid darkblue;
  min-height: 150px;
  width: 200px;
}
```

:::

`max-width` 的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。这个技术是用来让图片可响应的，所以在更小的设备上浏览的时候，它们会合适地缩放。

::: normal-demo 最大宽度与图像

```html
<div class="wrapper">
  <div class="box">
    <img src="/assets/img/star.png" alt="star" class="width" />
  </div>
  <div class="box">
    <img src="/assets/img/star.png" alt="star" class="max" />
  </div>
  <div class="minibox">
    <img src="/assets/img/star.png" alt="star" class="max" />
  </div>
</div>
```

```css
.wrapper {
  display: flex;
}

.box {
  width: 200px;
}

.minibox {
  width: 50px;
}

.width {
  width: 100%;
}

.max {
  max-width: 100%;
}
```

:::

## viewpoint

viewpoint，即您在浏览器中看到的部分页面，也是有尺寸的。在 CSS 中，我们有 viewpoint 宽度相关的 vw 单位，以及 viewpoint 高度相关的 vh 单位。

1vh 等于 viewpoint 高度的 1%，1vw 则为 viewpoint 宽度的 1%.您可以用这些单位约束盒子的大小，还有文字的大小。

如果您改变了 vh 和 vw 的对应值，盒子和字体的大小也会改变； viewpoint 大小的变化也会让它们的大小变化，因为它们是依照 viewpoint 来定大小的。
