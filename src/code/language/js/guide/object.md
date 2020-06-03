---
title: 对象
icon: object
time: 2019-09-17
category: JavaScript
tags:
  - 快速上手
---

JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。

JavaScript 用一个 `{...}` 表示一个对象，键值对以 `xxx: xxx` 形式申明，用 `,` 隔开。

<!-- more -->

JavaScript 的对象可用于描述现实世界中的某个对象。例如，为了描述 “小明” 这个淘气的小朋友，我们可以用若干键值对来描述他:

```js
const xiaoming = {
  name: "小明",
  birth: 1990,
  school: "No.1 Middle School",
  height: 1.7,
  weight: 65,
  score: null,
};
```

::: warning
最后一个键值对不需要在末尾加 `,`，如果加了，有的浏览器(如低版本的 IE)将报错。
:::

上述对象申明了一个 `name` 属性，值是 `'小明'`，`birth` 属性，值是 `1990`，以及其他一些属性。最后，把这个对象赋值给变量 `xiaoming` 后，就可以通过变量 `xiaoming` 来获取小明的属性了:

```js
xiaoming.name; // '小明'
xiaoming.birth; // 1990
```

访问属性是通过 `.` 操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用 `''` 括起来:

```js
const xiaohong = {
  name: "小红",
  "middle-school": "No.1 Middle School",
};
```

`xiaohong` 的属性名 `middle-school` 不是一个有效的变量，就需要用 `''` 括起来。访问这个属性也无法使用 `.` 操作符，必须用 `['xxx']` 来访问:

```js
xiaohong["middle-school"]; // 'No.1 Middle School'
xiaohong["name"]; // '小红'
xiaohng.name; // '小红'
```

也可以用 `xiaohong['name']` 来访问 `xiaohong` 的 `name` 属性，不过 `xiaohong.name` 的写法更简洁。我们在编写 JavaScript 代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过 `object.prop` 的形式访问一个属性了。

实际上 JavaScript 对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。

如果访问一个不存在的属性会返回什么呢？JavaScript 规定，访问不存在的属性不报错，而是返回 `undefined`:

```js
"use strict";

const xiaoming = {
  name: "小明",
};

console.log(xiaoming.name);
console.log(xiaoming.age); // undefined
```

由于 JavaScript 的对象是动态类型，您可以自由地给一个对象添加或删除属性:

```js
const xiaoming = {
  name: "小明",
};

xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个 age 属性
xiaoming.age; // 18
delete xiaoming.age; // 删除 age 属性
xiaoming.age; // undefined
delete xiaoming["name"]; // 删除 name 属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错
```

如果我们要检测 `xiaoming` 是否拥有某一属性，可以用 `in` 操作符:

```js
const xiaoming = {
  name: "小明",
  birth: 1990,
  school: "No.1 Middle School",
  height: 1.7,
  weight: 65,
  score: null,
};

"name" in xiaoming; // true
"grade" in xiaoming; // false
```

不过要小心，如果 `in` 判断一个属性存在，这个属性不一定是 `xiaoming` 的，它可能是 `xiaoming` 继承得到的:

```js
"toString" in xiaoming; // true
```

因为 `toString` 定义在 object 对象中，而所有对象最终都会在原型链上指向 object，所以 `xiaoming` 也拥有 `toString` 属性。

要判断一个属性是否是 `xiaoming` 自身拥有的，而不是继承得到的，可以用 `hasOwnProperty()` 方法:

```js
const xiaoming = {
  name: "小明",
};

xiaoming.hasOwnProperty("name"); // true
xiaoming.hasOwnProperty("toString"); // false
```

## 更多介绍

更系统的介绍详见 [数据结构 / 对象](../types/object.md)
