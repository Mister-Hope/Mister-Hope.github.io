---
date: 2020-10-09
title: Page
icon: page
category: 小程序
---

注册小程序中的一个页面。接受一个 Object 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。 <Badge text="重要" type="error" />

<!-- more -->

## 参数

Object object

以下是常用参数:

| 属性              | 类型     | 说明                              |
| ----------------- | -------- | --------------------------------- |
| data              | Object   | 页面的初始数据                    |
| onLoad            | function | 生命周期回调—监听页面加载         |
| onShow            | function | 生命周期回调—监听页面显示         |
| onReady           | function | 生命周期回调—监听页面初次渲染完成 |
| onHide            | function | 生命周期回调—监听页面隐藏         |
| onUnload          | function | 生命周期回调—监听页面卸载         |
| onShareAppMessage | function | 用户点击右上角转发                |
| onShareTimeline   | function | 用户点击右上角转发到朋友圈        |
| onAddToFavorites  | function | 用户点击右上角收藏                |

以下是较少用到的参数:

| 属性              | 类型     | 说明                                                                             |
| ----------------- | -------- | -------------------------------------------------------------------------------- |
| onPullDownRefresh | function | 监听用户下拉动作                                                                 |
| onReachBottom     | function | 页面上拉触底事件的处理函数                                                       |
| onPageScroll      | function | 页面滚动触发事件的处理函数                                                       |
| onResize          | function | 页面尺寸改变时触发，详见 响应显示区域变化                                        |
| onTabItemTap      | function | 当前是 tab 页时，点击 tab 时触发                                                 |
| 其他              | any      | 开发者可以添加任意的函数或数据到 Object 参数中，在页面的函数中用 `this` 可以访问 |

示例代码:

```js
// index.js
Page({
  data: {
    text: "This is page data.",
  },
  onLoad(options) {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onResize() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  },
  // Event handler.
  viewTap() {
    this.setData(
      {
        text: "Set some data for updating view.",
      },
      () => {
        // this is setData callback
      },
    );
  },
  customData: {
    hi: "MINA",
  },
});
```

### data

`data` 是页面第一次渲染使用的初始数据。

页面加载时，`data` 将会以 JSON 字符串的形式由逻辑层传至渲染层，因此 `data` 中的数据必须是可以转成 JSON 的类型 (即不能包含函数或 `Set`、`Symbol` 等)。

渲染层可以通过 WXML 对数据进行绑定。

示例代码:

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/2PeBsKmn6EZ9)

```xml
<view>{{text}}</view>
<view>{{array[0].msg}}</view>
```

```js
Page({
  data: {
    text: "init data",
    array: [{ msg: "1" }, { msg: "2" }],
  },
});
```

### 生命周期回调函数

生命周期的触发以及页面的路由方式详见 [路由](route.md)

#### onLoad(Object query)

页面加载时触发。一个页面只会调用一次，可以在 `onLoad` 的参数中获取打开当前页面路径中的参数。

参数:

| 名称  | 类型   | 说明                     |
| ----- | ------ | ------------------------ |
| query | Object | 打开当前页面路径中的参数 |

#### onShow()

页面显示/切入前台时触发。

#### onReady()

页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。

::: warning

对界面内容进行设置的 API 如 `wx.setNavigationBarTitle`，请在 `onReady` 之后进行。详见[生命周期](lifetime.md)

:::

#### onHide()

页面隐藏/切入后台时触发。如 `wx.navigateTo` 或底部 tab 切换到其他页面，小程序切入后台等。

#### onUnload()

页面卸载时触发。如 `wx.redirectTo` 或 `wx.navigateBack` 到其他页面时。

### 页面事件处理函数

#### onPageScroll(Object object)

监听用户滑动页面事件。

参数 Object object:

| 属性      | 类型   | 说明                                |
| --------- | ------ | ----------------------------------- |
| scrollTop | Number | 页面在垂直方向已滚动的距离(单位 px) |

::: warning

请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。注意: 请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。

:::

#### onAddToFavorites(Object object)

> 本接口为 Beta 版本，安卓 7.0.15 版本起支持，暂只在安卓平台支持

监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。

参数 Object object:

| 参数       | 类型   | 说明                                                         |
| ---------- | ------ | ------------------------------------------------------------ |
| webviewUrl | String | 页面中包含 `<web-view>` 组件时，返回当前 `<web-view>` 的 url |

此事件处理函数需要 return 一个 Object，用于自定义收藏内容:

| 字段     | 说明                             | 默认值             |
| -------- | -------------------------------- | ------------------ |
| title    | 自定义标题                       | 页面标题或账号名称 |
| imageUrl | 自定义图片，显示图片长宽比为 1:1 | 页面截图           |
| query    | 自定义 query 字段                | 当前页面的 query   |

示例代码:

```js
Page({
  onAddToFavorites(res) {
    // webview 页面返回 webviewUrl
    console.log("WebviewUrl: ", res.webviewUrl);
    return {
      title: "自定义标题",
      imageUrl: "http://demo.png",
      query: "name=xxx&age=xxx",
    };
  },
});
```

#### onShareAppMessage(Object object)

监听用户点击页面内转发按钮(`<button>` 组件 `open-type="share"`)或右上角菜单“转发”按钮的行为，并自定义转发内容。

::: warning

只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮

:::

参数 Object object:

| 参数       | 类型   | 说明                                                                             | 最低版本 |
| ---------- | ------ | -------------------------------------------------------------------------------- | -------- |
| from       | String | 转发事件来源。<br />button: 页面内转发按钮； <br /> menu: 右上角转发菜单         | 1.2.4    |
| target     | Object | 如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 `undefined` | 1.2.4    |
| webViewUrl | String | 页面中包含 `<web-view>` 组件时，返回当前 `<web-view>` 的 `url`                   | 1.6.4    |

事件处理函数需要 return 一个 `Object`,用于自定义转发内容，返回内容如下:

#### 自定义转发内容

| 字段     | 说明                                                                                                              | 默认值                                        | 最低版本 |
| -------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------- |
| title    | 转发标题                                                                                                          | 当前小程序名称                                |          |
| path     | 转发路径                                                                                                          | 当前页面 `path` ，必须是以 `/` 开头的完整路径 |          |
| imageUrl | 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。<br />支持 PNG 及 JPG。显示图片长宽比是 5:4。 | 使用默认截图                                  | 1.5.0    |

示例代码:

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/mffqUKmr6fZU)

```js
Page({
  onShareAppMessage(res) {
    if (res.from === "button")
      // 来自页面内转发按钮
      console.log(res.target);

    return {
      title: "自定义转发标题",
      path: "/page/user?id=123",
    };
  },
});
```

#### onShareTimeline()

> 基础库 2.11.3 开始支持
>
> 本接口为 Beta 版本，暂只在 Android 平台支持，详见分享到朋友圈 (Beta)

监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。

::: warning

只有定义了此事件处理函数，右上角菜单才会显示“分享到朋友圈”按钮。

:::

##### 自定义转发内容

事件处理函数返回一个 Object，用于自定义分享内容，不支持自定义页面路径，返回内容如下:

| 字段     | 说明                                                                                | 默认值                 |
| -------- | ----------------------------------------------------------------------------------- | ---------------------- |
| title    | 自定义标题，即朋友圈列表页上显示的标题                                              | 当前小程序名称         |
| query    | 自定义页面路径中携带的参数，如 path?a=1&b=2 的 “?” 后面部分                         | 当前页面路径携带的参数 |
| imageUrl | 自定义图片路径，可以是本地文件或者网络图片。支持 PNG 及 JPG，显示图片长宽比是 1:1。 | 默认使用小程序 Logo    |

#### onPullDownRefresh()

监听用户下拉刷新事件。

::: tip

需要在 app.json 的 window 选项中或页面配置中开启 `enablePullDownRefresh。`

可以通过 [`wx.startPullDownRefresh`](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html) 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

当处理完数据刷新后，[`wx.stopPullDownRefresh`](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html) 可以停止当前页面的下拉刷新。

:::

#### onReachBottom()

监听用户上拉触底事件。

::: tip

可以在 app.json 的 window 选项中或页面配置中设置触发距离 `onReachBottomDistance`。

在触发距离内滑动期间，本事件只会被触发一次。

:::

#### onResize(Object object)

> 基础库 2.4.0 开始支持

小程序屏幕旋转时触发。

#### onTabItemTap(Object object)

点击 tab 时触发

Object 参数说明:

| 参数     | 类型   | 说明                             | 最低版本 |
| -------- | ------ | -------------------------------- | -------- |
| index    | String | 被点击 tabItem 的序号，从 0 开始 | 1.9.0    |
| pagePath | String | 被点击 tabItem 的页面路径        | 1.9.0    |
| text     | String | 被点击 tabItem 的按钮文字        | 1.9.0    |

示例代码:

```js
Page({
  onTabItemTap(item) {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  },
});
```

### 组件事件处理函数

`Page` 中还可以定义组件事件处理函数。在渲染层的组件中加入事件绑定，当事件被触发时，就会执行 `Page` 中定义的事件处理函数。

示例代码:

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/vUf6fKmX64Zn)

```xml
<view bindtap="viewTap"> click me </view>
```

```js
Page({
  viewTap() {
    console.log("view tap");
  },
});
```

### Page.route

到当前页面的路径，类型为 `String`。

```js
Page({
  onShow() {
    console.log(this.route);
  }
});
Page.prototype.setData(Object data, Function callback);
```

`setData` 函数用于将数据从逻辑层发送到视图层(异步)，同时改变对应的 `this.data` 的值(同步)。

参数说明

| 字段     | 类型     | 必填 | 描述                                       | 最低版本 |
| -------- | -------- | ---- | ------------------------------------------ | -------- |
| data     | Object   | 是   | 这次要改变的数据                           |          |
| callback | Function | 否   | setData 引起的界面更新渲染完毕后的回调函数 | 1.5.0    |

`Object` 以 `key: value` 的形式表示，将 `this.data` 中的 `key` 对应的值改变成 `value。`

其中 `key` 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如 `array[2].message`，`a.b.c.d`，并且不需要在 `this.data` 中预先定义。

::: warning

1. 直接修改 `this.data` 而不调用 `this.setData` 是无法改变页面的状态的，还会造成数据不一致。
1. 仅支持设置可 JSON 化的数据。
1. 单次设置的数据不能超过 1024kB，请尽量避免一次设置过多的数据。
1. 请不要把 `data` 中任何一项的 `value` 设为 `undefined` ，否则这一项将不被设置并可能遗留一些潜在问题。

:::

示例代码:

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/HofnzKmb6fZe)

```xml
<!--index.wxml-->
<view>{{text}}</view>
<button bindtap="changeText"> Change normal data </button>
<view>{{num}}</view>
<button bindtap="changeNum"> Change normal num </button>
<view>{{array[0].text}}</view>
<button bindtap="changeItemInArray"> Change Array data </button>
<view>{{object.text}}</view>
<button bindtap="changeItemInObject"> Change Object data </button>
<view>{{newField.text}}</view>
<button bindtap="addNewField"> Add new data </button>
```

```js
// index.js
Page({
  data: {
    text: "init data",
    num: 0,
    array: [{ text: "init data" }],
    object: {
      text: "init data",
    },
  },
  changeText() {
    // this.data.text = 'changed data' // 不要直接修改 this.data
    // 应该使用 setData
    this.setData({
      text: "changed data",
    });
  },
  changeNum() {
    // 或者，可以修改 this.data 之后马上用 setData 设置一下修改了的字段
    this.data.num = 1;
    this.setData({
      num: this.data.num,
    });
  },
  changeItemInArray() {
    // 对于对象或数组字段，可以直接修改一个其下的子字段，这样做通常比修改整个对象或数组更好
    this.setData({
      "array[0].text": "changed data",
    });
  },
  changeItemInObject() {
    this.setData({
      "object.text": "changed data",
    });
  },
  addNewField() {
    this.setData({
      "newField.text": "new data",
    });
  },
});
```

## PageObject[] getCurrentPages()

获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。

::: warning

- 不要尝试修改页面栈，会导致路由以及页面状态错误。
- 不要在 `App.onLaunch` 的时候调用 `getCurrentPages()`，此时 `page` 还没有生成。

:::
