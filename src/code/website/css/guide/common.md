---
title: 常见属性说明
icon: info
date: 2019-09-06
order: 6
category: CSS
tag:
  - 快速上手
next: ../intro/selector.html
---

本章节介绍 CSS 的最常见，也是最基础属性。

<!-- more -->

## 文本

| 格式     | 属性            | 值                                                                          |
| -------- | --------------- | --------------------------------------------------------------------------- |
| 对齐方式 | text-align      | `left` (默认) / `right` / `center` / `justify` / `inherit`                  |
| 字体     | font-family     | 各种字体对应的代号                                                          |
| 斜体样式 | font-style      | `normal` (默认) /`italic`                                                   |
| 字体粗细 | font-weight     | 描述值 `light` / `normal` / `bold`，数字 100 - 900 (400 为 normal)          |
| 字体大小 | font-size       | 像素如 `14px`，磅如 `8pt`，字体大小如 `1em`、`0.5rem`                       |
| 行高     | line-height     | 像素如 `14px`，数字如 `2`(代表 2 倍字高)                                    |
| 字体间距 | letter-spacing  | 像素如 `14px`，百分比如 `10%`，磅如 `8pt`，字体大小如 `1em`、`0.5rem`       |
| 字体装饰 | text-decoration | `none` (默认) / `underline`/`overline`/`line-through` / `blink` / `inherit` |

案例:

```css
p.normal {
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
}
```

## 颜色

1. HEX(十六进制)表示方法

   `#__ __ __(__)` 前三个空白位置分别代表 **R** (red)，**G** (green)，**B** (blue)，即红、绿、蓝显示三原色。最后一位代表 **A** (alpha)，即透明度通道。四个位置要统一填写 1 或 2 位十六进制数。

   ::: tip

   例子:

   - `#fff`: 3 位，16 色 RGB，灰度为 16，即 RGB 分别只有 16 色(从最淡到最浓为 `0` - `f`)。
   - `#ffff`: 4 位，16 色 RGBA。新增的透明度通道只有 16 个级别(`0` 为 `0%` 完全透明，`f` 为 `100%` 完全不透明)。
   - `#ffffff`: 6 位是 256 色 RGB，灰度为 256，即 RGB 分别拥有 256 色(从最淡到最浓为 `00` - `ff`)。
   - `#ffffffff`: 8 位是 256 色 RGBA。同上新增的透明度通道有 256 个级别(`00` 为 `0%` 完全透明，`ff` 为 `100%` 完全不透明)。

   :::

1. RGB 与 RGBA 表示方法

   **格式:**  
   RGB(R,G,B)  
   RGBA(R,G,B,A)

   R: 红色值。正整数 | 百分数

   G: 绿色值。正整数 | 百分数

   B: 蓝色值。正整数 | 百分数

   正整数值的取值范围为: 0 - 255。百分数值的取值范围为: 0.0% - 100.0%

   A: Alpha 透明度。取值 0~1 之间。

   例子:

   - RGB: `rgb(142 229 238)`

   - RGBA: `rgba(142 229 238 0)`

### 配色网站

- [颜色网站](http://tool.oschina.net/commons?type=3)
- [渐进色网站](https://webgradients.com/)

::: tip

由于黑色和白色是纯色，直接使用 16 色 HEX 表示方法即可。

即:
黑色 `#000`，白色 `#fff`

:::

```css
body,
h1,
p {
  background-color: #b0c4de;
}
```

## 链接

```css
/* 未访问链接*/
a:link {
  color: #000000;
  background-color: #b2ff99;
}

/*已访问链接 */
a:visited {
  color: #00ff00;
  background-color: #ffff85;
}

/*鼠标移动到链接上 */
a:hover {
  color: #ff00ff;
  background-color: #ff704d;
}

/* 鼠标点击时 */
a:active {
  color: #0000ff;
  background-color: #ff704d;
}
```

以上要注意优先级顺序，因为同样生效的 CSS，后面的优先级更高，例如将 `a:link` 放在最后，则剩余三个的颜色永远不会生效。

## 盒模型

::: tip

您可能需要先查看 [盒模型](box.md) 以理解此部分

:::

![盒模型示意图](https://www.runoob.com/wp-content/uploads/2013/08/VlwVi.png)

`margin` 和 `padding` 都可以接受 1 - 4 个参数。其参数默认以 `上` 侧为起始点，按照顺时针排序，即**上右下左**。

当 `下` / `左` 没有指定时，跟随 `上` / `右`；当 `右` 也没有指定时，全部跟随 `上`。

案例:

```css
div {
  /** 上 右 下 左 */
  margin: 25px 50px 75px 100px;
}

div {
  /** 上 右+左(跟随右) 下 */
  margin: 25px 50px 75px;
}

div {
  /** 上下 右左 */
  margin: 25px 50px;
}

div {
  /** 上右下左 全部25px */
  margin: 25px;
}
```

同时，也支持只对一侧设置，如:

```css
/** 只有左外边距，为3px */
div {
  margin-left: 3px;
}
```

::: tip

`padding` 与 `margin` 在格式上完全相同。

:::

## 背景色

使用 `background-color` 或 `background-image` 属性进行设置。

案例:

```css
.red {
  background-color: red;
}
```

## 位置

`position` 属性规定元素的定位类型。元素的位置通过 `left`, `top`, `right` 以及 `bottom` 属性进行规定。

可能的值:

| 值       | 描述                                                                                          |
| -------- | --------------------------------------------------------------------------------------------- |
| absolute | 生成绝对定位的元素，相对于 `static` 定位以外的第一个父元素进行定位。                          |
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。                                                |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。因此，"`left: 20px`" 会让元素向右偏移 20 像素。 |
| static   | 默认值。没有定位，元素出现在正常的流中 (忽略 top, bottom, left, right 或者 z-index 声明)。    |
| sticky   | 在文档中正常定位，但当向上滚动到达屏幕顶端时，固定在顶部不再随页面上移                        |
| inherit  | 规定应该从父元素继承 `position` 属性的值。                                                    |

如果设置为 `absolute` 或者 `fixed` 的话，元素将会脱离文档流，也就是正常的文档布局里面不再有它的位置，不会给它留空，完全视它不存在。它会根据最后渲染出的其他元素位置寻找自己的定位。
