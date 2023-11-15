---
date: 2020-10-09
title: WXML
icon: code
category: 小程序
---

WXML (WeiXin Markup Language) 是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。

<!-- more -->

用以下一些简单的例子来展示 WXML 的能力:

## 数据绑定

案例:

```xml
<!--wxml-->
<view> {{message}} </view>
```

```js
// page.js
Page({
  data: {
    message: "Hello MINA!",
  },
});
```

- [查看详情](data-bind.md)

## 条件渲染

案例:

```xml
<!--wxml-->
<view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
<view wx:elif="{{view == 'APP'}}"> APP </view>
<view wx:else="{{view == 'MINA'}}"> MINA </view>
```

```js
// page.js
Page({
  data: {
    view: "MINA",
  },
});
```

- [查看详情](condition-render.md)

## 列表渲染

案例:

```xml
<!--wxml-->
<view wx:for="{{array}}"> {{item}} </view>
```

```js
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5],
  },
});
```

- [查看详情](list-render.md)

## 模板

案例:

```xml
<!--wxml-->
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
```

```js
// page.js
Page({
  data: {
    staffA: { firstName: "Hulk", lastName: "Hu" },
    staffB: { firstName: "Shang", lastName: "You" },
    staffC: { firstName: "Gideon", lastName: "Lin" },
  },
});
```

- [查看详情](template.md)
