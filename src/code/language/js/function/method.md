---
date: 2020-05-04
title: 函数的属性和方法
icon: list
category: JavaScript
---

## name 属性

函数的 `name` 属性返回函数的名字。

```js
function f1() {}
f1.name; // "f1"
```

如果是通过变量赋值定义的函数，那么 `name` 属性返回变量名。

```js
var f2 = function () {};
f2.name; // "f2"
```

但是，上面这种情况，只有在变量的值是一个匿名函数时才是如此。如果变量的值是一个具名函数，那么 `name` 属性返回 `function` 关键字之后的那个函数名。

```js
var f3 = function myName() {};
f3.name; // 'myName'
```

上面代码中，`f3.name` 返回函数表达式的名字。注意，真正的函数名还是 `f3`，而 `myName` 这个名字只在函数体内部可用。

`name` 属性的一个用处，就是获取参数函数的名字。

```js
var myFunc = function () {};

function test(f) {
  console.log(f.name);
}

test(myFunc); // myFunc
```

上面代码中，函数 `test` 内部通过 `name` 属性，就可以知道传入的参数是什么函数。

## length 属性

函数的 `length` 属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

```js
function f(a, b) {}
f.length; // 2
```

上面代码定义了空函数 `f`，它的 `length` 属性就是定义时的参数个数。不管调用时输入了多少个参数，`length` 属性始终等于 2。

`length` 属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的“方法重载”(overload)。

## toString()

函数的 `toString` 方法返回一个字符串，内容是函数的源码。

```js
function f() {
  a();
  b();
  c();
}

f.toString();
// function f() {
//  a();
//  b();
//  c();
// }
```

对于那些原生的函数，`toString()` 方法返回 `function (){[native code]}`。

```js
Math.sqrt.toString();
// "function sqrt() { [native code] }"
```

上面代码中，`Math.sqrt` 是 JavaScript 引擎提供的原生函数，`toString()` 方法就返回原生代码的提示。

函数内部的注释也可以返回。

```js
function f() {/*
  这是一个
  多行注释
*/}

f.toString();
// "function f(){/*
//   这是一个
//   多行注释
// */}"
```

利用这一点，可以变相实现多行字符串。

```js
var multiline = function (fn) {
  var arr = fn.toString().split("\n");
  return arr.slice(1, arr.length - 1).join("\n");
};

function f() {/*
  这是一个
  多行注释
*/}

multiline(f);
// " 这是一个
//   多行注释"
```
