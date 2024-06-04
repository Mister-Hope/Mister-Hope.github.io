---
title: 背景与边框
icon: frame
date: 2019-09-06
order: 3
category: CSS
---

## 背景样式

### 背景颜色

`background-color` 属性定义了 CSS 中任何元素的背景颜色。属性接受任何有效的颜色值。背景色扩展到元素的内容和内边距的下面。

::: normal-demo 为元素盒子添加背景颜色

```html
<div class="box">
  <h2>Background Colors</h2>
  <p>Try changing the background <span>colors</span>.</p>
</div>
```

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
span {
  background-color: rgba(255, 255, 255, 0.5);
}
```

:::

### 背景图片

`background-image` 属性允许在元素的背景中显示图像。

默认情况下，大图不会缩小以适应方框，因此我们只能看到它的一个小角，而小图则是平铺以填充方框。

::: normal-demo 两个方框一个有方框大的背景图像、另一个有星星的小图像。

```html
<div class="wrapper">
  <div class="box a" />
  <div class="box b" />
</div>
```

```css
.box {
  width: 400px;
  height: 200px;
}

.a {
  background-image: url(/assets/img/balloons.jpg);
}

.b {
  background-image: url(/assets/img/star.png);
}
```

:::

如果除了背景图像外，还指定了背景颜色，则图像将显示在颜色的顶部。尝试向上面的示例添加一个 `background-color` 属性，看看效果如何。

#### 控制背景平铺

`background-repeat` 属性用于控制图像的平铺行为。可用的值是:

- `no-repeat` — 不重复。
- `repeat-x` —水平重复。
- `repeat-y` —垂直重复。
- `repeat` — 在两个方向重复。

::: normal-demo 请自行更改并尝试

```html
<div class="box" />
```

```css
.box {
  width: 400px;
  height: 200px;
  background-image: url(/assets/img/star.png);
  background-repeat: no-repeat;
}
```

:::

#### 调整背景图像的大小

如果我们有一个很大的图像，但是不想它被裁剪掉，我们可以使用 `background-size` 属性。

它可以设置长度或百分比值，来调整图像的大小以适应背景。

您也可以使用关键字:

- `cover`: 浏览器将使图像足够大，使它完全覆盖了盒子区，同时仍然保持其高宽比。在这种情况下，有些图像可能会跳出盒子外
- `contain`: 浏览器将使图像的大小适合盒子内。在这种情况下，如果图像的长宽比与盒子的长宽比不同，则可能在图像的任何一边或顶部和底部出现间隙。

::: normal-demo 案例

请自行更改并尝试:

- 改变用于修改背景大小的长度单位。
- 去掉长度单位，看看使用 `background-size: cover` or `background-size: contain` 的状态。

```html
<div class="box" />
```

```css
.box {
  width: 400px;
  height: 200px;
  background-image: url(/assets/img/balloons.jpg);
  background-repeat: no-repeat;
  background-size: 100px 100px;
}
```

:::

#### 背景图像定位

`background-position` 属性允许您选择背景图像显示在其应用到的盒子中的位置。它使用的坐标系中，框的左上角是 (0,0)，框沿着水平(x)和垂直(y)轴定位。

::: info

默认的背景位置值是 (0,0)。

:::

最常见的背景位置值有两个单独的值: 一个水平值后面跟着一个垂直值。

您可以使用像 `top` 和 `right` 这样的关键字

```css
.box {
  background-image: url(/assets/img/star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

或者使用长度值与百分比:

```css
.box {
  background-image: url(/assets/img/star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

您也可以混合使用关键字，长度值以及百分比，例如:

```css
.box {
  background-image: url(/assets/img/star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}
```

最后，您还可以使用四个值语法来指示到盒子的某些边的距离。长度单位是与其前面的值的偏移量。所以在下面的 CSS 中，我们将背景从顶部调整 20px，从右侧调整 10px:

```css
.box {
  background-image: url(/assets/img/star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

::: normal-demo 动手操作体会这些值

```html
<div class="box" />
```

```css
.box {
  width: 400px;
  height: 200px;
  background-image: url(/assets/img/star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

:::

::: info

`background-position` 是 `background-position-x` 和 `background-position-y` 的简写，它们允许您分别设置不同的坐标轴的值。

:::

### 渐变背景

当渐变用于背景时，也可以使用像图像一样的 `background-image` 属性设置。

::: info

渐变色的案例可以从 [Web Gradients](https://webgradients.com/) 寻找，此处不再举例

:::

### 多个背景图像

CSS 允许您有多个背景图像。您需要在 `background-image` 设置多个值，并用逗号分隔每个值。

当您这样做时，您可能会以背景图像互相重叠而告终。背景将与最后列出的背景图像层在堆栈的底部，背景图像在代码列表中最先出现的在顶端。

::: tip

渐变可以与常规的背景图像很好地混合在一起。

:::

其它 `background-*` 属性的值需要同样用逗号分隔的方式设置。

**案例**:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

不同属性的每个值，将与其他属性中相同位置的值匹配。例如，上面的 image1 的 `background-repeat` 值将是 `no-repeat`。

当不同的属性具有不同数量的值时，较小数量的值会循环继续使用。

### 背景附加

`background-attachment` 属性控制内容滚动时背景何滚动。

它可以接受以下值:

- `scroll`: 使元素的背景在页面滚动时滚动。如果滚动了元素内容，则背景不会移动。实际上，背景被固定在页面的相同位置，所以它会随着页面的滚动而滚动。
- `fixed`: 使元素的背景固定在视图端口上，这样当页面或元素内容滚动时，它就不会滚动。它将始终保持在屏幕上相同的位置。
- `local`: 因为滚动值相当混乱，在很多情况下并不能真正实现您想要的功能。局部值将背景固定在设置的元素上，因此当您滚动元素时，背景也随之滚动。

`background-attachment` 属性只有在有内容要滚动时才会有效果。

::: tip 案例

[案例地址](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)

:::

### background 简写

CSS `background` 属性是许多普通背景属性的简写，它允许您一次设置所有不同的属性。

如果您在样式表中发现了一个复杂的背景属性，可能会觉得难以理解，因为可以同时传入这么多值。

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.2) 39%,
        rgba(51, 56, 57, 1) 96%
      )
      center center / 400px 200px no-repeat,
    url(big-star.png) center no-repeat,
    rebeccapurple;
}
```

如果使用多个背景，则需要为第一个背景指定所有普通属性，然后在逗号后面添加下一个背景。

这里有一些规则，需要在简写背景属性时遵循，例如:

- `background-color` 只能在逗号之后指定。
- `background-size` 值只能包含在背景位置之后，用 `/` 字符分隔，例如: `center/80%`。

全部规则请见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)

::: warning

Mr.Hope 极其不建议使用这个简写，因为它比较复杂，很容易导致预期之外的结果。

:::

### 背景的可访问性考虑

当您把文字放在背景图片或颜色上面时，需要保持足够的对比度让文字清晰易读。如果指定了一个图像，并且文本将被放置在该图像的顶部，您还应该指定一个 `background-color` ，以便在图像未加载时文本也足够清晰。

::: warning

屏幕阅读器不能解析背景图像，因此背景图片应该只是纯粹的装饰；任何重要的内容都应该是 HTML 页面的一部分，而不是包含在背景中。

:::

## 边框

在学习盒模型时，我们发现了边框如何影响盒子的大小。在这节课中，我们将看看如何创造性地使用边界。通常，当我们使用 CSS 向元素添加边框时，我们使用一个简写属性在一行 CSS 中设置边框的颜色、宽度和样式。我们可以使用 `border` 为一个框的所有四个边设置边框。

```css
.box {
  border: 1px solid black;
}
```

或者我们可以只设置盒子的一个边，例如:

```css
.box {
  border-top: 1px solid black;
}
```

上述简写属性等价于:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

当然您也可以使用分别设置某个边:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

### 圆角

使用 `border-radius` 属性可以实现边框的圆角。属性需要填入两个长度或百分比作为值，第一个值定义水平半径，第二个值定义垂直半径。在很多情况下，您将只传递一个值，同时作用在两个半径上。

例如，要使一个盒子的四个角都有 10px 的圆角半径:

```css
.box {
  border-radius: 10px;
}
```

或使右上角的水平半径为 1em，垂直半径为 10%:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```
