---
date: 2020-10-09
title: 宿主环境
icon: leaf
category: 小程序
---

宿主环境是微信客户端给小程序所提供的环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。

<!-- more -->

## 渲染层和逻辑层

小程序的运行环境分成渲染层和逻辑层。

- WXML 模板和 WXSS 样式工作在渲染层；
- JS 脚本工作在逻辑层。

小程序的渲染层和逻辑层分别由 2 个线程管理:

- 渲染层的界面使用了 WebView 进行渲染；
- 逻辑层采用 JsCore 线程运行 JS 脚本。

一个小程序存在多个界面，所以渲染层存在多个 WebView 线程，这两个线程的通信会经由微信客户端(Native)做中转，逻辑层发送网络请求也经由 Native 转发，小程序的通信模型下图所示。

![通信模型](https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png)

## 程序与页面

微信客户端在打开小程序之前，会把整个小程序的代码包下载到本地。

客户端通过 `app.json` 的 `pages` 字段获得当前小程序的所有页面路径:

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"]
}
```

::: tip

QuickStart 项目通过该配置定义了两个页面，分别位于 `pages/index/index` 和 `pages/logs/logs`。写在 `pages` 字段的第一个页面就是这个小程序的首页(打开小程序看到的第一个页面)。

:::

于是微信客户端就把首页的代码装载进来，染出这个首页。

小程序启动之后，在 `app.js` 定义的 `App` 实例的 `onLaunch` 回调会被执行:

```js
App({
  onLaunch() {
    // 小程序启动之后 触发
  },
});
```

整个小程序只有一个 App 实例，是全部页面共享的，更多的事件回调参考文档 [注册程序 App](service/app.md) 。

接下来我们简单看看小程序的一个页面是怎么写的。

您可以观察到 `pages/logs/logs` 下其实是包括了 4 种文件的，微信客户端会先根据 `logs.json` 配置生成一个界面，顶部的颜色和文字您都可以在这个 json 文件里边定义好。紧接着客户端就会装载这个页面的 WXML 结构和 WXSS 样式。最后客户端会装载 `logs.js`，您可以看到 `logs.js` 的大体内容就是:

```js
Page({
  data: {
    // 参与页面渲染的数据
    logs: [],
  },
  onLoad() {
    // 页面渲染后 执行
  },
});
```

Page 是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把 `data` 数据和对应的 wxml 一起渲染出最终的结构，于是就得到了您看到的小程序的样子。

在渲染完界面之后，页面实例就会收到一个 `onLoad` 的回调，您可以在这个回调处理您的逻辑。

有关于 Page 构造器更多详细的文档参考 [注册页面 Page](service/page.md)。

## 组件

小程序提供了丰富的基础组件给开发者，开发者可以像搭积木一样，组合各种组件拼合成自己的小程序。

就像 HTML 的 `div`, `p` 等标签一样，在小程序里边，您只需要在 WXML 写上对应的组件标签名字就可以把该组件显示在界面上，例如，您需要在界面上显示地图，您只需要这样写即可:

```xml
<map />
```

使用组件的时候，还可以通过属性传递值给组件，让组件可以以不同的状态去展现，例如，我们希望地图一开始的中心的经纬度是长春，那么您需要声明地图的 `longitude`(中心经度) 和 `latitude`(中心纬度)两个属性:

```xml
<map longitude="长春经度" latitude="长春纬度" />
```

组件的内部行为也会通过事件的形式让开发者可以感知，例如用户点击了地图上的某个标记，您可以在 js 编写 markertap 函数来处理:

```xml
<map bindmarkertap="markertap" longitude="长春经度" latitude="长春纬度" />
```

当然您也可以通过 `style` 或者 `class` 来控制组件的外层样式，以便适应您的界面宽度高度等等。

## API

为了让开发者可以很方便的调起微信提供的能力，例如获取用户信息、微信支付等等，小程序提供了很多 API 给开发者去使用。

要获取用户的地理位置时，只需要:

```js
wx.getLocation({
  type: "wgs84",
  success: (res) => {
    const { latitude, longitude } = res; // 获取经纬度
    console.log(latitude, longitude);
  },
});
```

调用微信扫一扫能力，只需要:

```js
wx.scanCode({
  success: (res) => {
    console.log(res);
  },
});
```

需要注意的是: 多数 API 的回调都是异步，您需要处理好代码逻辑的异步问题。

更多的 API 能力见 [小程序的 API](https://developers.weixin.qq.com/miniprogram/dev/api/)。
