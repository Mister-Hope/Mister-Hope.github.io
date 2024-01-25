---
title: 闭包
icon: lock
date: 2019-10-07
category: JavaScript
---

## 函数作为返回值

高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。

我们来实现一个对 Array 的求和。通常情况下，求和的函数是这样定义的:

```js
const sum = (arr) => arr.reduce((x, y) => x + y);

sum([1, 2, 3, 4, 5]); // 15
```

::: tip

变量 `sum` 等同于:

```js
function sum(arr) {
  return arr.reduce(function (x, y) {
    return x + y;
  });
}
```

:::

但是，如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办? 可以不返回求和的结果，而是返回求和的函数!

```js
const lazy_sum = (arr) => () => arr.reduce((x, y) => x + y);
```

::: tip

上面的 `lazy_sum()` 等同于:

```js
function lazy_sum(arr) {
  const sum = function () {
    return arr.reduce(function (x, y) {
      return x + y;
    });
  };

  return sum;
}
```

:::

当我们调用 `lazy_sum()` 时，返回的并不是求和结果，而是求和函数:

```js
const f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
```

调用函数 f 时，才真正计算求和的结果:

```js
f(); // 15
```

::: tip

上面的例子也很好的证明了箭头函数的简洁性。

随着开发的深入，应当逐渐熟悉使用箭头函数来写出更简洁的写法。

:::

在这个例子中，我们在函数 `lazy_sum` 中又定义了函数 `sum`，并且，内部函数 `sum` 可以引用外部函数 `lazy_sum` 的参数和局部变量，当 `lazy_sum` 返回函数 `sum` 时，相关参数和变量都保存在返回的函数中，这种称为“闭包(Closure)”的程序结构拥有极大的威力。

请再注意一点，当我们调用 `lazy_sum()` 时，每次调用都会返回一个新的函数，即使传入相同的参数:

```js
const f1 = lazy_sum([1, 2, 3, 4, 5]);
const f2 = lazy_sum([1, 2, 3, 4, 5]);

f1 === f2; // false
```

`f1()` 和 `f2()` 的调用结果互不影响。

## 闭包注意事项

注意到返回的函数在其定义内部引用了局部变量 `arr`，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。

另一个需要注意的问题是，返回的函数并没有立刻执行，而是直到调用了 `f()` 才执行。我们来看一个例子:

```js
function count() {
  const arr = new Array(3);

  for (let i = 1; i <= arr.length; i++) arr.push(() => i * i);

  return arr;
}

const results = count();
const f1 = results[0];
const f2 = results[1];
const f3 = results[2];
```

在上面的例子中，每次循环，都创建了一个新的函数，然后，把创建的 3 个函数都添加到一个 Array 中返回了。

您可能认为调用 `f1()`，`f2()` 和 `f3()` 结果应该是 `1，4，9`，但实际结果是:

```js
f1(); // 16
f2(); // 16
f3(); // 16
```

全部都是 16! 原因就在于返回的函数引用了变量 `i`，但它并非立刻执行。等到 3 个函数都返回时，它们所引用的变量 i 已经变成了 `4`，因此最终结果为 `16`。

返回闭包时牢记的一点就是: 返回函数不要引用任何循环变量，或者后续会发生变化的变量。

如果一定要引用循环变量怎么办? 方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变:

```js
function count() {
  const arr = [];
  for (let i = 1; i <= 3; i++)
    arr.push(
      (
        (n) => () =>
          n * n
      )(i),
    );

  return arr;
}

const results = count();
const f1 = results[0];
const f2 = results[1];
const f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9
```

注意这里用了一个“创建一个匿名函数并立刻执行”的语法:

```js
((x) => x * x)(3); // 9
```

理论上讲，创建一个匿名函数并立刻执行可以这么写:

```js
function (x) { return x * x } (3);
```

但是由于 JavaScript 语法解析的问题，会报 SyntaxError 错误，因此需要用括号把整个函数定义括起来:

```js
(function (x) {
  return x * x;
})(3);
```

或者使用箭头函数的写法:

```js
((x) => x * x)(3); // 9
```

通常，一个立即执行的匿名函数可以把函数体拆开，一般这么写:

```js
(x => {
  ...
})(...);
```

说了这么多，难道闭包就是为了返回一个函数然后延迟执行吗?

当然不是! 闭包有非常强大的功能。举个栗子:

在面向对象的程序设计语言里，比如 Java 和 C++，要在对象内部封装一个私有变量，可以用 `private` 修饰一个成员变量。

在没有 class 机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。我们用 JavaScript 创建一个计数器:

```js
"use strict";

const create_counter = (counter = 0) => ({
  inc: () => {
    counter += 1;
    return counter;
  },
});
```

::: warning 最后的提示

上面的函数等效于:

```js
"use strict";

function create_counter(initial) {
  let x = initial || 0;
  return {
    inc() {
      x += 1;

      return x;
    },
  };
}
```

这是最后一个提示了。

之后，略微复杂的箭头函数将不再包含正常写法的版本，如果理解起来吃力，请多加阅读箭头函数章节并针对以上案例充分理解。

:::

它用起来像这样:

```js
const c1 = create_counter();
c1.inc(); // 1
c1.inc(); // 2
c1.inc(); // 3

const c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13
```

在返回的对象中，实现了一个闭包，该闭包携带了局部变量 `x`，并且，从外部代码根本无法访问到变量 `x`。换句话说，闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。

闭包还可以把多参数的函数变成单参数的函数。例如，要计算 `xy` 可以用 `Math.pow(x, y)` 函数，不过考虑到经常计算 `x2` 或 `x3`，我们可以利用闭包创建新的函数 `pow2` 和 `pow3`:

```js
"use strict";

const make_pow = (n) => (x) => Math.pow(x, n);
// 创建两个新函数:
const pow2 = make_pow(2);
const pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343
```

::: tip 脑洞大开

很久很久以前，有个叫阿隆佐·邱奇的帅哥，发现只需要用函数，就可以用计算机实现运算，而不需要 `0`、`1`、`2`、`3` 这些数字和 `+`、`-`、`*`、`/`这些符号。

JavaScript 支持函数，所以可以用 JavaScript 用函数来写这些计算。来试试:

```js
"use strict";

// 定义数字0:
const zero = () => (x) => x;

// 定义数字1:
const one = (f) => (x) => f(x);

// 定义加法:
const add = (n, m) => (f) => (x) => m(f)(n(f)(x));

// 计算数字2 = 1 + 1:
const two = add(one, one);

// 计算数字3 = 1 + 2:
const three = add(one, two);

// 计算数字5 = 2 + 3:
const five = add(two, three);

// 您说它是 3 就是 3，您说它是 5 就是 5，您怎么证明?

// 呵呵，看这里:

// 给 3 传一个函数,会打印 3 次:
three(() => console.log("print 3 times"))();

// 给 5 传一个函数,会打印 5 次:
five(() => console.log("print 5 times"))();

// 继续接着玩一会...
```

:::
