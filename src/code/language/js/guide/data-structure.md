---
title: 数据类型
icon: type
date: 2019-09-15
category: JavaScript
tag:
  - 快速上手
---

JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。

- 数值 (number): 整数和小数(比如 `1` 和 `3.14`)
- 字符串 (string): 文本(比如 `Hello World`)。
- 布尔值 (boolean): 表示真伪的两个特殊值，即 `true` (真) 和 `false` (假)
- `undefined`: 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
- `null`: 表示空值，即此处的值为空。
- 对象 (object): 各种值组成的集合。

<!-- more -->

- [深入了解数据类型](../types/README.md)

## Number

JavaScript 不区分整数和浮点数，统一用 `Number` 表示，以下都是合法的 `Number` 类型:

```js
123; // 整数 123
0.456; // 浮点数 0.456
1.2345e3; // 科学计数法表示 1.2345x1000，等同于 1234.5
-99; // 负数
NaN; // NaN 表示 Not a Number，当无法计算结果时用 NaN 表示
Infinity; // Infinity 表示无限大，当数值超过了 JavaScript 的 Number 所能表示的最大值时，就表示为 Infinity
```

- [深入了解 Number](../types/number.md)

## 字符串

字符串 (String) 是以单引号 `'` 或双引号 `"` 括起来的任意文本，比如 `'abc'`，`"xyz"` 等等。

- [字符串入门](string.md)
- [深入了解 String](../types/string.md)

## 布尔值

布尔值 (Boolean) 和布尔代数的表示完全一致，一个布尔值只有 `true`、`false` 两种值，要么是 `true`，要么是 `false`，可以直接用 `true`、`false` 表示布尔值，也可以通过布尔运算计算出来:

```js
true; // 这是一个 true 值
false; // 这是一个 false 值
2 > 1; // 这是一个 true 值
2 >= 3; // 这是一个 false 值
```

下列运算符会返回布尔值:

- 前置逻辑运算符: `!` (Not)
- 相等运算符: `===`，`!==`，`==`，`!=`
- 比较运算符: `>`，`>=`，`<`，`<=`

---

- [布尔值入门](boolean.md)

## null 和 undefined

`null` 表示一个 “空” 的值，它和 `0` 以及空字符串 `''` 不同，`0` 是一个数值，`''` 表示长度为 0 的字符串，而 `null` 表示“空”。

在其他语言中，也有类似 JavaScript 的 `null` 的表示，例如 Java 也用 `null`，Swift 用 `nil`，Python 用 `None` 表示。但是，在 JavaScript 中，还有一个和 `null` 类似的 `undefined`，它表示 “未定义”。

JavaScript 的设计者希望用 `null` 表示一个空的值，而 `undefined` 表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用 `null`。`undefined` 仅仅在判断函数参数是否传递的情况下有用。

## 数组

数组 (Array) 是一组**按顺序**排列的**集合**，集合的每个值称为**元素**。JavaScript 的数组可以包括任意数据类型。例如:

```js
[1, 2, 3.14, "Hello", null, true];
```

上述数组包含 6 个元素。数组用 `[]` 表示，元素之间用 `,` 分隔。

- [数组入门](array.md)
- [深入了解 Array](../types/array.md)

## 对象

JavaScript 的对象 (Object) 是一组由 **`键-值`** 组成的**无序**集合，例如:

```js
let person = {
  name: "Mr.Hope",
  isHandsome: true,
  birth: 1998,
  school: "No.1 Middle School",
  height: 1.76,
  weight: 50,
  car: null,
};
```

JavaScript 对象的键都是字符串类型，值可以是任意数据类型。上述 `person` 对象一共定义了 6 个键值对，其中每个键又称为对象的属性，例如，`person` 的 `name` 属性为 `'Bob'`，`zipcode` 属性为 `null`。

要获取一个对象的属性，我们用 `Object.Key` 的方式:

```js
person.name; // 'Mr.Hope'
person.zipcode; // null
```

- [对象入门](object.md)
- [深入了解 Object](../types/object.md)
