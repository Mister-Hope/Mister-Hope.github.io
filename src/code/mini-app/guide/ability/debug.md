---
date: 2020-10-09
title: 调试
icon: debug
category: 小程序
---

## vConsole <Badge text="重要" type="error" />

在真机上，如果想要查看 `console` API 输出的日志内容和额外的调试信息，需要在点击屏幕右上角的按钮打开的菜单里选择「打开调试」。此时小程序/小游戏会退出，重新打开后会右下角会出现一个 `vConsole` 按钮。点击 `vConsole` 按钮可以打开日志面板。

![Vconsole](https://res.wx.qq.com/wxdoc/dist/assets/img/vConsole-app.19b93c1e.jpg#width:350px)

## vConsole 使用说明

由于实现机制的限制，开发者调用 `console` API 打印的日志内容，是转换成 JSON 字符串后传输给 `vConsole` 的，导致 `vConsole` 中展示的内容会有一些限制:

- 2.3.2 及以上版本，支持打印循环引用对象。循环引用的对象属性会显示引用路径，`@` 表示对象本身。

  ```js
  const circular = { x: {}, c: {} };
  circular.x = [{ promise: Promise.resolve() }];
  circular.a = circular;
  circular.c.x0 = circular.x[0];

  console.log(circular);
  // "{a: '<Circular: @>', c: {x0: '<Circular: @.x[0]>'}, x: [{promise: '<Promise>'}]}"
  ```

- 2.3.1 及以上版本，支持展示所有类型的数据。基础库会对日志内容进行一次转换，经过转换的内容会使用 `<>` 包裹。如:

  - `<Function: func>`
  - `<Undefined>`
  - `<Infinity>`
  - `<Map: size=0>`
  - `<ArrayBuffer: byteLength=10>`
  - ...

::: warning

尽量避免在非调试情景下打印结构过于复杂或内容过长的日志内容，因为这可能会带来额外耗时。

:::

## Source Map

> 目前只在 iOS 6.7.2 及以上版本支持

小程序/小游戏在打包时，会将所有 js 代码打包成一个文件，为了便于开发者在手机上调试时定位错误位置，小程序/小游戏提供了 Source Map 支持。

在开发者工具中开启 ES6 转 ES5、代码压缩时，会生成 Source Map 的 `.map` 文件。开发版小程序中，基础库会使用代码包中的 `.map` 文件，对 `vConsole` 中展示的错误信息堆栈进行重新映射(只对开发者代码文件进行)。

![Sourcemap](https://res.wx.qq.com/wxdoc/dist/assets/img/sourceMap.17b75816.jpg)

如果使用外部的编译脚本对源文件进行处理，只需将对应生成的 Source Map 文件放置在源文件的相同目录下

如:

```md
pages/index.js

pages/index.js.map

app.js

app.js.map
```

开发者工具会读取、解析 Source Map 文件，并进行将其上传

后续可以在小程序后台的运营中心可以利用上传的 Source Map 文件进行错误分析

- Source Map 文件不计入代码包大小计算。
- 开发版代码包中由于包含了 .map 文件，实际代码包大小会比体验版和正式版大。
