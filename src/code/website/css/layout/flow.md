---
title: 正常布局流
icon: flow
date: 2019-09-06
order: 2
category: CSS
---

### 元素特性

- 一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。

- 内联元素的 `width` `height` 与内容一致。您无法设置内联元素的 `width` `height`。

- 如果您想控制内联元素的尺寸，您需要为元素设置 `display: block;` 或 `display: inline-block`。`inline-block` 混合了 `inline` 和 `block` 的特性。

### 摆放特性

正常布局流(在布局介绍里提到过)是一套在浏览器视口内放置、组织元素的系统。默认的，块级元素按照基于其父元素的书写顺序(默认值: `horizontal-tb`)的块流动方向(block flow direction)放置。

每个块级元素会在上一个元素下面另起一行，它们会被设置好的 `margin` 分隔。在英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的。

内联元素的表现有所不同: 它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻的文本内容(或者被包裹的)被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。

如果两个相邻的元素都设置了 `margin` 并且两个 `margin` 有重叠，那么更大的设置会被保留，小的则会消失。这被称为外边距叠加。

::: normal-demo 一个简单例子

```html
<h1>Basic document flow</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p>
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements will
  <span>wrap onto a new line if possible (like this one containing text)</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="https://mdn.mozillademos.org/files/13360/long.jpg" />
</p>
```

```css
p {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}
```

:::
