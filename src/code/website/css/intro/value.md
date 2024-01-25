---
title: 值与单位
icon: number
date: 2019-09-06
order: 7
category: CSS
---

## CSS 的值

在 CSS 规范上，您将能够发现值的存在，CSS 有多种值类型，它们被尖括号包围，如 `<color>` 或 `<length>`。

当您看到值 `<color>` 对特定属性有效时，这意味着您可以使用任何有效的颜色作为该属性的值。

### 数字，长度和百分比

| 数值类型       | 描述                                                                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<integer>`    | 整数。如 `1024` 或 `-55`。                                                                                                                          |
| `<number>`     | 小数 (也可以为整数)。如: `0.255`、`128` 或 `-1.2`。                                                                                                 |
| `<dimension>`  | `<number>` + 附加单位。如: `45deg`、`5s` 或 `10px`。<br />`<dimension>` 是一个大类别，包括 `<length>`、`<angle>`、`<time>` 和 `<resolution>` 类型。 |
| `<percentage>` | 一些其他值的一部分，例如 `50%`。<br />百分比值总是相对于另一个量，例如，一个元素的长度相对于其父元素的长度。                                        |

### 长度

最常见的数字类型是 `<length>`，例如 10px(像素)或 30em。CSS 中有两种类型的长度: 相对长度和绝对长度。

#### 绝对长度单位

以下都是绝对长度单位。它们总是相同的大小。

| 单位 | 名称         | 等价换算            |
| ---- | ------------ | ------------------- |
| cm   | 厘米         | 1cm = 96px/2.54     |
| mm   | 毫米         | 1mm = 1/10th of 1cm |
| Q    | 四分之一毫米 | 1Q = 1/40th of 1cm  |
| in   | 英寸         | 1in = 2.54cm = 96px |
| pc   | 十二点活字   | 1pc = 1/16th of 1in |
| pt   | 点           | 1pt = 1/72th of 1in |
| px   | 像素         | 1px = 1/96th of 1in |

#### 相对长度单位

相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小。利用它们，您可以使文本或其他元素的大小与页面上的其他内容相对应。

| 单位 | 相对于                                                                                        |
| ---- | --------------------------------------------------------------------------------------------- |
| em   | 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width |
| ex   | 字符“x”的高度                                                                                 |
| ch   | 数字“0”的宽度                                                                                 |
| rem  | 根元素的字体大小                                                                              |
| lh   | 元素的 line-height                                                                            |
| vw   | 视窗宽度的 1%                                                                                 |
| vh   | 视窗高度的 1%                                                                                 |
| vmin | 视窗较小尺寸的 1%                                                                             |
| vmax | 视图大尺寸的 1%                                                                               |

::: normal-demo 长度单位

```html
<div class="wrapper">
  <div class="box px">宽度为 200px</div>
  <div class="box vw">宽度为 10vw</div>
  <div class="box em">宽度为 10em</div>
</div>
```

```css
.wrapper {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  width: 10vw;
}

.em {
  width: 10em;
}
```

:::

#### em 和 rem

em 和 rem 是您在从框到文本调整大小时最常遇到的两个相对长度。

- `em` 单位的意思是“父元素的字体大小”。
- `rem` 单位的意思是“根元素的字体大小”。

也就是一个是相对于父元素，一个是相对于整个文档的默认字号。

::: normal-demo em 与 rem 演示

```html
<ul class="em">
  <li>一</li>
  <li>二</li>
  <li>
    三
    <ul>
      <li>三-1</li>
      <li>
        三-2
        <ul>
          <li>三-2-1</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css
html {
  font-size: 16px;
}

.em li {
  font-size: 1.3em;
}

.rem li {
  font-size: 1.3rem;
}
```

:::

### 百分比

在许多情况下，百分比与长度的处理方法是一样的。百分比的问题在于，它们总是相对于其他值设置的。例如，如果将元素的字体大小设置为百分比，那么它将是元素父元素字体大小的百分比。如果使用百分比作为宽度值，那么它将是父值宽度的百分比。

::: normal-demo 百分比与绝对长度

```html
<div class="box px">200px 宽</div>
<div class="box percent">40% 宽</div>
<div class="wrapper">
  <div class="box px">200px 宽</div>
  <div class="box percent">40% 宽</div>
</div>
<ul>
  <li>一</li>
  <li>二</li>
  <li>
    三
    <ul>
      <li>三-1</li>
      <li>
        三-2
        <ul>
          <li>三-2-1</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css
.wrapper {
  width: 400px;
  border: 5px solid rebeccapurple;
}

.px {
  width: 200px;
}

.percent {
  width: 40%;
}

li {
  font-size: 80%;
}
```

:::

::: warning

虽然许多值接受长度或百分比，但也有一些值只接受长度。您可以在 MDN 属性 引用页面上看到它能接受哪些值。如果允许的值包括 `<length-percent>`，则可以使用长度或百分比。如果允许的值只包含 `<length>`，则不可能使用百分比。

:::

### 数字

有些值接受数字，不添加任何单位。

::: normal-demo 数字值

```html
<div class="wrapper">
  <div class="box">设置透明度</div>
</div>
```

```css
.box {
  backgroud-color: red;
  opacity: 0.6;
}
```

:::

## 颜色

### 颜色关键词

CSS 预设了一些关键词，比如 `black` `white` `red` 等。

::: info

颜色词的完整列表，请看 [MDN → color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

:::

### 十六进制 RGB 值

这种颜色值类型是十六进制代码。每个十六进制值由一个 `#` 和六个十六进制数字组成，每个十六进制数字都可以取 0 到 f(代表 15)之间的 16 个值中的一个。每对值表示一个通道。通道依次为: 红色、绿色和蓝色。每个通道可以指定 256 个可用值中的任意一个。

::: normal-demo 十六进制颜色

```html
<div class="wrapper">
  <div class="box one">#02798b</div>
  <div class="box two">#c55da1</div>
  <div class="box three">128a7d</div>
</div>
```

```css
.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

:::

### RGB 和 RGBA

RGB 值是一个函数 `RGB()`。它有三个参数，表示颜色的红色、绿色和蓝色通道值，与十六进制值的方法非常相似。RGB 的不同之处在于，每个通道不是由两个十六进制数字表示的，而是由一个介于 0 到 255 之间的十进制数字表示的。

::: normal-demo RGB 颜色

```html
<div class="wrapper">
  <div class="box one">rgb(2, 121, 139)</div>
  <div class="box two">rgb(197, 93, 161)</div>
  <div class="box three">rgb(18, 138, 125)</div>
</div>
```

```css
.one {
  background-color: rgb(2, 121, 139);
}

.two {
  background-color: rgb(197, 93, 161);
}

.three {
  background-color: rgb(18, 138, 125);
}
```

:::

RGBA 的工作方式与 RGB 完全相同，但有第四个值表示颜色的 alpha 通道，它控制不透明度。如果将这个值设置为 0，它将使颜色完全透明，而设置为 1 将使颜色完全不透明。介于两者之间的值提供了不同级别的透明度。

::: normal-demo RGBA 颜色

```html
<div class="wrapper">
  <div class="box one">rgba(2, 121, 139, .3)</div>
  <div class="box two">rgba(197, 93, 161, .7)</div>
  <div class="box three">rgba(18, 138, 125, .9)</div>
</div>
```

```css
.one {
  background-color: rgba(2, 121, 139, 0.3);
}

.two {
  background-color: rgba(197, 93, 161, 0.7);
}

.three {
  background-color: rgba(18, 138, 125, 0.9);
}
```

:::

::: warning

在颜色上设置 alpha 通道与使用我们前面看到的 opacity 属性有一个关键区别。当您使用不透明度时，您让元素和它里面的所有东西都不透明，而使用 RGBA 颜色只让您指定的颜色不透明。

:::

### HSL 和 HSLA

`hsl()` 函数接受色调、饱和度和亮度值作为参数，而不是红色、绿色和蓝色值，这些值的不同方式组合，可以区分 1670 万种颜色:

- 色调: 值在 0 和 360 之间，表示色轮周围的角度。
- 饱和度: 值为 0 - 100%，其中 0 为无颜色(它将显示为灰色阴影)，100%为全色饱和度
- 亮度: 从 0 - 100%中获取一个值，其中 0 表示没有光(它将完全显示为黑色)，100%表示完全亮(它将完全显示为白色)

::: normal-demo HSL 颜色

```html
<div class="wrapper">
  <div class="box one">hsl(188, 97%, 28%)</div>
  <div class="box two">hsl(321, 47%, 57%)</div>
  <div class="box three">hsl(174, 77%, 31%)</div>
</div>
```

```css
.one {
  background-color: hsl(188, 97%, 28%);
}

.two {
  background-color: hsl(321, 47%, 57%);
}

.three {
  background-color: hsl(174, 77%, 31%);
}
```

:::

就像 RGB 和 RGBA，HSL 有 HSLA，它使您能够指定 alpha 通道值。

::: normal-demo HSLA 颜色

```html
<div class="wrapper">
  <div class="box one">hsla(188, 97%, 28%, .3)</div>
  <div class="box two">hsla(321, 47%, 57%, .7)</div>
  <div class="box three">hsla(174, 77%, 31%, .9)</div>
</div>
```

```css
.one {
  background-color: hsla(188, 97%, 28%, 0.3);
}

.two {
  background-color: hsla(321, 47%, 57%, 0.7);
}

.three {
  background-color: hsla(174, 77%, 31%, 0.9);
}
```

:::

## 图片

`<image>` 数据类型用于图像为有效值的任何地方。它可以是一个通过 `url()` 函数指向的实际图像文件，也可以是一个渐变。

::: normal-demo 背景图片

```html
<div class="box image" />
<div class="box gradient" />
```

```css
.box {
  width: 400px;
  height: 300px;
}

.image {
  background-image: url(/assets/img/star.png);
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgba(119, 0, 255, 1) 39%,
    rgba(0, 212, 255, 1) 100%
  );
}
```

:::

## 位置

`<position>` 数据类型表示一组 2D 坐标，用于定位一个元素，如背景图像(通过 background-position)。它可以使用关键字(如 `top`, `left`, `bottom`, `right` 以及 `center` )将元素与 2D 框的特定边界对齐，以及表示框的顶部和左侧边缘偏移量的长度。

一个典型的位置值由两个值组成——第一个值水平地设置位置，第二个值垂直地设置位置。如果只指定一个轴的值，另一个轴将默认为 center。

::: normal-demo 位置

```html
<div class="box" />
```

```css
.box {
  width: 400px;
  height: 300px;
  background-image: url(/assets/img/star.png);
  background-repeat: no-repeat;
  background-position: right 40px;
}
```

:::

## 字符串和标识符

CSS 中的某些值接受字符串，字符串必须用引号包裹起来。

::: tip 标识符

某些关键词是合法的值(例如 `<color>` 关键字，如 `red`, `black`, `rebeccapurple`, `goldenrod`)。这些关键字被更准确地描述为标识符，一个 CSS 可以理解的特殊值。它们并不是字符串，因此它们不能使用引号括起来。

:::

## 函数

在编程中，函数是一段可重用的代码，可以多次运行，以完成重复的任务，对开发人员和计算机都是如此。函数通常与 JavaScript、Python 或 c++等语言相关联，但它们也以属性值的形式存在于 CSS 中。我们已经在颜色部分看到了函数: `rgb()`、`hsl()` 等。用于从文件返回图像的值 `url()` 也是一个函数。

行为更类似于传统编程语言的值是 `calc()` 函数。这个函数使您能够在 CSS 中进行简单的计算。如果您希望计算出在为项目编写 CSS 时无法定义的值，并且需要浏览器在运行时为您计算出这些值，那么它特别有用。

::: normal-demo calc() 计算

```html
<div class="wrapper">
  <div class="box">我的宽度是被计算出来的</div>
</div>
```

```css
.wrapper {
  width: 400px;
}

.box {
  width: calc(20% + 100px);
}
```

:::
