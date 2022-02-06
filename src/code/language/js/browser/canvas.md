---
title: Canvas
icon: stack
date: 2019-10-19
category: JavaScript
---

`Canvas` 是 HTML5 新增的组件，它就像一块幕布，可以用 JavaScript 在上面绘制各种图表、动画等。

<!-- more -->

没有 Canvas 的年代，绘图只能借助 Flash 插件实现，页面不得不用 JavaScript 和 Flash 进行交互。有了 Canvas，我们就再也不需要 Flash 了，直接使用 JavaScript 完成绘制。

一个 Canvas 定义了一个指定尺寸的矩形框，在这个范围内我们可以随意绘制:

```html
<canvas id="test-canvas" width="300" height="200" />
```

由于浏览器对 HTML5 标准支持不一致，所以，通常在 `<canvas>` 内部添加一些说明性 HTML 代码，如果浏览器支持 Canvas，它将忽略 `<canvas>` 内部的 HTML，如果浏览器不支持 Canvas，它将显示 `<canvas>` 内部的 HTML:

```html
<canvas id="test-stock" width="300" height="200">
  <p>Current Price: 25.51</p>
</canvas>
```

在使用 Canvas 前，用 `canvas.getContext` 来测试浏览器是否支持 Canvas:

```html
<!-- HTML代码 -->
<canvas id="test-canvas" width="200" heigth="100">
  <p>您的浏览器不支持Canvas</p>
</canvas>
```

```js
"use strict";

let canvas = document.querySelector("#test-canvas");
if (canvas.getContext) {
  console.log("您的浏览器支持Canvas!");
} else {
  console.log("您的浏览器不支持Canvas!");
}
```

`getContext('2d')` 方法让我们拿到一个 `CanvasRenderingContext2D` 对象，所有的绘图操作都需要通过这个对象完成。

```js
let ctx = canvas.getContext("2d");
```

如果需要绘制 3D 怎么办? HTML5 还有一个 WebGL 规范，允许在 Canvas 中绘制 3D 图形:

```js
gl = canvas.getContext("webgl");
```

本节我们只专注于绘制 2D 图形。

## 绘制形状

我们可以在 Canvas 上绘制各种形状。在绘制前，我们需要先了解一下 Canvas 的坐标系统:

![canvas-xy](../assets/promise.png)

Canvas 的坐标以左上角为原点，水平向右为 X 轴，垂直向下为 Y 轴，以像素为单位，所以每个点都是非负整数。

`CanvasRenderingContext2D` 对象有若干方法来绘制图形:

```js
"use strict";

let canvas = document.querySelector("#test-shape-canvas"),
  ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
ctx.fillStyle = "#dddddd"; // 设置颜色
ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
// 利用Path绘制复杂路径:
let path = new Path2D();
path.arc(75, 75, 50, 0, Math.PI * 2, true);
path.moveTo(110, 75);
path.arc(75, 75, 35, 0, Math.PI, false);
path.moveTo(65, 65);
path.arc(60, 65, 5, 0, Math.PI * 2, true);
path.moveTo(95, 65);
path.arc(90, 65, 5, 0, Math.PI * 2, true);
ctx.strokeStyle = "#0000ff";
ctx.stroke(path);
```

## 绘制文本

绘制文本就是在指定的位置输出文本，可以设置文本的字体、样式、阴影等，与 CSS 完全一致:

```js
"use strict";

let canvas = document.querySelector("#test-text-canvas"),
  ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = "#666666";
ctx.font = "24px Arial";
ctx.fillStyle = "#333333";
ctx.fillText("带阴影的文字", 20, 40);
```

Canvas 除了能绘制基本的形状和文本，还可以实现动画、缩放、各种滤镜和像素转换等高级操作。如果要实现非常复杂的操作，考虑以下优化方案:

- 通过创建一个不可见的 Canvas 来绘图，然后将最终绘制结果复制到页面的可见 Canvas 中；

- 尽量使用整数坐标而不是浮点数；

- 可以创建多个重叠的 Canvas 绘制不同的层，而不是在一个 Canvas 中绘制非常复杂的图；

- 背景图片如果不变可以直接用 `<img>` 标签并放到最底层。
