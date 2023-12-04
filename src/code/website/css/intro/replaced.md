---
title: 可替换元素
icon: change
date: 2019-09-06
order: 9
category: CSS
---

## 替换元素

图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。

::: info 可替换元素

在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。

简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 `<iframe>` 元素，可能具有自己的样式表，但它们不会继承父文档的样式。

CSS 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。

:::

某些替换元素(例如图像和视频)也被描述为具有宽高比。这意味着它在水平(x)和垂直(y)尺寸上均具有大小，并且默认情况下将使用文件的固有尺寸进行显示。

## 调整图像大小

一个常用的技术是将一张图片的 `max-width` 设为 100%。这将会允许图片尺寸上小于但不大于盒子。这个技术也会对其他替换元素(例如 `<video>`，或者 `<iframe>`)起作用。

为了把一张图像调整到能够完全盖住一个盒子的大小，您可以使用 `object-fit` 属性。使用 `object-fit` 时，替换元素可以以多种方式被调整到合乎盒子的大小。

- `cover` 会缩小图像，维持图像的比例。图像可以整齐地充满盒子，同时由于比例保持不变，图像的一部分将会被盒子裁切掉。
- `contain` 会缩放图片到足以放到盒子里面的大小。如果它和盒子的比例不同，会在某侧留白。
- `fill` 可以让图像充满盒子，但是不会维持比例。

::: normal-demo 调整图像大小

```html
<div class="wrapper">
  <div class="box">
    <img src="/assets/img/balloons.jpg" alt="balloons" class="cover" />
  </div>
  <div class="box">
    <img src="/assets/img/balloons.jpg" alt="balloons" class="contain" />
  </div>
</div>
```

```css
.box {
  width: 200px;
  height: 200px;
}

img {
  height: 100%;
  width: 100%;
}

.cover {
  object-fit: cover;
}

.contain {
  object-fit: contain;
}
```

:::

## 布局中的替换元素

替换元素使用各式 CSS 布局技巧时，他们的展现略微与其他元素不同。

::: normal-demo 布局中的替换元素

在一个 flex 或者 grid 布局中，元素默认会把拉伸到充满整块区域。图像不会拉伸，而是会被对齐到网格区域或者弹性容器的起始处。

```html
<div class="wrapper">
  <img src="/assets/img/star.png" alt="star" />
  <div />
  <div />
  <div />
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 20px;
}

.wrapper > div {
  background-color: rebeccapurple;
  border-radius: 0.5em;
}
```

:::

## form 元素

### 表单元素的继承

在一些浏览器中，表单元素默认不会继承字体样式，因此如果您想要确保您的表单填入区域使用 body 中或者一个父元素中定义的字体，您需要向您的 CSS 中加入这条规则。

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### form 的 box-sizing

form 元素可能会针对不同元素使用不同的盒子约束规则。

为了保证统一，将所有元素的内外边距均设为 0 是个好主意，然后在单独进行样式化控制的时候将这些加回来。

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### 其他有用的设置

除了上面提到的规则以外，您也应该在 `<textarea>` 上设置 `overflow: auto` 以避免 IE 在不需要滚动条的时候显示滚动条:

```css
textarea {
  overflow: auto;
}
```
