---
title: Map 和 Set
icon: map
date: 2019-09-19
category: JavaScript
---

ES6 新引入的 Map 与 Set 是对数组和对象欠缺功能的一种补充。

<!-- more -->

## Map 的引入

JavaScript 的默认对象表示方式 `{}` 可以视为其他语言中的 `Map` 或 `Dictionary` 的数据结构，即一组键值对。

但是 JavaScript 的对象有个小问题，就是键必须是字符串。但实际上 Number 或者其他数据类型作为键也是非常合理的。

为了解决这个问题，最新的 ES6 规范引入了新的数据类型 `Map`。

## Map

`Map` 是一组键值对的结构，具有极快的查找速度。

举个例子，假设要根据同学的名字查找对应的成绩，如果用 Array 实现，需要两个 Array:

```js
const names = ["Michael", "Bob", "Tracy"];
const scores = [95, 75, 85];
```

给定一个名字，要查找对应的成绩，就先要在 `names` 中找到对应的位置，再从 `scores` 取出对应的成绩，Array 越长，耗时越长。

如果用 Map 实现，只需要一个 `“名字”-“成绩”` 的对照表，直接根据名字查找成绩，无论这个表有多大，查找速度都不会变慢。用 JavaScript 写一个 `Map` 如下:

```js
const m = new Map([
  ["Michael", 95],
  ["Bob", 75],
  ["Tracy", 85],
]);

m.get("Michael"); // 95
```

初始化 `Map` 需要一个二维数组，或者直接初始化一个空 `Map`。`Map` 具有以下方法:

```js
const m = new Map(); // 空Map

m.set("Adam", 67); // 添加新的key-value
m.set("Bob", 59);
m.has("Adam"); // 是否存在key 'Adam': true
m.get("Adam"); // 67
m.delete("Adam"); // 删除key 'Adam'
m.get("Adam"); // undefined
```

由于一个 `key` 只能对应一个 `value` ，所以，多次对一个 `key` 放入 `value`，后面的值会把前面的值冲掉:

```js
const m = new Map();

m.set("Adam", 67);
m.set("Adam", 88);
m.get("Adam"); // 88
```

## Set

`Set` 和 `Map` 类似，也是一组 `key` 的集合，但不存储 `value`。由于 `key` 不能重复，所以，在 `Set` 中，没有重复的 `key`。

要创建一个 `Set`，需要提供一个 `Array` 作为输入，或者直接创建一个空 `Set`:

```js
const s1 = new Set(); // 空Set
const s2 = new Set([1, 2, 3]); // 含1, 2, 3
```

重复元素在 `Set` 中自动被过滤:

```js
const s = new Set([1, 2, 3, 3, "3"]);

s; // Set {1, 2, 3, "3"}
```

注意数字 `3` 和字符串 `'3'` 是不同的元素。

通过 `add(key)` 方法可以添加元素到 `Set` 中，可以重复添加，但不会有效果:

```js
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
```

通过 `delete(key)` 方法可以删除元素:

```js
const s = new Set([1, 2, 3]);

s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}
```

## 小结

Map 和 Set 是 ES6 标准新增的数据类型，请根据浏览器的支持情况决定是否要使用。
