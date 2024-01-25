---
date: 2020-10-09
title: 动画
icon: animation
category: 小程序
---

::: tip

此部分在初步学习小程序的时候直接略过即可。

:::

## 界面动画的常见方式

在小程序中，通常可以使用 [CSS 渐变](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) 和 [CSS 动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations) 来创建简易的界面动画。(这也是 Mr.Hope 主要使用的动画方式)

> [在开发者工具中预览效果](https://developers.weixin.qq.com/s/oHKxDPm47h5k)

同时，还可以使用 [`wx.createAnimation`](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html) 接口来动态创建简易的动画效果。

动画过程中，可以使用 `bindtransitionend` `bindanimationstart` `bindanimationiteration` `bindanimationend` 来监听动画事件。

| 事件名             | 含义                                           |
| ------------------ | ---------------------------------------------- |
| transitionend      | CSS 渐变结束或 wx.createAnimation 结束一个阶段 |
| animationstart     | CSS 动画开始                                   |
| animationiteration | CSS 动画结束一个阶段                           |
| animationend       | CSS 动画结束                                   |

::: warning

这几个事件都不是冒泡事件，需要绑定在真正发生了动画的节点上才会生效。

Mr.Hope 强烈建议优先使用 **CSS 动画**。只有 **CSS 动画** 无法满足要求时，才应该考虑 `wx.createAnimation`。

:::

## 关键帧动画

> 基础库 2.9.0 开始支持

关键帧动画用于代替旧的 [`wx.createAnimation`](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html) 。它具有更好的性能和更可控的接口。

### animate

在页面或自定义组件中，当需要进行关键帧动画时，可以使用 `this.animate` 接口:

```js
this.animate(selector, keyframes, duration, callback);
```

参数说明

| 属性      | 类型     | 默认值 | 必填 | 说明                                         |
| --------- | -------- | ------ | ---- | -------------------------------------------- |
| selector  | String   |        | 是   | 选择器(同 SelectorQuery.select 的选择器格式) |
| keyframes | Array    |        | 是   | 关键帧信息                                   |
| duration  | Number   |        | 是   | 动画持续时长(毫秒为单位)                     |
| callback  | function |        | 否   | 动画完成后的回调函数                         |

keyframes 中对象的结构

| 属性            | 类型          | 默认值 | 必填                              | 说明                                    |
| --------------- | ------------- | ------ | --------------------------------- | --------------------------------------- |
| offset          | Number        |        | 否                                | 关键帧的偏移，范围[0-1]                 |
| ease            | String        | linear | 否                                | 动画缓动函数                            |
| transformOrigin | String        | 否     | 基点位置，即 CSS transform-origin |                                         |
| backgroundColor | String        |        | 否                                | 背景颜色，即 CSS background-color       |
| bottom          | Number/String |        | 否                                | 底边位置，即 CSS bottom                 |
| height          | Number/String |        | 否                                | 高度，即 CSS height                     |
| left            | Number/String |        | 否                                | 左边位置，即 CSS left                   |
| width           | Number/String |        | 否                                | 宽度，即 CSS width                      |
| opacity         | Number        |        | 否                                | 不透明度，即 CSS opacity                |
| right           | Number        |        | 否                                | 右边位置，即 CSS right                  |
| top             | Number/String |        | 否                                | 顶边位置，即 CSS top                    |
| matrix          | Array         |        | 否                                | 变换矩阵，即 CSS transform matrix       |
| matrix3d        | Array         |        | 否                                | 三维变换矩阵，即 CSS transform matrix3d |
| rotate          | Number        |        | 否                                | 旋转，即 CSS transform rotate           |
| rotate3d        | Array         |        | 否                                | 三维旋转，即 CSS transform rotate3d     |
| rotateX         | Number        |        | 否                                | X 方向旋转，即 CSS transform rotateX    |
| rotateY         | Number        |        | 否                                | Y 方向旋转，即 CSS transform rotateY    |
| rotateZ         | Number        |        | 否                                | Z 方向旋转，即 CSS transform rotateZ    |
| scale           | Array         |        | 否                                | 缩放，即 CSS transform scale            |
| scale3d         | Array         |        | 否                                | 三维缩放，即 CSS transform scale3d      |
| scaleX          | Number        |        | 否                                | X 方向缩放，即 CSS transform scaleX     |
| scaleY          | Number        |        | 否                                | Y 方向缩放，即 CSS transform scaleY     |
| scaleZ          | Number        |        | 否                                | Z 方向缩放，即 CSS transform scaleZ     |
| skew            | Array         |        | 否                                | 倾斜，即 CSS transform skew             |
| skewX           | Number        |        | 否                                | X 方向倾斜，即 CSS transform skewX      |
| skewY           | Number        |        | 否                                | Y 方向倾斜，即 CSS transform skewY      |
| translate       | Array         |        | 否                                | 位移，即 CSS transform translate        |
| translate3d     | Array         |        | 否                                | 三维位移，即 CSS transform translate3d  |
| translateX      | Number        |        | 否                                | X 方向位移，即 CSS transform translateX |
| translateY      | Number        |        | 否                                | Y 方向位移，即 CSS transform translateY |
| translateZ      | Number        |        | 否                                | Z 方向位移，即 CSS transform translateZ |

::: details 代码示例

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/P73kJ7mi7UcA)

```js
this.animate(
  "#container",
  [
    { opacity: 1.0, rotate: 0, backgroundColor: "#FF0000" },
    { opacity: 0.5, rotate: 45, backgroundColor: "#00FF00" },
    { opacity: 0.0, rotate: 90, backgroundColor: "#FF0000" },
  ],
  5000,
  function () {
    this.clearAnimation(
      "#container",
      { opacity: true, rotate: true },
      function () {
        console.log("清除了#container上的opacity和rotate属性");
      },
    );
  }.bind(this),
);

this.animate(
  ".block",
  [
    { scale: [1, 1], rotate: 0, ease: "ease-out" },
    { scale: [1.5, 1.5], rotate: 45, ease: "ease-in", offset: 0.9 },
    { scale: [2, 2], rotate: 90 },
  ],
  5000,
  function () {
    this.clearAnimation(".block", function () {
      console.log("清除了.block上的所有动画属性");
    });
  }.bind(this),
);
```

:::

### clearAnimation

调用 animate API 后会在节点上新增一些样式属性覆盖掉原有的对应样式。如果需要清除这些样式，可在该节点上的动画全部执行完毕后使用 `this.clearAnimation` 清除这些属性。

```js
this.clearAnimation(selector, options, callback);
```

参数说明

| 属性     | 类型     | 默认值 | 必填 | 说明                                         |
| -------- | -------- | ------ | ---- | -------------------------------------------- |
| selector | String   |        | 是   | 选择器(同 SelectorQuery.select 的选择器格式) |
| options  | Object   |        | 否   | 需要清除的属性，不填写则全部清除             |
| callback | Function |        | 否   | 清除完成后的回调函数                         |

## 滚动驱动的动画

> 基础库 2.9.0 开始支持

根据滚动位置而不断改变动画的进度是一种比较常见的场景，这类动画可以让人感觉到界面交互很连贯自然，体验更好，目前支持一种由滚动驱动的动画机制。

基于上述的关键帧动画接口，新增一个 `ScrollTimeline` 的参数，用来绑定滚动元素(目前只支持 scroll-view)。接口定义如下:

```js
this.animate(selector, keyframes, duration, ScrollTimeline);
```

### ScrollTimeline 中对象的结构

| 属性              | 类型   | 默认值   | 必填 | 说明                                                                                            |
| ----------------- | ------ | -------- | ---- | ----------------------------------------------------------------------------------------------- |
| scrollSource      | String |          | 是   | 指定滚动元素的选择器(只支持 scroll-view)，该元素滚动时会驱动动画的进度                          |
| orientation       | String | vertical | 否   | 指定滚动的方向。有效值为 horizontal 或 vertical                                                 |
| startScrollOffset | Number |          | 是   | 指定开始驱动动画进度的滚动偏移量，单位 px                                                       |
| endScrollOffset   | Number |          | 是   | 指定停止驱动动画进度的滚动偏移量，单位 px                                                       |
| timeRange         | Number |          | 是   | 起始和结束的滚动范围映射的时间长度，该时间可用于与关键帧动画里的时间 (duration) 相匹配，单位 ms |

::: details 代码示例

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/994o8jmY7FcQ)

```js
this.animate(
  ".avatar",
  [
    {
      borderRadius: "0",
      borderColor: "red",
      transform: "scale(1) translateY(-20px)",
      offset: 0,
    },
    {
      borderRadius: "25%",
      borderColor: "blue",
      transform: "scale(.65) translateY(-20px)",
      offset: 0.5,
    },
    {
      borderRadius: "50%",
      borderColor: "blue",
      transform: `scale(.3) translateY(-20px)`,
      offset: 1,
    },
  ],
  2000,
  {
    scrollSource: "#scroller",
    timeRange: 2000,
    startScrollOffset: 0,
    endScrollOffset: 85,
  },
);

this.animate(
  ".search_input",
  [
    {
      opacity: "0",
      width: "0%",
    },
    {
      opacity: "1",
      width: "100%",
    },
  ],
  1000,
  {
    scrollSource: "#scroller",
    timeRange: 1000,
    startScrollOffset: 120,
    endScrollOffset: 252,
  },
);
```

:::

## 高级的动画方式 <Badge text="初学者无需掌握" type="warning" />

在一些复杂场景下，上述的动画方法可能并不适用。所以这个时候就需要一些高级的动画方式。

1. [WXS 响应事件](wxs-event.md) 的方式可以通过使用 WXS 来响应事件的方法来动态调整节点的 style 属性。通过不断改变 style 属性的值可以做到动画效果。同时，这种方式也可以根据用户的触摸事件来动态地生成动画。

1. 连续使用 `setData` 来改变界面的方法也可以达到动画的效果。这样可以任意地改变界面，但通常会产生较大的延迟或卡顿，甚至导致小程序僵死。此时可以通过将页面的 `setData` 改为 自定义组件 中的 `setData` 来提升性能。下面的例子是使用 `setData` 来实现秒表动画的示例。

   > [在开发者工具中预览效果](https://developers.weixin.qq.com/s/cRTvdPmO7d5T)
