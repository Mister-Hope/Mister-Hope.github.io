---
title: 排版介绍
icon: info
date: 2019-09-06
order: 1
category: CSS
prev: ../intro/media.html
---

## 正常布局流

正常布局流(normal flow)是指在不对页面进行任何布局控制时，浏览器默认的 HTML 布局方式。HTML 元素完全按照源码中出现的先后次序显示。

::: normal-demo 正常布局流

```html
<p>Mr.Hope 很帅</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
</ul>
```

:::

出现在另一个元素下面的元素被描述为块元素，与出现在另一个元素旁边的内联元素不同，内联元素就像段落中的单个单词一样。

::: info

关于内联元素和块元素，请见 [CSS 介绍 → 盒模型](../intro/box.md)

:::

::: warning

块元素内容的布局方向被描述为块方向。块方向在英语等具有水平书写模式(writing mode)的语言中垂直运行。它可以在任何垂直书写模式的语言中水平运行。对应的内联方向是内联内容(如句子)的运行方向。

关于文字方向请看 [CSS 介绍 → 文字方向](../intro/text-direction.md)

:::

当您使用 CSS 创建一个布局时，您正在离开**正常布局流**，但是对于页面上的多数元素，**正常布局流**将完全可以创建您所需要的布局。

下列布局技术会覆盖默认的布局行为:

- `display` 属性: 标准值为 `block`, `inline` 或者 `inline-block` ，这是素在正常布局流中的表现形式. 过设置 `display` 的值, 可以使元素使用 [弹性布局](flex.md) 或 [网格布局](grid.md)。
- `float` 属性: 诸如 `left` 能够让块级元素互相并排成一行，而不是一个堆叠在另一个上面。
- `position` 属性: 允许您精准设置盒子中的盒子的位置，正常布局流中，默认为 `static` ，使用其它值会引起元素不同的布局方式，例如将元素固定到浏览器视口的左上角。
- 表格布局: 表格的布局方式可以用在非表格内容上，可以使用 `display: table` 和相关属性在非表元素上使用。
- 多列布局: 可以让块按列布局，比如报纸的内容就是一列一列排布的。

## display 属性

在 CSS 中实现页面布局的主要方法是设定 `display` 属性的值。此属性允许我们更改默认的显示方式。正常流中的所有内容都有一个 `display` 的值，用作元素的默认行为方式。

::: tip 案例

段落显示在一个段落的下面，这是因为它们的样式是 `display:block`。

在段落中的某个文本周围创建链接，则该链接将与文本的其余部分保持内联，并且不会打断到新行。这是因为 `<a>` 元素默认为 `display:inline`。

:::

您可以更改此默认显示行为。

::: tip 案例

`<li>` 元素默认为 `display:block`，这意味着列表项显示为一个在另一个之下。将显示值更改为 `inline`，会令它们显示在彼此旁边，就像单词在句子中所做的那样。

:::

您可以更改任何元素的 `display` 值，这意味着您可以根据内容的语义选择合适的 HTML 元素，而不必关心它们的外观。它们的样子是您可以改变的。

## 弹性盒子(Flexbox)

Flexbox 是 CSS 弹性盒子布局模块(Flexible Box Layout Module)的缩写，它被专门设计出来用于创建横向或是纵向的一维页面布局。要使用 flexbox，您只需要在想要进行 flex 布局的父元素上应用 `display: flex` ，所有直接子元素都将会按照 flex 进行布局。

::: normal-demo Flexbox

当我们把 `display: flex` 添加到父元素时，三个元素就自动按列进行排列。这是由于它们变成了 flex 项(flex items)，按照 flex 容器(也就是它们的父元素)的一些 flex 相关的初值进行 flex 布局: 它们整整齐齐排成一行，是因为父元素上 flex-direction 的初值是 row。它们全都被拉伸至和最高的元素高度相同，是因为父元素上 `align-items` 属性的初值是 `stretch`。这就意味着所有的子元素都会被拉伸到它们的 flex 容器的高度，在这个案例里就是所有 flex 项中最高的一项。所有项目都从容器的开始位置进行排列，排列成一行后，在尾部留下一片空白。

```html
<div class="wrapper">
  <div class="box">一</div>
  <div class="box">二</div>
  <div class="box">三</div>
</div>
```

```css
.wrapper {
  display: flex;
}

.wrapper > div {
  margin: 4px;
  border: 2px solid rgb(79, 185, 227);
  background-color: rgb(207, 232, 220);
}
```

:::

很多属性可以被应用到 flex 项(flex items)上面。这些属性可以改变 flex 项在 flex 布局中占用宽/高的方式，允许它们通过伸缩来适应可用空间。

::: normal-demo flex 属性

作为一个简单的例子，我们可以在我们的所有子元素上添加 flex 属性，并赋值为 1，这会使得所有的子元素都伸展并填充容器，而不是在尾部留下空白，如果有更多空间，那么子元素们就会变得更宽，反之，他们就会变得更窄。除此之外，如果您在 HTML 标记中添加了一个新元素，那么它们也会变得更小，来为新元素创造空间——不管怎样，最终它们会调整自己直到占用相同宽度的空间。

```html
<div class="wrapper">
  <div class="box">一</div>
  <div class="box">二</div>
  <div class="box">三</div>
</div>
```

```css
.wrapper {
  display: flex;
}

.wrapper > div {
  flex: 1;
  margin: 4px;
  border: 2px solid rgb(79, 185, 227);
  background-color: rgb(207, 232, 220);
}
```

:::

::: info

更多详情请见 [CSS 布局 → 弹性模型](flex.md)

:::

## Grid 布局

Flexbox 用于设计横向或纵向的布局，而 Grid 布局则被设计用于同时在两个维度上把元素按行和列排列整齐。

指定 `display: grid` 会转为 Grid 布局。

使用 `grid-template-rows` 和 `grid-template-columns` 两个属性定义行和列的轨道。

::: normal-demo Grid 布局

```html
<div class="wrapper">
  <div class="box">一</div>
  <div class="box">二</div>
  <div class="box">三</div>
  <div class="box">四</div>
  <div class="box">五</div>
  <div class="box">六</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}

.wrapper > div {
  border: 2px solid rgb(79, 185, 227);
  background-color: rgb(207, 232, 220);
}
```

:::

一旦您拥有了一个 grid，您也可以显式地将元素摆放在里面，而不是依赖于浏览器进行自动排列。

利用 `grid-column` 和 `grid-row` 两个属性，您可以指定每一个子元素应该从哪一行/列开始，并在哪一行/列结束。这就能够让子元素在多个行/列上展开。

::: normal-demo 显示指定元素摆放

```html
<div class="wrapper">
  <div class="box1">一</div>
  <div class="box2">二</div>
  <div class="box3">三</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}

.wrapper > div {
  border: 2px solid rgb(79, 185, 227);
  background-color: rgb(207, 232, 220);
}

.box1 {
  grid-column: 2 / 4;
  grid-row: 1;
}

.box2 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.box3 {
  grid-row: 2;
  grid-column: 3;
}
```

:::

::: info

更多详情请见 [CSS 布局 → 网格布局](grid.md)

:::

## 定位

定位(positioning)能够让我们把一个元素从它原本在正常布局流(normal flow)中应该在的位置移动到另一个位置。定位(positioning)并不是一种用来给您做主要页面布局的方式，它更像是让您去管理和微调页面中的一个特殊项的位置。

有五种主要的定位类型:

- **静态定位**(Static positioning)是每个元素默认的属性——它表示“将元素放在文档布局流的默认位置——没有什么特殊的地方”。
- **相对定位**(Relative positioning)允许我们相对于元素在正常的文档流中的位置移动它——包括将两个元素叠放在页面上。这对于微调和精准设计(design pinpointing)非常有用。
- **绝对定位**(Absolute positioning)将元素完全从页面的正常布局流(normal layout flow)中移出，类似将它单独放在一个图层中。我们可以将元素相对于页面的 `<html>` 元素边缘固定，或者相对于该元素的最近被定位祖先元素(nearest positioned ancestor element)。绝对定位在创建复杂布局效果时非常有用，例如通过标签显示和隐藏的内容面板或者通过按钮控制滑动到屏幕中的信息面板。
- **固定定位**(Fixed positioning)与绝对定位非常类似，但是它是将一个元素相对浏览器视口固定，而不是相对另外一个元素。 这在创建类似在整个页面滚动过程中总是处于屏幕的某个位置的导航菜单时非常有用。
- **粘性定位**(Sticky positioning)是一种新的定位方式，它会让元素先保持和 `position: static` 一样的定位，当它的相对视口位置(offset from the viewport)达到某一个预设值时，他就会像 `position: fixed` 一样定位。

### 简单定位

::: normal-demo 默认定位方式

```html
<h1>定位</h1>

<p>这是一个普通的块级元素</p>
<p class="positioned">这是一个普通的块级元素</p>
<p>这是一个普通的块级元素</p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

:::

### 相对定位

相对定位(relative positioning)让您能够把一个正常布局流(normal flow)中的元素从它的默认位置按坐标进行相对移动。比如将一个图标往下调一点，以便放置文字。

**案例**:

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

请注意，`top` 和 `left` 不能被理解成向上或向左，而是顶部与左侧与初始距离的位置。

::: normal-demo 相对定位

```html
<h1>相对定位</h1>

<p>这是一个普通的块级元素</p>
<p class="positioned">这是一个相对定位块级元素</p>
<p>这是一个普通的块级元素</p>
```

```css
p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.positioned {
  position: relative;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

:::

### 绝对定位

绝对定位用于将元素移出正常布局流(normal flow)，以坐标的形式相对于它的容器定位到 web 页面的任何位置，以创建复杂的布局。有趣的是，它经常被用于与相对定位和浮动的协同工作。

**案例**:

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

::: normal-demo 绝对定位

```html
<h1>绝对定位</h1>

<p>这是一个普通的块级元素</p>
<p class="positioned">这是一个绝对定位元素</p>
<p>这是一个普通的块级元素</p>
```

```css
p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.positioned {
  position: absolute;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

:::

定位元素现在已经与页面布局的其余部分完全分离，并位于页面的顶部。其他两段现在靠在一起，好像之前那个中间段落不存在一样。`top` 和 `left` 属性对绝对位置元素的影响不同于相对位置元素。在这一案例当中，他们没有指定元素相对于原始位置的移动程度。相反，在这一案例当中，它们指定元素应该从父元素的顶部和左边的距离(确切地说，是演示窗口元素的距离)。

### 固定定位

固定定位(fixed positioning)同绝对定位(absolute positioning)一样，将元素从文档流(document flow)当中移出了。但是，定位的坐标不会应用于"容器"边框来计算元素的位置，而是会应用于视口(viewport)边框。利用这一特性，我们可以轻松搞出一个固定位置的菜单，而不受底下的页面滚动的影响。

::: normal-demo 固定定位

```html
<h1>固定定位</h1>

<!-- 您会在本页顶部找到它 -->
<div class="positioned">固定定位</div>

<p>段落 1</p>
<p>段落 2</p>
<p>段落 3</p>
```

```css
.positioned {
  position: fixed;
  top: 30px;
  left: 30px;
}
```

:::

### 粘性定位

粘性定位(sticky positioning)是最后一种我们能够使用的定位方式。它将默认的静态定位(static positioning)和固定定位(fixed positioning)相混合。当一个元素被指定了 `position: sticky` 时，它会在正常布局流中滚动，直到它出现在了我们给它设定的相对于容器的位置，这时候它就会停止随滚动移动，就像它被应用了 `position: fixed` 一样。

::: normal-demo 粘性定位

```html
<h1>Sticky positioning</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula.
</p>

<div class="positioned">粘性定位</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

:::

## 浮动

把一个元素“浮动”(float)起来，会改变该元素本身和在正常布局流(normal flow)中跟随它的其他元素的行为。这一元素会浮动到左侧或右侧，并且从正常布局流(normal flow)中移除，这时候其他的周围内容就会在这个被设置浮动(float)的元素周围环绕。

`float` 属性有四个可能的值:

- `left`: 将元素浮动到左侧。
- `right`: 将元素浮动到右侧。
- `none`: 默认值, 不浮动。
- `inherit`: 继承父元素的浮动属性。

::: normal-demo float 案例

```html
<h1>简单的 float 案例</h1>

<div class="box">浮动块</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat.
</p>
```

```css
.box {
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}
```

:::

## 多列布局

多列布局模组给了我们 一种把内容按列排序的方式，就像文本在报纸上排列那样。由于在 web 内容里让您的用户在一个列上通过上下滚动来阅读两篇相关的文本是一种非常低效的方式，那么把内容排列成多列可能是一种有用的技术。

要把一个块转变成多列容器(multicol container)，我们可以使用 `column-count` 属性来告诉浏览器我们需要多少列，也可以使用 `column-width` 来告诉浏览器以至少某个宽度的尽可能多的列来填充容器。

::: normal-demo 多列布局

```html
<h1>Multi-column layout</h1>
<div class="container">
  <p>Paragraph 1.</p>
  <p>Paragraph 2.</p>
</div>
```

```css
.container {
  column-width: 200px;
}
```

:::
