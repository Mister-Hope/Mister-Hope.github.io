---
title: 函数
icon: info
date: 2019-09-17
category: JavaScript
tag:
  - 快速上手
---

函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。

基本上所有的高级语言都支持函数，JavaScript 也不例外。JavaScript 的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。

<!-- more -->

## 声明函数

`function` 命令声明的代码区块，就是一个函数。`function` 命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。

```js
function abs(x) {
  if (x >= 0) return x;
  else return -x;
}
```

上述 `abs()` 函数的定义如下:

`function` 指出这是一个函数定义；

`abs` 是函数的名称；

`(x)` 括号内列出函数的参数，多个参数以,分隔；

`{ ... }` 之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。

由于 JavaScript 的函数也是一个对象，上述定义的 `abs()` 函数实际上是一个函数对象，而函数名 `abs` 可以视为指向该函数的变量。这叫做函数的声明(Function Declaration)。

除了用 `function` 命令声明函数，还可以采用变量赋值的写法。

```js
const print = function (s) {
  console.log(s);
};
```

在这种方式下，`function (x) { ... }` 是一个匿名函数，它没有函数名。但是，这个匿名函数赋值给了变量 `print`，所以，通过变量 `print` 就可以调用该函数。

这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式(Function Expression)，因为赋值语句的等号右侧只能放表达式。

采用函数表达式声明函数时，`function` 命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

```js
const print = function x() {
  console.log(typeof x);
};

x;
// ReferenceError: x is not defined

print();
// function
```

上面代码在函数表达式中，加入了函数名 `x`。这个 `x` 只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错(除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数)。因此，下面的形式声明函数也非常常见。

```js
const f = function f() {};
```

需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。总的来说，这两种声明函数的方式，除了变量提升以外，可以近似认为是等价的。

::: tip 函数名的提升

JavaScript 引擎将函数名视同变量名，所以采用 `function` 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。所以，下面的代码不会报错。

```js
f();

function f() {}
```

:::

## 调用函数

调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。

```js
abs(10); // 返回 10
abs(-9); // 返回 9
```

由于 JavaScript 允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数:

```js
abs(10, "blablabla"); // 返回 10
abs(-9, "haha", "hehe", null); // 返回 9
```

传入的参数比定义的少也没有问题:

```js
abs(); // 返回 NaN
```

此时 `abs(x)` 函数的参数 x 将收到 `undefined`，计算结果为 `NaN`。

要避免收到 `undefined`，可以对参数进行检查:

```js
function abs(x) {
  if (typeof x !== "number") throw "Not a number";

  if (x >= 0) return x;
  else return -x;
}
```
