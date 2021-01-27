---
title: 高阶函数
icon: advance
time: 2019-10-05
category: JavaScript
---

高阶函数英文叫 Higher-order function。

JavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。

<!-- more -->

一个最简单的高阶函数:

```js
const add = (x, y, f) => f(x) + f(y);
```

或者写作

```js
function add(x, y, f) {
  return f(x) + f(y);
}
```

当我们调用 `add(-5, 6, Math.abs)` 时，参数 `x`，`y` 和 `f` 分别接收 `-5`，`6` 和函数 `Math.abs`，根据函数定义，我们可以推导计算过程为:

```js
x = -5;
y = 6;
f = Math.abs;
f(x) + f(y) ==> Math.abs(-5) + Math.abs(6) ==> 11;
return 11;
```

用代码验证一下:

```js
"use strict";

const add = (x, y, f) => f(x) + f(y);
const x = add(-5, 6, Math.abs);

console.log(x); // 11
```

编写高阶函数，就是让函数的参数能够接收别的函数。
