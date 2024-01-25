---
date: 2020-10-09
title: 注册
icon: config
category: 小程序
---

## 注册小程序 <Badge text="重要" type="error" />

每个小程序都需要在 `app.js` 中调用 `App` 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。

详细的参数含义和使用请参考 [App 参考文档](app.md)。

```js
// app.js
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

整个小程序只有一个 App 实例，是全部页面共享的。

通过 `getApp` 方法获取到全局唯一的 App 示例，获取 App 上的数据或调用注册在 App 上的函数。

```js
// xxx.js
const appInstance = getApp();
console.log(appInstance.globalData); // I am global data
```

## 注册页面

对于小程序中的每个页面，都需要在页面对应的 js 文件中进行注册，指定页面的初始数据、生命周期回调、事件处理函数等。

### 使用 Page 构造器注册页面 <Badge text="重要" type="error" />

简单的页面可以使用 `Page()` 进行构造。

代码示例:

```js
//index.js
Page({
  data: {
    text: "This is page data.",
  },
  onLoad(options) {
    // 页面创建时执行
  },
  onShow() {
    // 页面出现在前台时执行
  },
  onReady() {
    // 页面首次渲染完毕时执行
  },
  onHide() {
    // 页面从前台变为后台时执行
  },
  onUnload() {
    // 页面销毁时执行
  },
  onPullDownRefresh() {
    // 触发下拉刷新时执行
  },
  onReachBottom() {
    // 页面触底时执行
  },
  onShareAppMessage() {
    // 页面被用户分享时执行
  },
  onPageScroll() {
    // 页面滚动时执行
  },
  onResize() {
    // 页面尺寸变化时执行
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  },
  // 事件响应函数
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
  // 自由数据
  customData: {
    hi: "MINA",
  },
});
```

详细的参数含义和使用请参考 [Page 参考文档](page.md)。

### 使用 Component 构造器构造页面 <Badge text="初学无需了解" type="grey" />

`Page` 构造器适用于简单的页面。但对于复杂的页面， `Page` 构造器可能并不好用。

此时，可以使用 `Component` 构造器来构造页面。`Component` 构造器的主要区别是: 方法需要放在 `methods: { }` 里面。

代码示例:

```js
Component({
  data: {
    text: "This is page data.",
  },
  methods: {
    onLoad(options) {
      // 页面创建时执行
    },
    onPullDownRefresh() {
      // 下拉刷新时执行
    },
    // 事件响应函数
    viewTap() {
      // ...
    },
  },
});
```

这种创建方式非常类似于 自定义组件 ，可以像自定义组件一样使用 `behaviors` 等高级特性。

具体细节请阅读 `Component` 构造器 章节。
