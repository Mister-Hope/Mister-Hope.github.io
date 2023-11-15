---
date: 2021-00-19
title: 小程序的运行环境
icon: leaf
category: 小程序
---

微信小程序运行在多种平台上: iOS(iPhone/iPad)微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。

各平台脚本执行环境以及用于渲染非原生组件的环境是各不相同的:

- 在 iOS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，环境有 iOS 12、iOS 13 等；

- 在 Android 上，小程序逻辑层的 JavaScript 代码运行在 V8 中，视图层是由自研 XWeb 引擎基于 Mobile Chrome 内核来渲染的；

- 在 开发工具上，小程序逻辑层的 JavaScript 代码是运行在 NW.js 中，视图层是由 Chromium Webview 来渲染的。

- 在 PC 上，小程序逻辑层 JavaScript 和视图层 JavaScript 都是用 Chrome 内核

- 在 Mac 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，与 iOS 一致

## 平台差异

尽管各运行环境是十分相似的，但是还是有些许区别:

- JavaScript 语法和 API 支持不一致: 语法上开发者可以通过开启 ES6 转 ES5 的功能来规避 ([详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html#es6-%E8%BD%AC-es5))；此外，小程序基础库内置了必要的 Polyfill，来弥补 API 的差异 ([详情](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/js-support.html))。

- WXSS 渲染表现不一致: 尽管可以通过开启 [样式补全](https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html#%E6%A0%B7%E5%BC%8F%E8%A1%A5%E5%85%A8) 来规避大部分的问题，还是建议开发者需要在 iOS 和 Android 上分别检查小程序的真实表现。

- 开发者工具仅供调试使用，最终的表现以客户端为准。
