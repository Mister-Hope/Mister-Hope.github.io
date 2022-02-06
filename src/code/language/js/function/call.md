---
title: 函数的调用
icon: call
date: 2019-10-02
category: JavaScript
---

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

## 递归调用

函数可以调用自身，这就是递归(recursion)。下面就是通过递归，计算斐波那契数列的代码。

```js
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}

fib(6); // 8
```

上面代码中，`fib` 函数内部又调用了 `fib`，计算得到斐波那契数列的第 6 个元素是 8。
