---
title: 遍历
icon: refresh
date: 2019-09-19
category: JavaScript
---

本章对 JavaScript 的可遍历数据结构及如何遍历做一些介绍。

<!-- more -->

## iterable

遍历 Array 可以采用下标循环，遍历 Map 和 Set 就无法使用下标。为了统一集合类型，ES6 标准引入了新的 `iterable` 类型，Array、Map 和 Set 都属于 `iterable` 类型。

具有 `iterable` 类型的集合可以通过新的 `for ... of` 循环来遍历。

`for ... of` 循环是 ES6 引入的新的语法，用 `for ... of` 循环遍历集合，用法如下:

```js
const a = ["A", "B", "C"];
const s = new Set(["A", "B", "C"]);
const m = new Map([
  [1, "x"],
  [2, "y"],
  [3, "z"],
]);

for (let x of a) {
  // 遍历Array
  console.log(x);
}
for (let x of s) {
  // 遍历Set
  console.log(x);
}
for (let x of m) {
  // 遍历Map
  console.log(x[0] + "=" + x[1]);
}
```

您可能会有疑问，`for ... of` 循环和 `for ... in` 循环有何区别?

`for ... in` 循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个 Array 数组实际上也是一个对象，它的每个元素的索引被视为一个属性。

当我们手动给 Array 对象添加了额外的属性后，`for ... in` 循环将带来意想不到的意外效果:

```js
const a = ["A", "B", "C"];

a.name = "Hello";
for (let x in a) {
  console.log(x); // '0', '1', '2', 'name'
}
```

::: tip

`for ... in` 循环将把 name 包括在内，但 Array 的 `length` 属性却不包括在内。

:::

`for ... of` 循环则完全修复了这些问题，它只循环集合本身的元素:

```js
const a = ["A", "B", "C"];

a.name = "Hello";
for (let x of a) {
  console.log(x); // 'A', 'B', 'C'
}
```

这就是为什么要引入新的 `for ... of` 循环。

然而，更好的方式是直接使用 `iterable` 内置的 `forEach` 方法，它接收一个函数，每次迭代就自动回调该函数。以 Array 为例:

```js
"use strict";
const a = ["A", "B", "C"];

a.forEach(function (element, index, array) {
  // element: 指向当前元素的值
  // index: 指向当前索引
  // array: 指向Array对象本身
  console.log(element + ", index = " + index);
});
```

::: warning

`forEach()` 方法是 ES5.1 标准引入的，您需要测试浏览器是否支持 (IE says No)。

:::

Set 与 Array 类似，但 Set 没有索引，因此回调函数的前两个参数都是元素本身:

```js
const s = new Set(["A", "B", "C"]);

s.forEach(function (element, sameElement, set) {
  console.log(element);
});
```

Map 的回调函数参数依次为 `value`、`key` 和 `map` 本身:

```js
const m = new Map([
  [1, "x"],
  [2, "y"],
  [3, "z"],
]);

m.forEach(function (value, key, map) {
  console.log(value);
});
```

如果对某些参数不感兴趣，由于 JavaScript 的函数调用不要求参数必须一致，因此可以忽略它们。例如，只需要获得 Array 的 `element`:

```js
const a = ["A", "B", "C"];

a.forEach(function (element) {
  console.log(element);
});
```
