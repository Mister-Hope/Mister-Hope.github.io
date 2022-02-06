---
title: 解构赋值
icon: structure
date: 2019-10-03
category: JavaScript
---

从 ES6 开始，JavaScript 引入了解构赋值，可以同时对一组变量进行赋值。

<!-- more -->

什么是解构赋值? 我们先看看传统的做法，如何把一个数组的元素分别赋值给几个变量:

```js
const array = ["hello", "JavaScript", "ES6"];
const x = array[0];
const y = array[1];
const z = array[2];
```

现在，在 ES6 中，可以使用解构赋值，直接对多个变量同时赋值:

```js
"use strict";

// 如果浏览器支持解构赋值就不会报错:
const [x, y, z] = ["hello", "JavaScript", "ES6"];

// x, y, z分别被赋值为数组对应元素:
console.log("x = " + x + ", y = " + y + ", z = " + z);
```

注意，对数组元素进行解构赋值时，多个变量要用 `[...]` 括起来。

如果数组本身还有嵌套，也可以通过下面的形式进行解构赋值，注意嵌套层次和位置要保持一致:

```js
const [x, [y, z]] = ["hello", ["JavaScript", "ES6"]];

x; // 'hello'
y; // 'JavaScript'
z; // 'ES6'
```

解构赋值还可以忽略某些元素:

```js
const [, , z] = ["hello", "JavaScript", "ES6"]; // 忽略前两个元素，只对 z 赋值第三个元素
z; // 'ES6'
```

如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性:

```js
"use strict";

const person = {
  name: "小明",
  age: 20,
  gender: "male",
  passport: "G-12345678",
  school: "No.4 middle school",
};
const { name, age, passport } = person;

// name, age, passport 分别被赋值为对应属性:
console.log(`name = ${name}, age = ${age}, passport = ${passport}`);
```

对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的:

```js
const person = {
  name: "小明",
  age: 20,
  gender: "male",
  passport: "G-12345678",
  school: "No.4 middle school",
  address: {
    city: "Beijing",
    street: "No.1 Road",
    zipcode: "100001",
  },
};
const {
  name,
  address: { city, zip },
} = person;

name; // '小明'
city; // 'Beijing'
zip; // undefined, 因为属性名是 zipcode 而不是 zip
// 注意: address 不是变量，而是为了让 city 和 zip 获得嵌套的 address 对象的属性:
address; // Uncaught ReferenceError: address is not defined
```

使用解构赋值对对象属性进行赋值时，如果对应的属性不存在，变量将被赋值为 `undefined`，这和引用一个不存在的属性获得 `undefined` 是一致的。如果要使用的变量名和属性名不一致，可以用下面的语法获取:

```js
const person = {
  name: "小明",
  age: 20,
  gender: "male",
  passport: "G-12345678",
  school: "No.4 middle school",
};

// 把 passport 属性赋值给变量 id:
const { name, passport: id } = person;

name; // '小明'
id; // 'G-12345678'
// 注意: passport 不是变量，而是为了让变量 id 获得 passport 属性:
passport; // Uncaught ReferenceError: passport is not defined
```

解构赋值还可以使用默认值，这样就避免了不存在的属性返回 `undefined` 的问题:

```js
const person = {
  name: "小明",
  age: 20,
  gender: "male",
  passport: "G-12345678",
};

// 如果 person 对象没有 single 属性，默认赋值为 true:
const { name, single = true } = person;

name; // '小明'
single; // true
```

有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误:

```js
// 声明变量:
let x, y;

// 解构赋值:
{x, y} = { name: '小明', x: 100, y: 200};
// 语法错误: Uncaught SyntaxError: Unexpected token =
```

这是因为 JavaScript 引擎把 `{` 开头的语句当作了块处理，于是 `=` 不再合法。解决方法是用小括号括起来:

```js
({ x, y } = { name: "小明", x: 100, y: 200 });
```

## 使用场景

解构赋值在很多时候可以大大简化代码。例如，交换两个变量 x 和 y 的值，可以这么写，不再需要临时变量:

```js
let x = 1,
  y = 2;

[x, y] = [y, x];
```

快速获取当前页面的域名和路径:

```js
const { hostname: domain, pathname: path } = location;
```

如果一个函数接收一个对象作为参数，那么，可以使用解构直接把对象的属性绑定到变量中。例如，下面的函数可以快速创建一个 Date 对象:

```js
function buildDate({ year, month, day, hour = 0, minute = 0, second = 0 }) {
  return new Date(`${year}-${month}-${day} ${hour}:${minute}:${second}`);
}
```

它的方便之处在于传入的对象只需要 `year`、`month` 和 `day` 这三个属性:

```js
buildDate({ year: 2017, month: 1, day: 1 });
// Sun Jan 01 2017 00:00:00 GMT+0800 (CST)
```

也可以传入 `hour`、`minute` 和 `second` 属性:

```js
buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 });
// Sun Jan 01 2017 20:15:00 GMT+0800 (CST)
```

使用解构赋值可以减少代码量，但是，需要在支持 ES6 解构赋值特性的现代浏览器中才能正常运行。目前支持解构赋值的浏览器包括 Chrome，Firefox，Edge 等。
