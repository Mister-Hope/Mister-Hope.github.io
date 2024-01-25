---
title: 动画
icon: animation
date: 2019-11-04
category: jQuery
---

::: tip 章节过时

大部分动画都能够通过 CSS3 的 transition 实现，且 CSS3 开销更小。在复杂动画下，jQuery 更容易触发性能瓶颈。

2023 年浏览器对 CSS3 已经支持的特别良好，所以目前大多数的动画都直接使用 CSS3 的动画库。本章以学习思路为主即可。

:::

<!-- more -->

用 JavaScript 实现动画，原理非常简单: 我们只需要以固定的时间间隔(例如，0.1 秒)，每次把 DOM 元素的 CSS 样式修改一点(例如，高宽各增加 10%)，看起来就像动画了。

但是要用 JavaScript 手动实现动画效果，需要编写非常复杂的代码。如果想要把动画效果用函数封装起来便于复用，那考虑的事情就更多了。

使用 jQuery 实现动画，代码已经简单得不能再简化了: 只需要一行代码!

让我们先来看看 jQuery 内置的几种动画样式:

## show / hide

直接以无参数形式调用 `show()` 和 `hide()`，会显示和隐藏 DOM 元素。但是，只要传递一个时间参数进去，就变成了动画:

```js
const div = $("#test-show-hide");

div.hide(3000); // 在3秒钟内逐渐消失
```

时间以毫秒为单位，但也可以是 `'slow'`，`'fast'` 这些字符串:

```js
const div = $("#test-show-hide");

div.show("slow"); // 在0.6秒钟内逐渐显示
```

`toggle()` 方法则根据当前状态决定是 `show()` 还是 `hide()`。

## slideUp / slideDown

您可能已经看出来了，`show()` 和 `hide()` 是从左上角逐渐展开或收缩的，而 `slideUp()` 和 `slideDown()` 则是在垂直方向逐渐展开或收缩的。

`slideUp()` 把一个可见的 DOM 元素收起来，效果跟拉上窗帘似的，`slideDown()` 相反，而 `slideToggle()` 则根据元素是否可见来决定下一步动作:

```js
const div = $("#test-slide");

div.slideUp(3000); // 在3秒钟内逐渐向上消失
```

## fadeIn / fadeOut

`fadeIn()` 和 `fadeOut()` 的动画效果是淡入淡出，也就是通过不断设置 DOM 元素的 `opacity` 属性来实现，而 `fadeToggle()` 则根据元素是否可见来决定下一步动作:

```js
const div = $('#test-fade');

div.fadeOut('slow'); // 在 0.6 秒内淡出
fadeOut('slow')  fadeIn('slow')  fadeToggle('slow')
```

## 自定义动画

如果上述动画效果还不能满足您的要求，那就祭出最后大招: `animate()`，它可以实现任意动画效果，我们需要传入的参数就是 DOM 元素最终的 CSS 状态和时间，jQuery 在时间段内不断调整 CSS 直到达到我们设定的值:

```js
const div = $("#test-animate");

div.animate(
  {
    opacity: 0.25,
    width: "256px",
    height: "256px",
  },
  3000,
); // 在 3 秒钟内 CSS 过渡到设定值
```

`animate()` 还可以再传入一个函数，当动画结束时，该函数将被调用:

```js
const div = $("#test-animate");

div.animate(
  {
    opacity: 0.25,
    width: "256px",
    height: "256px",
  },
  3000,
  function () {
    console.log("动画已结束");
    // 恢复至初始状态:
    $(this).css("opacity", "1.0").css("width", "128px").css("height", "128px");
  },
);
```

实际上这个回调函数参数对于基本动画也是适用的。

有了 `animate()`，您就可以实现各种自定义动画效果了:

## 串行动画

jQuery 的动画效果还可以串行执行，通过 `delay()` 方法还可以实现暂停，这样，我们可以实现更复杂的动画效果，而代码却相当简单:

```js
const div = $('#test-animates');

// 动画效果: slideDown - 暂停 - 放大 - 暂停 - 缩小
div.slideDown(2000)
   .delay(1000)
   .animate({
       width: '256px',
       height: '256px'
   }, 2000)
   .delay(1000)
   .animate({
       width: '128px',
       height: '128px'
   }, 2000);
}
```

因为动画需要执行一段时间，所以 jQuery 必须不断返回新的 Promise 对象才能后续执行操作。简单地把动画封装在函数中是不够的。

## 为什么有的动画没有效果

您可能会遇到，有的动画如 `slideUp()` 根本没有效果。这是因为 jQuery 动画的原理是逐渐改变 CSS 的值，如 `height` 从 `100px` 逐渐变为 `0`。但是很多不是 block 性质的 DOM 元素，对它们设置 `height` 根本就不起作用，所以动画也就没有效果。

此外，jQuery 也没有实现对 `background-color` 的动画效果，用 `animate()` 设置 `background-color` 也没有效果。这种情况下可以使用 CSS3 的 `transition` 实现动画效果。
