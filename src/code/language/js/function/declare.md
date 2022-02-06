---
title: 函数的声明
icon: notice
date: 2019-10-01
category: JavaScript
---

JavaScript 有三种声明函数的方法。

<!-- more -->

## function 命令

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

## 函数表达式 <Badge text="推荐" type="tip" />

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

需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。总的来说，这两种声明函数的方式，差别很细微，可以近似认为是等价的。

## Function 构造函数 <Badge text="不推荐" type="grey" />

第三种声明函数的方式是 `Function` 构造函数。

```js
const add = new Function("x", "y", "return x + y");

// 等同于
function add(x, y) {
  return x + y;
}
```

上面代码中，`Function` 构造函数接受三个参数，除了最后一个参数是 `add` 函数的“函数体”，其他参数都是 `add` 函数的参数。

您可以传递任意数量的参数给 `Function` 构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。

```js
const foo = new Function('return "hello world";');

// 等同于
function foo() {
  return "hello world";
}
```

`Function` 构造函数可以不使用 `new` 命令，返回结果完全一样。

总的来说，这种声明函数的方式非常不直观，几乎无人使用。

## return

函数体内部的 `return` 语句，表示返回。JavaScript 引擎遇到 `return` 语句，就直接返回 `return` 后面的那个表达式的值，后面即使还有语句，也不会得到执行。也就是说，`return` 语句所带的那个表达式，就是函数的返回值。`return` 语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回 `undefined`。

## 第一等公民

JavaScript 语言将函数看作一种值，与其它值(数值、字符串、布尔值等等)地位相同。凡是可以使用值的地方，就能使用函数。比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

由于函数与其他数据类型地位平等，所以在 JavaScript 语言中又称函数为第一等公民。

```js
function add(x, y) {
  return x + y;
}

// 将函数赋值给一个变量
const operator = add;

// 将函数作为参数和返回值
function a(op) {
  return op;
}
a(add)(1, 1);
// 2
```

## 函数名的提升

JavaScript 引擎将函数名视同变量名，所以采用 `function` 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。所以，下面的代码不会报错。

```js
f();

function f() {}
```

表面上，上面代码好像在声明之前就调用了函数 `f`。但是实际上，由于“变量提升”，函数 `f` 被提升到了代码头部，也就是在调用之前已经声明了。但是，如果采用赋值语句定义函数，JavaScript 就会报错。

```js
f();
var f = function () {};
// TypeError: undefined is not a function
```

上面的代码等同于下面的形式。

```js
var f;

f();
f = function () {};
```

上面代码第二行，调用 `f` 的时候，`f` 只是被声明了，还没有被赋值，等于 `undefined`，所以会报错。因此，如果同时采用 `function` 命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义。

```js
const f = function () {
  console.log("1");
};

function f() {
  console.log("2");
}

f(); // 1
```

## 参数

### 概述

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

```js
function square(x) {
  return x * x;
}

square(2); // 4
square(3); // 9
```

上式的 `x` 就是 `square` 函数的参数。每次运行的时候，需要提供这个值，否则得不到结果。

### 参数的省略

函数参数不是必需的，JavaScript 允许省略参数。

```js
function f(a, b) {
  return a;
}

f(1, 2, 3); // 1
f(1); // 1
f(); // undefined

f.length; // 2
```

上面代码的函数 `f` 定义了两个参数，但是运行时无论提供多少个参数(或者不提供参数)，JavaScript 都不会报错。省略的参数的值就变为 `undefined`。需要注意的是，函数的 `length` 属性与实际传入的参数个数无关，只反映函数预期传入的参数个数。

但是，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入 `undefined`。

```js
function f(a, b) {
  return a;
}

f( , 1) // SyntaxError: Unexpected token ,(…)
f(undefined, 1) // undefined
```

上面代码中，如果省略第一个参数，就会报错。

### 传递方式

函数参数如果是原始类型的值(数值、字符串、布尔值)，传递方式是传值传递(passes by value)。这意味着，在函数体内修改参数值，不会影响到函数外部。

```js
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p; // 2
```

上面代码中，变量 `p` 是一个原始类型的值，传入函数 `f` 的方式是传值传递。因此，在函数内部，`p` 的值是原始值的拷贝，无论怎么修改，都不会影响到原始值。

但是，如果函数参数是复合类型的值(数组、对象、其他函数)，传递方式是传址传递(pass by reference)。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

```js
var obj = { p: 1 };

function f(o) {
  o.p = 2;
}
f(obj);

obj.p; // 2
```

上面代码中，传入函数 `f` 的是参数对象 `obj` 的地址。因此，在函数内部修改 `obj` 的属性 `p`，会影响到原始值。

注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。

```js
var obj = [1, 2, 3];

function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj; // [1, 2, 3]
```

上面代码中，在函数 `f` 内部，参数对象 `obj` 被整个替换成另一个值。这时不会影响到原始值。这是因为，形式参数(`o`)的值实际是参数 `obj` 的地址，重新对 `o` 赋值导致 `o` 指向另一个地址，保存在原地址上的值当然不受影响。

### 同名参数

如果有同名的参数，则取最后出现的那个值。

```js
function f(a, a) {
  console.log(a);
}

f(1, 2); // 2
```

上面代码中，函数 `f` 有两个参数，且参数名都是 `a`。取值的时候，以后面的 `a` 为准，即使后面的 `a` 没有值或被省略，也是以其为准。

```js
function f(a, a) {
  console.log(a);
}

f(1); // undefined
```

调用函数 `f` 的时候，没有提供第二个参数，`a` 的取值就变成了 `undefined`。这时，如果要获得第一个 `a` 的值，可以使用 `arguments` 对象。

```js
function f(a, a) {
  console.log(arguments[0]);
}

f(1); // 1
```

## rest 参数

由于 JavaScript 函数允许接收任意个参数，于是我们就不得不用 arguments[^arguments] 来获取所有参数:

[^arguments]:
    **arguments** <Badge text="不推荐使用" type="warning" /> <Badge text="使用 rest 替代" type="tip" />

    - arguments 的定义

      由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。这就是 `arguments` 对象的由来。它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。`arguments` 类似 Array 但它不是一个 Array。

      `arguments` 对象包含了函数运行时的所有参数，`arguments[0]` 就是第一个参数，`arguments[1]` 就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用。

      ```js
      "use strict";

      function foo(x) {
        console.log("x = " + x); // 10
        for (let i = 0; i < arguments.length; i++)
          console.log(`arg${i} = ${arguments[i]}`); // 10, 20, 30
      }
      foo(10, 20, 30);
      ```

      ::: tip 修改 arguments

      正常模式下，`arguments` 对象可以在运行时修改。

      ```js
      var f = function (a, b) {
        arguments[0] = 3;
        arguments[1] = 2;
        return a + b;
      };

      f(1, 1); // 5
      ```

      上面代码中，函数 `f` 调用时传入的参数，在函数内部被修改成 `3` 和 `2`。

      严格模式下，`arguments` 对象与函数参数不具有联动关系。也就是说，修改 `arguments` 对象不会影响到实际的函数参数。

      ```js
      var f = function (a, b) {
        "use strict"; // 开启严格模式
        arguments[0] = 3;
        arguments[1] = 2;
        return a + b;
      };

      f(1, 1); // 2
      ```

      上面代码中，函数体内是严格模式，这时修改 `arguments` 对象，不会影响到真实参数 `a` 和 `b`。

      :::

      利用 arguments，您可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值:

      ```js
      function abs() {
        if (arguments.length === 0) return 0;

        const x = arguments[0];

        return x >= 0 ? x : -x;
      }

      abs(); // 0
      abs(10); // 10
      abs(-9); // 9
      ```

      实际上 arguments 最常用于判断传入参数的个数。您可能会看到这样的写法:

      ```js
      // foo(a[, b], c)
      // 接收 2~3 个参数，b 是可选参数，如果只传 2 个参数，b 默认为 null:
      function foo(a, b, c) {
        if (arguments.length === 2) {
          // 实际拿到的参数是 a 和 b，c 为 undefined
          c = b; // 把 b 赋给 c
          b = null; // b 变为默认值
        }

        // ...
      }
      ```

      要把中间的参数 `b` 变为“可选”参数，就只能通过 `arguments` 判断，然后重新调整参数并赋值。

      通过 `arguments` 对象的 `length` 属性，可以判断函数调用时到底带几个参数。

      ```js
      function f() {
        return arguments.length;
      }

      f(1, 2, 3); // 3
      f(1); // 1
      f(); // 0
      ```

    - 与数组的关系

      需要注意的是，虽然 `arguments` 很像数组，但它是一个对象。数组专有的方法(比如 `slice` 和 `forEach`)，不能在 `arguments` 对象上直接使用。

      如果要让 `arguments` 对象使用数组方法，真正的解决方法是将 `arguments` 转为真正的数组。下面是两种常用的转换方法: `slice` 方法和逐一填入新数组。

      ```js
      var args = Array.prototype.slice.call(arguments);

      // 或者
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      ```

    - callee 属性

      `arguments` 对象带有一个 `callee` 属性，返回它所对应的原函数。

      ```js
      var f = function () {
        console.log(arguments.callee === f);
      };

      f(); // true
      ```

      ::: warning

      虽然可以通过 `arguments.callee`，达到调用函数自身的目的。但是这个属性在严格模式里面是禁用的，因此不建议使用。

      :::

```js
function foo(a, b) {
  let i;
  const rest = [];

  if (arguments.length > 2)
    for (i = 2; i < arguments.length; i++) rest.push(arguments[i]);

  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(rest);
}
```

为了获取除了已定义参数 `a`、`b` 之外的参数，我们不得不用 arguments，并且循环要从索引 `2` 开始以便排除前两个参数，这种写法很别扭，只是为了获得额外的 rest 参数，有没有更好的方法?

ES6 标准引入了 rest 参数，上面的函数可以改写为:

```js
function foo(a, b, ...rest) {
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []
```

Rest 参数只能写在最后，前面用 `...` 标识，从运行结果可知，传入的参数先绑定 `a`、`b`，多余的参数以数组形式交给变量 rest，所以，不再需要 `arguments` 我们就获取了全部参数。

如果传入的参数连正常定义的参数都没填满，也不要紧，rest 参数会接收一个空数组(注意不是 `undefined`)。

::: warning 小心您的 return 语句

前面我们讲到了 JavaScript 引擎有一个在行末自动添加分号的机制，这可能让您栽到 return 语句的一个大坑:

```js
function foo() {
  return { name: "foo" };
}

foo(); // { name: 'foo' }
```

如果把 return 语句拆成两行:

```js
function foo() {
  return;
  {
    name: "foo";
  }
}

foo(); // undefined
```

要小心了，由于 JavaScript 引擎在行末自动添加分号的机制，上面的代码实际上变成了:

```js
function foo() {
  return; // 自动添加了分号，相当于 return undefined;
  {
    name: "foo";
  } // 这行语句已经没法执行到了
}
```

所以正确的多行写法是:

```js
function foo() {
  return {
    // 这里不会自动加分号，因为 { 表示语句尚未结束
    name: "foo",
  };
}
```

:::
