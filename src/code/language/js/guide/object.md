---
title: 对象
icon: object
date: 2019-09-17
category: JavaScript
tag:
  - 快速上手
---

JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。

JavaScript 用一个 `{...}` 表示一个对象，键值对以 `xxx: xxx` 形式申明，用 `,` 隔开。

<!-- more -->

JavaScript 的对象可用于描述现实世界中的某个对象。例如，为了描述 Mr.Hope，我们可以用若干键值对来描述他:

```js
const mrhope = {
  name: "Mr.Hope",
  isHandsome: true,
  birth: 1998,
  school: "No.1 Middle School",
  height: 1.76,
  weight: 50,
  car: null,
};
```

::: warning

最后一个键值对不需要在末尾加 `,`，如果加了，有的浏览器(如低版本的 IE)将报错。

:::

上述对象申明了一个 `name` 属性，值是 `'Mr.Hope'`，`birth` 属性，值是 `1998`，以及其他一些属性。最后，把这个对象赋值给变量 `mrhope` 后，就可以通过变量 `mrhope` 来获取 Mr.Hope 的属性了:

```js
mrhope.name; // 'Mr.Hope'
mrhope.birth; // 1998
```

访问属性是通过 `.` 操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用 `''` 括起来:

```js
const mrshope = {
  name: "Mrs.Hope",
  "middle-school": "No.1 Middle School",
};
```

`mrshope` 的属性名 `middle-school` 不是一个有效的变量，就需要用 `''` 括起来。访问这个属性也无法使用 `.` 操作符，必须用 `['xxx']` 来访问:

```js
mrshope["middle-school"]; // 'No.1 Middle School'
mrshope["name"]; // 'Mrs.Hope'
mrshope.name; // 'Mrs.Hope'
```

也可以用 `mrshope['name']` 来访问 `mrshope` 的 `name` 属性，不过 `mrshope.name` 的写法更简洁。我们在编写 JavaScript 代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过 `object.prop` 的形式访问一个属性了。

实际上 JavaScript 对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。

如果访问一个不存在的属性会返回什么呢? JavaScript 规定，访问不存在的属性不报错，而是返回 `undefined`:

```js
"use strict";

const mrhope = {
  name: "Mr.Hope",
};

console.log(mrhope.name);
console.log(mrhope.house); // undefined
```

由于 JavaScript 的对象是动态类型，您可以自由地给一个对象添加或删除属性:

```js
const mrhope = {
  name: "Mr.Hope",
};

mrhope.age; // undefined
mrhope.age = 22; // 新增一个 age 属性
mrhope.age; // 22
delete mrhope.age; // 删除 age 属性
mrhope.age; // undefined
delete mrhope["name"]; // 删除 name 属性
mrhope.name; // undefined
delete mrhope.school; // 删除一个不存在的 school 属性也不会报错
```

如果我们要检测 `mrhope` 是否拥有某一属性，可以用 `in` 操作符:

```js
const mrhope = {
  name: "Mr.Hope",
  birth: 1998,
  school: "No.1 Middle School",
  height: 1.76,
  weight: 50,
  car: null,
};

"name" in mrhope; // true
"grade" in mrhope; // false
```

不过要小心，如果 `in` 判断一个属性存在，这个属性不一定是 `mrhope` 的，它可能是 `mrhope` 继承得到的:

```js
"toString" in mrhope; // true
```

因为 `toString` 定义在 object 对象中，而所有对象最终都会在原型链上指向 object，所以 `mrhope` 也拥有 `toString` 属性。

要判断一个属性是否是 `mrhope` 自身拥有的，而不是继承得到的，可以用 `hasOwnProperty()` 方法:

```js
const mrhope = {
  name: "Mr.Hope",
};

mrhope.hasOwnProperty("name"); // true
mrhope.hasOwnProperty("toString"); // false
```

## 更多介绍

更系统的介绍详见 [数据结构 / 对象](../types/object.md)
