---
title: App <MyBadge text="重要" type="error" />
icon: app
category: 小程序
---

注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。

::: warning
App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。
:::

<!-- more -->

## 参数

### Object object

| 属性           | 类型     | 默认值 | 必填 | 说明                                                                     |
| -------------- | -------- | ------ | ---- | ------------------------------------------------------------------------ |
| onLaunch       | function |        | 否   | 生命周期回调——监听小程序初始化。                                         |
| onShow         | function |        | 否   | 生命周期回调——监听小程序启动或切前台。                                   |
| onHide         | function |        | 否   | 生命周期回调——监听小程序切后台。                                         |
| onError        | function |        | 否   | 错误监听函数。                                                           |
| onPageNotFound | function |        | 否   | 页面不存在监听函数。                                                     |
| 其他           | any      |        | 否   | 开发者可以添加任意的函数或数据变量到 `Object` 参数中，用 `this` 可以访问 |

关于小程序前后台的定义和小程序的运行机制，请参考 [运行机制](run.md)。

```js
App({
  onLaunch(options) {
    // Do something initial when launch.
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg);
  },
  globalData: "I am global data",
});
```

### onLaunch(Object object)

小程序初始化完成时触发，全局只触发一次。参数也可以使用 `wx.getLaunchOptionsSync` 获取。

参数: 与 `wx.getLaunchOptionsSync` 一致

### onShow(Object object)

小程序启动，或从后台进入前台显示时触发。也可以使用 `wx.onAppShow` 绑定监听。

参数: 与 `wx.onAppShow` 一致

## onHide()

小程序从前台进入后台时触发。也可以使用 `wx.onAppHide` 绑定监听。

## onError(String error)

小程序发生脚本错误或 API 调用报错时触发。也可以使用 `wx.onError` 绑定监听。

参数: 与 `wx.onError` 一致

## onPageNotFound(Object object)

> 基础库 1.9.90 开始支持，低版本需做兼容处理。

小程序要打开的页面不存在时触发。也可以使用 `wx.onPageNotFound` 绑定监听。注意事项请参考 `wx.onPageNotFound`。

参数: 与 `wx.onPageNotFound` 一致

示例代码:

```js
App({
  onPageNotFound(res) {
    wx.redirectTo({
      url: "pages/...",
    }); // 如果是 tabbar 页面，请使用 wx.switchTab
  },
});
```

## AppObject getApp(Object object)

获取到小程序全局唯一的 App 实例。

### getApp 参数

Object object
| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本 |
| ------------ | ------- | ------ | ---- | ----------------------------------------------------------------------------------------------------- | -------- |
| allowDefault | boolean | false | 否 | 在 App 未定义时返回默认实现。当 App 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包 | 2.2.4 |

示例代码

```js
// other.js
const appInstance = getApp();
console.log(appInstance.globalData); // I am global data
```

::: warning

- 不要在定义于 `App()` 内的函数中，或调用 `App` 前调用 `getApp()` ，使用 `this` 就可以拿到 app 实例。
- 通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。

:::
