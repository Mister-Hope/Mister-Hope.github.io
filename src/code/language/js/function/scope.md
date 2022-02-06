---
title: 函数作用域
icon: locate
date: 2019-10-02
category: JavaScript
---

## 变量作用域

请看 [let 命令](../es6/let.md)

## 函数作用域

### 定义

作用域(scope)指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域: 一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。

对于顶层函数来说，函数外部声明的变量就是全局变量(global variable)，它可以在函数内部读取。

```js
let v = 1;

function f() {
  console.log(v);
}

f();
// 1
```

上面的代码表明，函数 `f` 内部可以读取全局变量 `v`。

在函数内部定义的变量，外部无法读取，称为“局部变量”(local variable)。

```js
function f() {
  let v = 1;
}

v; // ReferenceError: v is not defined
```

上面代码中，变量 `v` 在函数内部定义，所以是一个局部变量，函数之外就无法读取。

函数内部定义的变量，会在该作用域内覆盖同名全局变量。

```js
let v = 1;

function f() {
  let v = 2;
  console.log(v);
}

f(); // 2
v; // 1
```

上面代码中，变量 `v` 同时在函数的外部和内部有定义。结果，在函数内部定义，局部变量 `v` 覆盖了全局变量 `v`。

注意，对于 `var` 命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。

```js
if (true) {
  var x = 5;
}
console.log(x); // 5
```

上面代码中，变量 `x` 在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。

### 函数内部的变量提升

与全局作用域一样，函数作用域内部也会产生“变量提升”现象。`var` 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

```js
function foo(x) {
  if (x > 100) {
    var tmp = x - 100;
  }
}

// 等同于
function foo(x) {
  var tmp;
  if (x > 100) {
    tmp = x - 100;
  }
}
```

### 函数本身的作用域

函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。

```js
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f(); // 1
```

上面代码中，函数 `x` 是在函数 `f` 的外部声明的，所以它的作用域绑定外层，内部变量 `a` 不会到函数 `f` 体内取值，所以输出 `1`，而不是 `2`。

总之，函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。

很容易犯错的一点是，如果函数 `A` 调用函数 `B`，却没考虑到函数 `B` 不会引用函数 `A` 的内部变量。

```js
var x = function () {
  console.log(a);
};

function y(f) {
  var a = 2;
  f();
}

y(x);
// ReferenceError: a is not defined
```

上面代码将函数 `x` 作为参数，传入函数 `y`。但是，函数 `x` 是在函数 `y` 体外声明的，作用域绑定外层，因此找不到函数 `y` 的内部变量 `a`，导致报错。

同样的，函数体内部声明的函数，作用域绑定函数体内部。

```js
function foo() {
  var x = 1;
  function bar() {
    console.log(x);
  }
  return bar;
}

var x = 2;
var f = foo();
f(); // 1
```

上面代码中，函数 `foo` 内部声明了一个函数 `bar`，`bar` 的作用域绑定 `foo`。当我们在 `foo` 外部取出 `bar` 执行时，变量 `x` 指向的是 `foo` 内部的 `x`，而不是 `foo` 外部的 `x`。正是这种机制，构成了下文要讲解的“闭包”现象。

## 命名空间

全局变量会绑定到 `window` 上，不同的 JavaScript 文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。

减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如:

```js
// 唯一的全局变量MYAPP:
const MYAPP = {};

// 其他变量:
MYAPP.name = "myapp";
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
  return "foo";
};
```

把自己的代码全部放入唯一的命名空间 `MYAPP` 中，会大大减少全局变量冲突的可能。

许多著名的 JavaScript 库都是这么干的: jQuery，YUI，underscore 等等。
