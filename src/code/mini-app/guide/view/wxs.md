---
date: 2020-10-09
title: WXS
icon: script
category: 小程序
---

::: tip

此部分在初步学习小程序的时候直接略过即可。

:::

WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。

1. WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。
1. WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。
1. WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。
1. WXS 函数不能作为组件的事件回调。
1. 由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。

<!-- more -->

以下是一些使用 WXS 的简单示例，要完整了解 WXS 语法，请参考 WXS 语法参考。

## 页面渲染

```xml
<!--wxml-->
<wxs module="m1">
const msg = "hello world";

module.exports.message = msg;
</wxs>

<view> {{m1.message}} </view>
```

页面输出:

```html
hello world
```

## 数据处理

```js
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5, 1, 2, 3, 4],
  },
});
```

```xml
<!--wxml-->
<!-- 下面的 getMax 函数，接受一个数组，且返回数组中最大的元素的值 -->
<wxs module="m1">
const getMax = array => {
  let max = undefined;
  for (let i = 0; i < array.length; ++i) {
    max = max === undefined ?
      array[i] :
      (max >= array[i] ? max : array[i]);
  }

  return max;
};

module.exports.getMax = getMax;
</wxs>

<!-- 调用 wxs 里面的 getMax 函数，参数为 page.js 里面的 array -->
<view> {{m1.getMax(array)}} </view>
```

页面输出:

```html
5
```
