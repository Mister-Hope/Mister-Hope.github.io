---
date: 2022-04-05
title: API
icon: api
category: 小程序
---

小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。详细介绍请参考 [API 文档](https://developers.weixin.qq.com/miniprogram/dev/api/)。 <Badge text="重要" type="error" />

<!-- more -->

通常，在小程序 API 有以下几种类型:

## 事件监听 API

我们约定，以 on 开头的 API 用来监听某个事件是否触发，如: `wx.onSocketOpen`, `wx.onCompassChange` 等。

这类 API 接受一个回调函数作为参数，当事件触发时会调用这个回调函数，并将相关数据以参数形式传入。

```js
wx.onCompassChange((res) => {
  console.log(res.direction);
});
```

## 同步 API

我们约定，以 `Sync` 结尾的 API 都是同步 API， 如 `wx.setStorageSync`，`wx.getSystemInfoSync` 等。此外，也有一些其他的同步 API，如 `wx.createWorker`, `wx.getBackgroundAudioManager` 等，详情参见 API 文档中的说明。

同步 API 的执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常。

```js
try {
  wx.setStorageSync("key", "value");
} catch (e) {
  console.error(e);
}
```

## 异步 API

大多数 API 都是异步 API，如 `wx.request`，`wx.login` 等。这类 API 接口通常都接受一个 `Object` 类型的参数，这个参数都支持按需指定以下字段来接收接口调用结果:

### Object 参数说明

| 参数名   | 类型     | 必填 | 说明                                           |
| -------- | -------- | ---- | ---------------------------------------------- |
| success  | function | 否   | 接口调用成功的回调函数                         |
| fail     | function | 否   | 接口调用失败的回调函数                         |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |
| 其他     | Any      | -    | 接口定义的其他参数                             |

### 回调函数的参数

`success`, `fail`, `complete` 函数调用时会传入一个 `Object` 类型参数，包含以下字段:

| 属性    | 类型   | 说明                                                               |
| ------- | ------ | ------------------------------------------------------------------ |
| errMsg  | string | 错误信息，如果调用成功返回 `${apiName}:ok`                         |
| errCode | number | 错误码，仅部分 API 支持，具体含义请参考对应 API 文档，成功时为 0。 |
| 其他    | Any    | 接口返回的其他数据                                                 |

异步 API 的执行结果需要通过 `Object` 类型的参数中传入的对应回调函数获取。部分异步 API 也会有返回值，可以用来实现更丰富的功能，如 `wx.request`, `wx.connectSocke`t` 等。

```js
wx.login({
  success: (res) => {
    console.log(res.code);
  },
});
```

::: warning

异步函数会在异步动作进行完之后，触发对应设置好的回调函数，所以此时的函数执行已经脱离了正常 js 的执行上下文。

如果对上面的话不理解，请务必查阅**什么是同步/异步函数**。

:::

## 常见 API

- [路由](route.md)

- [数据缓存](storage.md)

- [交互](interact.md)

- [网络](network.md)

- [系统信息](system.md)
