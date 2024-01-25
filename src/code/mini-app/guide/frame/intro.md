---
date: 2021-00-12
title: 框架
icon: frame
category: 小程序
---

小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。

整个小程序框架系统分为两部分: [**逻辑层**](../service/README.md) (App Service) 和 [**视图层**](../view/README.md) (../view)。小程序提供了自己的视图层描述语言 [WXML](../view/wxml.md) 和 [WXSS](../view/wxss.md)，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。

<!-- more -->

## 响应的数据绑定 <Badge text="务必理解" type="error" />

框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/l0gLEKmv6gZa)

```xml
<!-- This is our View -->
<view> Hello {{name}}! </view>
<button bindtap="changeName"> Click me! </button>
```

```js
// This is our App Service.
// This is our data.
const helloData = {
  name: "WeChat",
};

// Register a Page.
Page({
  data: helloData,
  changeName(e) {
    // sent data change to view
    this.setData({
      name: "MINA",
    });
  },
});
```

1. 开发者通过框架将逻辑层数据中的 `name` 与视图层的 `name` 进行了绑定，所以在页面一打开的时候会显示 `Hello WeChat!`；
1. 当点击按钮的时候，视图层会发送 `changeName` 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；
1. 回调函数触发后，逻辑层执行 `setData` 的操作，将 `data` 中的 `name` 从 `WeChat` 变为 `MINA`，因为该数据和视图层已经绑定了，从而视图层会自动改变为 `Hello MINA!`。

## 页面管理

**框架** 管理了整个小程序的页面路由，可以做到页面间的无缝切换，并给以页面完整的 [生命周期](../service/lifetime.md)。开发者需要做的只是将页面的数据、方法、生命周期函数注册到 **框架** 中，其他的一切复杂的操作都交由 **框架** 处理。

## 基础组件

**框架** 提供了一套基础的 [组件](../view/component.md)，[这些组件](../view/component.md) 自带微信风格的样式以及特殊的逻辑，开发者可以通过组合基础组件，创建出强大的微信小程序 。

## 丰富的 API

**框架** 提供丰富的 [微信原生 API](../service/api/README.md)，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。
