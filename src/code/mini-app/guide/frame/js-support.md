---
date: 2021-00-19
title: JavaScript 支持情况
icon: javascript
category: 小程序
---

## 运行限制

基于安全考虑，小程序中不支持动态执行 JS 代码，即:

- 不支持使用 `eval` 执行 JS 代码
- 不支持使用 `new Function` 创建函数

## 客户端 ES6 API 支持情况

微信小程序已经支持了绝大部分的 ES6 API，已支持的 API 如下(部分 API 依赖系统版本):

| String               | iOS10+ | Android |
| -------------------- | ------ | ------- |
| codePointAt          |        |         |
| normalize            |        |         |
| includes             |        |         |
| startsWith           |        |         |
| endsWith             |        |         |
| repeat               |        |         |
| String.fromCodePoint |        |         |

| Array      | iOS10+ | Android |
| ---------- | ------ | ------- |
| copyWithin |        |         |
| find       |        |         |
| findIndex  |        |         |
| fill       |        |         |
| entries    |        |         |
| keys       |        |         |
| values     |        | ✘       |
| includes   |        |         |
| Array.from |        |         |
| Array.of   |        |         |

| Number        | iOS10+ | Android |
| ------------- | ------ | ------- |
| isFinite      |        |         |
| isNaN         |        |         |
| parseInt      |        |         |
| parseFloat    |        |         |
| isInteger     |        |         |
| EPSILON       |        |         |
| isSafeInteger |        |         |
| Math          | iOS10+ | Android |
| trunc         |        |         |
| sign          |        |         |
| cbrt          |        |         |
| clz32         |        |         |
| imul          |        |         |
| fround        |        |         |
| hypot         |        |         |
| expm1         |        |         |
| log1p         |        |         |
| log10         |        |         |
| log2          |        |         |
| sinh          |        |         |
| cosh          |        |         |
| tanh          |        |         |
| asinh         |        |         |
| acosh         |        |         |
| atanh         |        |         |

| Object                   | iOS10+ | Android |
| ------------------------ | ------ | ------- |
| is                       |        |         |
| assign                   |        |         |
| getOwnPropertyDescriptor |        |         |
| keys                     |        |         |
| getOwnPropertyNames      |        |         |
| getOwnPropertySymbols    |        |         |

| Other   | iOS10+ | Android |
| ------- | ------ | ------- |
| Symbol  |        |         |
| Set     |        |         |
| Map     |        |         |
| Proxy   |        | ✘       |
| Reflect |        |         |
| Promise |        |         |
