---
date: 2020-10-09
icon: router
category: 小程序
---

# 路由 API

本页面介绍的一系列 API 都是和小程序路由(导航)相关的 API。

可以通过这些 API，自定义小程序的页面导航逻辑。

::: tip 概要

最常用的两个:

- `wx.navigateTo`: 导航到一个新页面
- `wx.navigateBack`: 返回上一层(上 n 层)页面

不太常用的三个:

- `wx.redirectTo`: 将当前页面重定向到一个新的页面
- `wx.switchTab`: 到转到 Tabbar 的页面并关闭其他页面
- `wx.reLaunch`: 关闭小程序所有页面，并打开指定页面

:::

## wx.navigateTo(Object object)

保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 `wx.navigateBack` 可以返回到原页面。小程序中页面栈最多十层。

### navigateTo 参数

Object object

| 属性     | 类型     | 必填 | 说明                                                                                                                                                                     |
| -------- | -------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url      | string   | 是   | 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 `'path?key=value&key2=value2'` |
| events   | Object   | 否   | 页面间通信接口，用于监听被打开页面发送到当前页面的数据。<br />基础库 2.7.3 开始支持                                                                                      |
| success  | function | 否   | 接口调用成功的回调函数                                                                                                                                                   |
| fail     | function | 否   | 接口调用失败的回调函数                                                                                                                                                   |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行)                                                                                                                           |

### navigateToObject.success <Badge text="初学无需掌握" type="grey" />

参数

Object res

| 属性         | 类型         | 说明                 |
| ------------ | ------------ | -------------------- |
| eventChannel | EventChannel | 和被打开页面进行通信 |

示例代码

```js
wx.navigateTo({
  url: 'test?id=1',
  events: {
    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    acceptDataFromOpenedPage(data) {
      console.log(data)
    },
    someEvent(data) {
      console.log(data)
    }
    ...
  },
  success: res => {
    // 通过 eventChannel 向被打开页面传送数据
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' });
  }
});
```

```js
//test.js
Page({
  onLoad(option) {
    console.log(option.query);
    const eventChannel = this.getOpenerEventChannel();

    eventChannel.emit("acceptDataFromOpenedPage", { data: "test" });
    eventChannel.emit("someEvent", { data: "test" });
    // 监听a cceptDataFromOpenerPage 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
    eventChannel.on("acceptDataFromOpenerPage", (data) => {
      console.log(data);
    });
  },
});
```

## wx.navigateBack(Object object)

关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages` 获取当前的页面栈，决定需要返回几层。

### navigateBack 参数

Object object

| 属性     | 类型     | 默认值 | 必填 | 说明                                                    |
| -------- | -------- | ------ | ---- | ------------------------------------------------------- |
| delta    | number   | 1      | 否   | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 |
| success  | function |        | 否   | 接口调用成功的回调函数                                  |
| fail     | function |        | 否   | 接口调用失败的回调函数                                  |
| complete | function |        | 否   | 接口调用结束的回调函数(调用成功、失败都会执行)          |

示例代码

```js
// 注意: 调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码

// 此处是A页面
wx.navigateTo({ url: "B?id=1" });

// 此处是B页面
wx.navigateTo({ url: "C?id=1" });

// 在C页面内 navigateBack，将返回A页面
wx.navigateBack({ delta: 2 });
```

## wx.redirectTo(Object object)

关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。

### redirectTo 参数

Object object

| 属性     | 类型     | 必填 | 说明                                                                                                                                                                     |
| -------- | -------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url      | string   | 是   | 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 `'path?key=value&key2=value2'` |
| success  | function | 否   | 接口调用成功的回调函数                                                                                                                                                   |
| fail     | function | 否   | 接口调用失败的回调函数                                                                                                                                                   |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行)                                                                                                                           |

示例代码

```js
wx.redirectTo({
  url: "test?id=1",
});
```

## wx.switchTab(Object object)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

### switchTab 参数

Object object

| 属性     | 类型     | 默认值 | 必填 | 说明                                                                                     |
| -------- | -------- | ------ | ---- | ---------------------------------------------------------------------------------------- |
| url      | string   |        | 是   | 需要跳转的 tabBar 页面的路径(需在 app.json 的 tabBar 字段定义的页面)，路径后不能带参数。 |
| success  | function |        | 否   | 接口调用成功的回调函数                                                                   |
| fail     | function |        | 否   | 接口调用失败的回调函数                                                                   |
| complete | function |        | 否   | 接口调用结束的回调函数(调用成功、失败都会执行)                                           |

示例代码

```json
{
  "tabBar": {
    "list": [
      {
        "pagePath": "index",
        "text": "首页"
      },
      {
        "pagePath": "other",
        "text": "其他"
      }
    ]
  }
}
```

```js
wx.switchTab({
  url: "/index",
});
```

## wx.reLaunch(Object object)

关闭所有页面，打开到应用内的某个页面

### reLaunch 参数

Object object

| 属性     | 类型     | 必填 | 说明                                                                                                                                           |
| -------- | -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| url      | string   | 是   | 需要跳转的应用内页面路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 `'path?key=value&key2=value2'` |
| success  | function | 否   | 接口调用成功的回调函数                                                                                                                         |
| fail     | function | 否   | 接口调用失败的回调函数                                                                                                                         |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行)                                                                                                 |

示例代码

```js
wx.reLaunch({
  url: "test?id=1",
});
```

```js
// test
Page({
  onLoad(option) {
    console.log(option.query);
  },
});
```
