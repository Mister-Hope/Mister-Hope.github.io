---
date: 2021-00-19
title: 数据绑定
icon: rank
category: 小程序
---

WXML 中的动态数据均来自对应 `Page` 的 `data`。

<!-- more -->

## 简单绑定

数据绑定使用 Mustache 语法(双大括号)将变量包起来，可以作用于:

### 内容

```xml
<view> {{ message }} </view>
```

```js
Page({
  data: {
    message: "Hello MINA!",
  },
});
```

### 组件属性(需要在双引号之内)

```xml
<view id="item-{{id}}"> </view>
```

```js
Page({
  data: {
    id: 0,
  },
});
```

### 控制属性(需要在双引号之内)

```xml
<view wx:if="{{condition}}"> </view>
```

```js
Page({
  data: {
    condition: true,
  },
});
```

### 关键字(需要在双引号之内)

- `true`: `boolean` 类型的 `true`，代表真值。

- `false`: `boolean` 类型的 `false`，代表假值。

```js
<checkbox checked="{{false}}"> </checkbox>
```

::: caution

不要直接写 `checked="false"`，其计算结果是一个字符串，转成 `boolean` 类型后代表真值。

:::

## 运算

::: v-pre

可以在 `{{ }}` 内进行简单的运算，支持的有如下几种方式:

:::

### 三元运算

```xml
<view hidden="{{flag ? true : false}}"> Hidden </view>
```

### 算数运算

```xml
<view> {{a + b}} + {{c}} + d </view>
```

```js
Page({
  data: {
    a: 1,
    b: 2,
    c: 3,
  },
});
```

`view` 中的内容为 `3 + 3 + d`。

### 逻辑判断

```xml
<view wx:if="{{length > 5}}"> </view>
```

### 字符串运算

```xml
<view>{{"hello" + name}}</view>
```

```js
Page({
  data: {
    name: "MINA",
  },
});
```

### 数据路径运算

```xml
<view>{{object.key}} {{array[0]}}</view>
```

```js
Page({
  data: {
    object: {
      key: "Hello ",
    },
    array: ["MINA"],
  },
});
```

## 组合

也可以在 Mustache 内直接进行组合，构成新的对象或者数组。

### 数组

```xml
<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
```

```js
Page({
  data: {
    zero: 0,
  },
});
```

最终组合成数组 `[0, 1, 2, 3, 4]`。

### 对象

```xml
<template is="objectCombine" data="{{for: a, bar: b}}"></template>
```

```js
Page({
  data: {
    a: 1,
    b: 2,
  },
});
```

最终组合成的对象是 `{for: 1, bar: 2}`

也可以用扩展运算符 `...` 来将一个对象展开

```xml
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>
```

```js
Page({
  data: {
    obj1: {
      a: 1,
      b: 2,
    },
    obj2: {
      c: 3,
      d: 4,
    },
  },
});
```

最终组合成的对象是 `{a: 1, b: 2, c: 3, d: 4, e: 5}`。

如果对象的 `key` 和 `value` 相同，也可以间接地表达。

```xml
<template is="objectCombine" data="{{foo, bar}}"></template>
```

```js
Page({
  data: {
    foo: "my-foo",
    bar: "my-bar",
  },
});
```

最终组合成的对象是 `{foo: 'my-foo', bar:'my-bar'}`。

::: tip

上述方式可以随意组合，但是如有存在变量名相同的情况，后边的会覆盖前面，如:

```xml
<template is="objectCombine" data="{{...obj1, ...obj2, a, c: 6}}"></template>
```

```js
Page({
  data: {
    obj1: {
      a: 1,
      b: 2,
    },
    obj2: {
      b: 3,
      c: 4,
    },
    a: 5,
  },
});
```

最终组合成的对象是 `{a: 5, b: 3, c: 6}`。

:::

::: warning

花括号和引号之间如果有空格，将最终被解析成为字符串

```xml
<view wx:for="{{[1,2,3]}} ">
  {{item}}
</view>
```

等同于

```xml
<view wx:for="{{[1,2,3] + ' '}}">
  {{item}}
</view>
```

:::
