---
title: 浮动
icon: float
date: 2019-09-06
order: 3
category: CSS
---

在网站布局中，应当以 normal flow, flex 和 grid 布局为主。只有在需要特殊样式无法满足时，再考虑 float 布局。

## 简介

把一个元素“浮动”(float)起来，会改变该元素本身和在正常布局流(normal flow)中跟随它的其他元素的行为。这一元素会浮动到左侧或右侧，并且从正常布局流(normal flow)中移除，这时候其他的周围内容就会在这个被设置浮动(float)的元素周围环绕。

`float` 属性有四个可能的值:

- `inherit`: 继承父元素的浮动属性。
- `left`: 将元素浮动到左侧。
- `right`: 将元素浮动到右侧。
- `none`: 默认值, 不浮动。

::: normal-demo float 案例

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

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
.box {
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}
```

:::

注意浮动内容仍然遵循盒子模型诸如外边距和边界。

## 首字下沉

::: normal-demo 首字下沉

```html
<p>
  This is my very important paragraph. I am a distinguished gentleman of such
  renown that my paragraph needs to be styled in a manner befitting my majesty.
  Bow before my splendour, dear students, and go forth and learn CSS!
</p>
```

```css
p {
  width: 400px;
  margin: 0 auto;
}

p::first-line {
  text-transform: uppercase;
}

p::first-letter {
  font-size: 3em;
  border: 1px solid black;
  background: red;
  float: left;
  padding: 2px;
  margin-right: 4px;
}
```

:::

## 多列浮动布局

::: normal-demo 多列浮动布局

```html
<div class="container">
  <h1>2 column layout example</h1>
  <div>
    <h2>First column</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
      Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
      convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
      Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas
      augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut
      id ornare felis, eget fermentum sapien.
    </p>
  </div>

  <div>
    <h2>Second column</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </div>
</div>
```

```css
.container > div:nth-of-type(1) {
  width: 48%;
  float: left;
}

.container > div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

:::

所有列使用宽度百分比会创建一个流式布局(liquid layout)。请尝试调整浏览器窗口的宽度，以便自己查看。需要注意的一件事是，当它们变得非常窄时，列就会变得很糟糕。切换回窄屏幕的单列布局通常是有意义的 (如手机)，使用媒体查询可以实现这一功能。

另一种选择是将宽度设置为一个固定的单位如 rem 或像素，这就是固定宽度布局(fixed-width layout)

## 清除浮动

有些情况下，浮动元素内容过多会错乱排版。

::: normal-demo 一个糟糕的浮动布局

```html
<div class="container">
  <h1>Float disaster</h1>

  <div>
    <h2>First column</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
    </p>
  </div>

  <div>
    <h2>Second column</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus.
    </p>
  </div>

  <div>
    <h2>Third column</h2>

    <p>
      Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue
      purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper
      felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra
      pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia
      sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec
      convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In
      mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet
      imperdiet risus neque vitae lectus.
    </p>
  </div>

  <footer>
    <p>©2020 Mr.Hope A very handsooooooooooooooooome man.</p>
  </footer>
</div>
```

```css
.container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

.container > div:nth-of-type(1) {
  width: 36%;
  float: left;
}

.container > div:nth-of-type(2) {
  width: 30%;
  float: left;
  margin-left: 4%;
}

.container > div:nth-of-type(3) {
  width: 26%;
  float: right;
}
```

:::

为了解决这个问题，您需要在页脚清除浮动。

```css
footer {
  clear: both;
}
```

clear 可以取三个值:

- `left`: 停止任何活动的左浮动
- `right`: 停止任何活动的右浮动
- `both`: 停止任何活动的左右浮动

::: normal-demo 改进后的浮动布局

```html
<div class="container">
  <h1>Float disaster</h1>

  <div>
    <h2>First column</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
    </p>
  </div>

  <div>
    <h2>Second column</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus.
    </p>
  </div>

  <div>
    <h2>Third column</h2>

    <p>
      Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue
      purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper
      felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra
      pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia
      sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec
      convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In
      mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet
      imperdiet risus neque vitae lectus.
    </p>
  </div>

  <footer>
    <p>©2020 Mr.Hope A very handsooooooooooooooooome man.</p>
  </footer>
</div>
```

```css
.container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

.container > div:nth-of-type(1) {
  width: 36%;
  float: left;
}

.container > div:nth-of-type(2) {
  width: 30%;
  float: left;
  margin-left: 4%;
}

.container > div:nth-of-type(3) {
  width: 26%;
  float: right;
}

footer {
  clear: both;
}
```

:::
您通常只想设定一个 `clear: both` 在您想让浮动停止的元素上。在某些情况下，您会想要只取消 left 或 right 引用。

## 其他浮动问题

### 宽度计算

到目前为止，我们的例子是没有应用样式的浮动框——这很容易。当您开始给这些框加上样式时，比如添加背景、外边距、内边距等等，问题就来了。

```css
div,
footer {
  padding: 1%;
  border: 2px solid black;
  background-color: red;
}
```

有两个方法可以解决问题，最好的方法是给您的 HTML 加上下面的 CSS。

```css
* {
  box-sizing: border-box;
}
```

`box-sizing` 通过更改盒模型将宽度取值为 `content + padding + border`，而不仅是之前的 `content`。所以当增加内边距或边界的宽度时，不会使盒子更宽——而是会使内容调整得更窄。

我们有另一个问题: 页脚正压在最长列上。但是如果试着清除页脚浮动的同时给出一些顶部外边距 `margin-top`

```css
footer {
  clear: both;
  margin-top: 4%;
}
```

您会发现它们不起作用。

浮动元素有以下性质:

- 他们在父元素中所占的面积的有效高度为 0
- 非浮动元素的外边距不能用于它们和浮动元素之间来创建空间

为了解决这个问题，我们需要添加新的 `<div>` 元素，位于在 `<footer>` 标签的上方:

```html
<div class="clearfix"></div>
```

如果您没有一个可用的元素来清除您的浮动(比如我们的页脚)，在您想要清除的浮动之后添加一个看不见的“clearfix div”是非常有用的，但是在这里页脚也要用到。接下来我们要做的是，移除页脚样式规则中的 `clear: both;` 声明，取而代之将其放在 clearfix div 中:

```css
.clearfix {
  clear: both;
}
```

这个时候页脚现顶部外边距就会生效。

但是这会造成另一个问题: clearfix div 背景、内边距和边界与我们的列和页脚相同

为了解决这个问题，让我们先给每个列块一个类( class )column:

```html
<div class="column">...</div>
```

之后改变应用盒子样式的规则到这些块和页脚，这样只有列块被样式化:

```css
.column,
footer {
  padding: 1%;
  border: 2px solid black;
  background-color: red;
}
```

::: normal-demo 最终结果

```html
<div class="container">
  <h1>Fixed layout border-box</h1>

  <div class="column">
    <h2>First column</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet.
    </p>
  </div>

  <div class="column">
    <h2>Second column</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel.
    </p>
  </div>

  <div class="column">
    <h2>Third column</h2>

    <p>
      Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue
      purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper
      felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra
      pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia
      sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec
      convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet.
    </p>
  </div>

  <div class="clearfix"></div>

  <footer>
    <p>©2020 Mr.Hope A very handsooooooooooooooooome man.</p>
  </footer>
</div>
```

```css
.container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

.container > div:nth-of-type(1) {
  width: 36%;
  float: left;
}

.container > div:nth-of-type(2) {
  width: 30%;
  float: left;
  margin-left: 4%;
}

.container > div:nth-of-type(3) {
  width: 26%;
  float: right;
}

footer {
  margin-top: 4%;
}

.clearfix {
  clear: both;
}

.column,
footer {
  padding: 1%;
  border: 2px solid rgb(255, 84, 104);
  background: rgba(255, 84, 104, 0.3);
}

* {
  box-sizing: border-box;
}
```

:::
