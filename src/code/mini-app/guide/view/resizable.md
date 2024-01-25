---
date: 2021-00-19
title: 响应显示区域变化
icon: view
category: 小程序
---

## 显示区域尺寸

显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。

### 在手机上启用屏幕旋转支持

从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 `"pageOrientation": "auto"` ，或在页面 json 文件中配置 `"pageOrientation": "auto"`。

::: details 代码示例

以下是在单个页面 json 文件中启用屏幕旋转的示例。

```json
{
  "pageOrientation": "auto"
}
```

如果页面添加了上述声明，则在屏幕旋转时，这个页面将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。

:::

从小程序基础库版本 2.5.0 开始， `pageOrientation` 还可以被设置为 `landscape` ，表示固定为横屏显示。

### 在 iPad 上启用屏幕旋转支持

从小程序基础库版本 2.3.0 开始，在 iPad 上运行的小程序可以支持屏幕旋转。使小程序支持 iPad 屏幕旋转的方法是: 在 app.json 中添加 `"resizable": true` 。

::: details 代码示例

```json
{
  "resizable": true
}
```

如果小程序添加了上述声明，则在屏幕旋转时，小程序将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。

:::

::: warning

在 iPad 上不能单独配置某个页面是否支持屏幕旋转。

:::

## Media Query

有时，对于不同尺寸的显示区域，页面的布局会有所差异。此时可以使用 media query 来解决大多数问题。

::: details 代码示例

```css
.my-class {
  width: 40px;
}

@media (min-width: 480px) {
  /*仅在 480px 或更宽的屏幕上生效的样式规则*/
  .my-class {
    width: 200px;
  }
}
```

:::

在 WXML 中，可以使用 [match-media](https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html) 组件来根据 media query 匹配状态展示、隐藏节点。

此外，可以在页面或者自定义组件 JS 中使用 `this.createMediaQueryObserver()` 方法来创建一个 [`MediaQueryObserver`](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/MediaQueryObserver.html) 对象，用于监听指定的 media query 的匹配状态。

> [在开发者工具中预览效果](https://developers.weixin.qq.com/s/TtFaFjmb7aiy)

## 屏幕旋转事件

有时，仅仅使用 media query 无法控制一些精细的布局变化。此时可以使用 js 作为辅助。

- 在 js 中读取页面的显示区域尺寸，可以使用 [`selectorQuery.selectViewport`](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html) 。

- 页面尺寸发生改变的事件，可以使用页面的 `onResize` 来监听。

- 对于自定义组件，可以使用 `resize` 生命周期来监听。回调函数中将返回显示区域的尺寸信息。(从基础库版本 2.4.0 开始支持。)

::: details 代码示例

```js
Page({
  onResize(res) {
    res.size.windowWidth; // 新的显示区域宽度
    res.size.windowHeight; // 新的显示区域高度
  },
});
```

```js
Component({
  pageLifetimes: {
    resize(res) {
      res.size.windowWidth; // 新的显示区域宽度
      res.size.windowHeight; // 新的显示区域高度
    },
  },
});
```

:::

此外，还可以使用 [`wx.onWindowResize`](https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html) 来监听(但这不是推荐的方式)。
