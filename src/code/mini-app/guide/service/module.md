---
date: 2020-10-09
title: 模块化
icon: module
category: 小程序
---

此部分是高效复用小程序代码的方式。<Badge text="重要" type="error" />

模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。

模块只有通过 `module.exports` 或者 `exports` 才能对外暴露接口。

<!-- more -->

::: warning

- `exports` 是 `module.exports` 的一个引用，因此在模块里边随意更改 `exports` 的指向会造成未知的错误。所以更推荐开发者采用 `module.exports` 来暴露模块接口，除非您已经清晰知道这两者的关系。
- 小程序目前不支持直接引入 `node_modules` , 开发者需要使用到 `node_modules` 时候建议拷贝出相关的代码到小程序的目录中，或者使用小程序支持的 npm 功能。

:::

```js
// common.js
const sayHello = (name) => {
  console.log(`Hello ${name} !`);
};

const sayGoodbye = (name) => {
  console.log(`Goodbye ${name} !`);
};

module.exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;
```

​ 在需要使用这些模块的文件中，使用 `require` 将公共代码引入

```js
const common = require("common.js");

Page({
  helloMINA() {
    common.sayHello("MINA");
  },
  goodbyeMINA() {
    common.sayGoodbye("MINA");
  },
});
```

## 文件作用域 <Badge text="务必理解" type="error" />

::: warning

在 JavaScript 文件中声明的变量和函数只在该文件中有效；不同的文件中可以声明相同名字的变量和函数，不会互相影响。

:::

通过全局函数 `getApp` 可以获取全局的应用实例，如果需要全局的数据可以在 `App()` 中设置，如:

```js
// app.js
App({
  globalData: 1,
});
// a.js
// The localValue can only be used in file a.js.
let localValue = "a";
// Get the app instance.
const app = getApp();
// Get the global data and change it.
app.globalData++;
// b.js
// You can redefine localValue in file b.js, without interference with the localValue in a.js.
let localValue = "b";
// If a.js it run before b.js, now the globalData shoule be 2.
console.log(getApp().globalData);
```

## API

### Object module

当前模块对象

属性

| 属性    | 类型   | 说明                                                  |
| ------- | ------ | ----------------------------------------------------- |
| exports | Object | 模块向外暴露的对象，使用 require 引用该模块时可以获取 |

### Object exports

module.exports 的引用

### any require(string path)

引入模块。返回模块通过 `module.exports` 或 `exports` 暴露的接口。

参数

| 名称 | 类型   | 说明                                                                                     |
| ---- | ------ | ---------------------------------------------------------------------------------------- |
| path | string | 需要引入模块文件相对于当前文件的相对路径，或 npm 模块名，或 npm 模块路径。不支持绝对路径 |

示例代码

```js
// common.js
const sayHello = (name) => {
  console.log(`Hello ${name} !`);
};

const sayGoodbye = (name) => {
  console.log(`Goodbye ${name} !`);
};

module.exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;
```

```js
const common = require("common.js");

Page({
  helloMINA() {
    common.sayHello("MINA");
  },
  goodbyeMINA() {
    common.sayGoodbye("MINA");
  },
});
```
