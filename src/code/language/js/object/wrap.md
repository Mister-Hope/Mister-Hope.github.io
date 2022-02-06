---
title: 包装对象
icon: wrap
date: 2019-10-11
category: JavaScript
---

除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 `int` 和 `Integer` 的关系。

`number`、`boolean` 和 `string` 都有包装对象。没错，在 JavaScript 中，字符串也区分 `string` 类型和它的包装类型。包装对象用 `new` 创建:

```js
const n = new Number(123); // 123,生成了新的包装类型
const b = new Boolean(true); // true,生成了新的包装类型
const s = new String("str"); // 'str',生成了新的包装类型
```

<!-- more -->

虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，但他们的类型已经变为 `object` 了! 所以，包装对象和原始值用 `===` 比较会返回 `false`:

```js
typeof new Number(123); // 'object'
new Number(123) === 123; // false

typeof new Boolean(true); // 'object'
new Boolean(true) === true; // false

typeof new String("str"); // 'object'
new String("str") === "str"; // false
```

所以不要使用包装对象! 尤其是针对 `string` 类型!!!

如果我们在使用 `Number`、`Boolean` 和 `String` 时，没有写 new 会发生什么情况?

此时，`Number()`、`Boolean()` 和 `String()` 被当做普通函数，把任何类型的数据转换为 `number`、`boolean` 和 `string` 类型(注意不是其包装类型):

```js
const n = Number("123"); // 123，相当于parseInt()或parseFloat()
typeof n; // 'number'

const b = Boolean("true"); // true
typeof b; // 'boolean'

const b2 = Boolean("false"); // true! 'false'字符串转换结果为true!因为它是非空字符串!
const b3 = Boolean(""); // false

const s = String(123.45); // '123.45'
typeof s; // 'string'
```

总结:

- 不要使用 `new Number()`、`new Boolean()`、`new String()` 创建包装对象；

- 用 `parseInt()` 或 `parseFloat()` 来转换任意类型到 `number`；

- 用 `String()` 来转换任意类型到 `string`，或者直接调用某个对象的 `toString()` 方法；

- 通常不必把任意类型转换为 `boolean` 再判断，因为可以直接写 `if (myVar) {...}`；

- `typeof` 操作符可以判断出 `number`、`boolean`、`string`、`function` 和 `undefined`；

- 判断 `Array` 要使用 `Array.isArray(arr)`；

- 判断 `null` 请使用 `myVar === null`；

- 判断某个全局变量是否存在用 `typeof window.myVar === 'undefined'`；

- 函数内部判断某个变量是否存在用 `typeof myVar === 'undefined'`。

- `null` 和 `undefined` 没有 `toString()` 方法，`number` 对象调用 `toString()` 报 `SyntaxError`。虽然 `null` 还伪装成了 `object` 类型。

  ```js
  123.toString(); // SyntaxError
  // 遇到这种情况，要特殊处理一下:

  123..toString(); // '123', 注意是两个点!
  (123).toString(); // '123'
  ```
