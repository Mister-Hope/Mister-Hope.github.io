---
title: 条件判断
icon: condition
date: 2019-09-16
category: JavaScript
tag:
  - 快速上手
---

JavaScript 提供 `if` 结构和 `switch` 结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。

<!-- more -->

## if

### if 结构

`if` 结构先判断一个表达式的布尔值，然后根据布尔值的真伪[^truefalse]，执行不同的语句。

[^truefalse]: 布尔值的转换

    如果 `if` 的条件判断语句结果不是 `true` 或 `false` 怎么办? 例如:

    ```js
    const s = "123";

    if (s.length) {
      // 条件计算结果为3
    }
    ```

    不要忘记 JavaScript 把 `false` 本身、`null` 、 `undefined` 、 `0` 、 `NaN` 和空字符串 `''` 视为 `false` ，其他值一概视为 `true`。

```js
if (布尔值)
  语句;
// 或者
if (布尔值) 语句;
```

上面是 `if` 结构的基本形式。需要注意的是，“布尔值”往往由一个条件表达式产生的，必须放在圆括号中，表示对表达式求值。如果表达式的求值结果为 `true`，就执行紧跟在后面的语句；如果结果为 `false`，则跳过紧跟在后面的语句。

```js
if (m === 3) m = m + 1;
```

上面代码表示，只有在 `m` 等于 `3` 时，才会将其值加上 `1`。

这种写法要求条件表达式后面只能有一个语句。如果想执行多个语句，必须在 `if` 的条件判断之后，加上大括号，表示代码块(多个语句合并成一个语句)。

```js
if (m === 3) {
  m += 1;
}
```

::: warning

注意，`if` 后面的表达式之中，不要混淆赋值表达式 (`=`)、严格相等运算符 (`===`) 和相等运算符 (`==`)。尤其是赋值表达式不具有比较作用。

```js
let x = 1;
const y = 2;
if (x = y) {
  console.log(x);
}
// "2"
```

上面代码的原意是，当 `x` 等于 `y` 的时候，才执行相关语句。但是，不小心将严格相等运算符写成赋值表达式，结果变成了将 `y` 赋值给变量 `x`，再判断变量 `x` 的值(等于 2)的布尔值(结果为 `true`)。

:::

### `if...else` 结构

`if` 代码块后面，还可以跟一个 `else` 代码块，表示不满足条件时，所要执行的代码。例如，根据年龄显示不同内容，可以实现如下:

```js
const age = 20;

if (age >= 18)
  // 如果 age >= 18 为 true，则执行 if 语句块
  alert("adult");
// 否则执行 else 语句块
else alert("teenager");
```

::: warning

省略 `{}` 的危险之处在于，如果后来想添加一些语句，却忘了写 `{}` ，就改变了语义，例如:

```js
const age = 20;

if (age >= 18) alert("adult");
else console.log("age < 18"); // 添加一行日志
alert("teenager"); // <- 这行语句已经不在 else 的控制范围了
```

上述代码的 `else` 子句实际上只负责执行 `console.log('age < 18');`，原有的 `alert('teenager');` 已经不属于 `if...else...` 的控制范围了，它每次都会执行。

相反地，有 `{}` 的语句就不会出错:

```js
const age = 20;

if (age >= 18) {
  alert("adult");
} else {
  console.log("age < 18");
  alert("teenager");
}
```

建议初学者带上 `{}`。

:::

### 多行条件判断

如果还要更细致地判断条件，可以使用多个 `if...else...` 的组合:

```js
const age = 3;

if (age >= 18) {
  alert("adult");
} else if (age >= 6) {
  alert("teenager");
} else {
  alert("kid");
}
```

上述多个 `if...else...` 的组合实际上相当于两层 `if...else...` :

```js
const age = 3;

if (age >= 18) {
  alert("adult");
} else {
  if (age >= 6) {
    alert("teenager");
  } else {
    alert("kid");
  }
}
```

但是我们通常把 `else if` 连写在一起，来增加可读性。这里的 `else` 略掉了 `{}` 是没有问题的，因为它只包含一个 `if` 语句。注意最后一个单独的 `else` 不要略掉 `{}`[^else]。

[^else]: else 的从属

    ::: warning


    `else` 代码块总是与离自己最近的那个 `if` 语句配对。


    :::

    ```js
    const m = 1;
    const n = 2;
    if (m !== 1)
      if (n === 2) console.log("hello");
      else console.log("world");
    ```

    上面代码不会有任何输出，`else` 代码块不会得到执行，因为它跟着的是最近的那个 `if` 语句，相当于下面这样。

    ```js
    if (m !== 1) {
      if (n === 2) {
        console.log("hello");
      } else {
        console.log("world");
      }
    }
    ```

    如果想让 `else` 代码块跟随最上面的那个 `if` 语句，就要改变大括号的位置。

    ```js
    if (m !== 1) {
      if (n === 2) {
        console.log("hello");
      }
    } else {
      console.log("world");
    }
    // world
    ```

请注意， `if...else...` 语句的执行特点是二选一，在多个 `if...else...` 语句中，如果某个条件成立，则后续就不再继续判断了。

## switch 结构

当对一个变量连在一起使用多个 `if...else` 的时候，可以转为使用更方便的 `switch` 结构。

```js
switch (fruit) {
  case "banana":
    // ...
    break;
  case "apple":
    // ...
    break;
  default:
  // ...
}
```

上面代码根据变量 `fruit` 的值，选择执行相应的 `case`。如果所有 `case` 都不符合，则执行最后的 `default` 部分。需要注意的是，每个 `case` 代码块内部的 `break` 语句不能少，否则会接下去执行下一个 `case` 代码块，而不是跳出 `switch` 结构。

```js
const x = 1;

switch (x) {
  case 1:
    console.log("x 等于1");
  case 2:
    console.log("x 等于2");
  default:
    console.log("x 等于其他值");
}
// x等于1
// x等于2
// x等于其他值
```

上面代码中，`case` 代码块之中没有 `break` 语句，导致不会跳出 `switch` 结构，而会一直执行下去。正确的写法是像下面这样。

```js
switch (x) {
  case 1:
    console.log("x 等于1");
    break;
  case 2:
    console.log("x 等于2");
    break;
  default:
    console.log("x 等于其他值");
}
```

`switch` 语句部分和 `case` 语句部分，都可以使用表达式。

```js
switch (1 + 3) {
  case 2 + 2:
    f();
    break;
  default:
    neverHappens();
}
```

上面代码的 `default` 部分，是永远不会执行到的。
需要注意的是，`switch` 语句后面的表达式，与 `case` 语句后面的表示式比较运行结果时，采用的是严格相等运算符(`===`)，而不是相等运算符(`==`)，这意味着比较时不会发生类型转换。

```js
let x = 1;
switch (x) {
  case true:
    console.log("x 发生类型转换");
    break;
  default:
    console.log("x 没有发生类型转换");
}
// x 没有发生类型转换
```

上面代码中，由于变量 `x` 没有发生类型转换，所以不会执行 `case true` 的情况。这表明，`switch` 语句内部采用的是“严格相等运算符”。

## `? :` 三元运算符

JavaScript 还有一个三元运算符(即该运算符需要三个运算子)`? :`，也可以用于逻辑判断。

```js
条件 ? 表达式1 : 表达式2;
```

上面代码中，如果“条件”为 `true`，则返回“表达式 1”的值，否则返回“表达式 2”的值。

```js
const even = n % 2 === 0 ? true : false;
```

上面代码中，如果 `n` 可以被 2 整除，则 `even` 等于 `true`，否则等于 `false`。它等同于下面的形式。

```js
let even;

if (n % 2 === 0) {
  even = true;
} else {
  even = false;
}
```

这个三元运算符可以被视为 `if...else...` 的简写形式，因此可以用于多种场合。

```js
let myVar;

console.log(myVar ? "myVar has a value" : "myVar does not have a value");
// myVar does not have a value
```

上面代码利用三元运算符，输出相应的提示。

```js
const msg = "数字" + n + "是" + (n % 2 === 0 ? "偶数" : "奇数");
```

上面代码利用三元运算符，在字符串之中插入不同的值。

## 章节问题

试解释为什么下面的代码显示的是 `teenager`:

```js
"use strict";
const age = 20;

if (age >= 6) console.log("teenager");
else if (age >= 18) console.log("adult");
else console.log("kid");
```

由于 `age` 的值为 `20`，它实际上同时满足条件 `age >= 6` 和 `age >= 18` ，这说明条件判断的顺序非常重要。请修复后让其显示 `'adult'`。

:::
