---
title: 函数
icon: function
date: 2019-09-23
category: JavaScript
---

## 闭包

闭包(closure)是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。

理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域: 全局作用域和函数作用域。函数内部可以直接读取全局变量。

```js
const n = 999;

function f1() {
  console.log(n);
}
f1(); // 999
```

上面代码中，函数 `f1` 可以读取全局变量 `n`。

但是，函数外部无法读取函数内部声明的变量。

```js
function f1() {
  const n = 999;
}

console.log(n);
// Uncaught ReferenceError: n is not defined(
```

上面代码中，函数 `f1` 内部声明的变量 `n`，函数外是无法读取的。

如果出于种种原因，需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。

```js
function f1() {
  const n = 999;
  function f2() {
    console.log(n); // 999
  }
}
```

上面代码中，函数 `f2` 就在函数 `f1` 内部，这时 `f1` 内部的所有局部变量，对 `f2` 都是可见的。但是反过来就不行，`f2` 内部的局部变量，对 `f1` 就是不可见的。这就是 JavaScript 语言特有的"链式作用域"结构(chain scope)，子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

既然 `f2` 可以读取 `f1` 的局部变量，那么只要把 `f2` 作为返回值，我们不就可以在 `f1` 外部读取它的内部变量了吗!

```js
function f1() {
  const n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

const result = f1();
result(); // 999
```

上面代码中，函数 `f1` 的返回值就是函数 `f2`，由于 `f2` 可以读取 `f1` 的内部变量，所以就可以在外部获得 `f1` 的内部变量了。

闭包就是函数 `f2`，即能够读取其他函数内部变量的函数。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。闭包最大的特点，就是它可以“记住”诞生的环境，比如 `f2` 记住了它诞生的环境 `f1`，所以从 `f2` 可以得到 `f1` 的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。

```js
function createIncrementor(start) {
  return function () {
    return start++;
  };
}

const inc = createIncrementor(5);

inc(); // 5
inc(); // 6
inc(); // 7
```

上面代码中，`start` 是函数 `createIncrementor` 的内部变量。通过闭包，`start` 的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包 `inc` 使得函数 `createIncrementor` 的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。

为什么会这样呢? 原因就在于 `inc` 始终在内存中，而 `inc` 的存在依赖于 `createIncrementor`，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。

闭包的另一个用处，是封装对象的私有属性和私有方法。

```js
function Person(name) {
  const _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge,
  };
}

const p1 = Person("张三");

p1.setAge(25);
p1.getAge(); // 25
```

上面代码中，函数 `Person` 的内部变量 `_age`，通过闭包 `getAge` 和 `setAge`，变成了返回对象 `p1` 的私有变量。

注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。

## 立即调用的函数表达式(IIFE)

在 JavaScript 中，圆括号 `()` 是一种运算符，跟在函数名之后，表示调用该函数。比如，`print()` 就表示调用 `print` 函数。

有时，我们需要在定义函数之后，立即调用该函数。这时，您不能在函数的定义之后加上圆括号，这会产生语法错误。

```js
function(){ /* code */ }();
// SyntaxError: Unexpected token (
```

产生这个错误的原因是，`function` 这个关键字即可以当作语句，也可以当作表达式。

```js
// 语句
function f() {}

// 表达式
const f = function f() {};
```

为了避免解析上的歧义，JavaScript 引擎规定，如果 `function` 关键字出现在行首，一律解释成语句。因此，JavaScript 引擎看到行首是 `function` 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

解决方法就是不要让 `function` 出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

```js
(function () {
  /* code */
})();
// 或者
(function () {
  /* code */
})();
```

上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义语句，所以就避免了错误。这就叫做“立即调用的函数表达式”(Immediately-Invoked Function Expression)，简称 IIFE。

注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。

```js
// 报错
(function () {
  /* code */
})()(
  (function () {
    /* code */
  })(),
);
```

上面代码的两行之间没有分号，JavaScript 会将它们连在一起解释，将第二行解释为第一行的参数。

推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面三种写法。

```js
const i = (function () {
  return 10;
})();
true &&
  (function () {
    /* code */
  })();
0,
  (function () {
    /* code */
  })();
```

甚至像下面这样写，也是可以的。

```js
!(function () {
  /* code */
})();
~(function () {
  /* code */
})();
-(function () {
  /* code */
})();
+(function () {
  /* code */
})();
```

通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个: 一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

```js
// 写法一
const tmp = newData;

processData(tmp);
storeData(tmp);

// 写法二
(function () {
  const tmp = newData;

  processData(tmp);
  storeData(tmp);
})();
```

上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。

## eval 命令

### 基本用法

`eval` 命令接受一个字符串作为参数，并将这个字符串当作语句执行。

```js
eval("const a = 1;");
a; // 1
```

上面代码将字符串当作语句运行，生成了变量 `a`。

如果参数字符串无法当作语句运行，那么就会报错。

```js
eval("3x"); // Uncaught SyntaxError: Invalid or unexpected token
```

放在 `eval` 中的字符串，应该有独自存在的意义，不能用来与 `eval` 以外的命令配合使用。举例来说，下面的代码将会报错。

```js
eval("return;"); // Uncaught SyntaxError: Illegal return statement
```

上面代码会报错，因为 `return` 不能单独使用，必须在函数中使用。

如果 `eval` 的参数不是字符串，那么会原样返回。

```js
eval(123); // 123
```

`eval` 没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

```js
let a = 1;
eval("a = 2");

a; // 2
```

上面代码中，`eval` 命令修改了外部变量 `a` 的值。由于这个原因，`eval` 有安全风险。

为了防止这种风险，JavaScript 规定，如果使用严格模式，`eval` 内部声明的变量，不会影响到外部作用域。

```js
(function f() {
  "use strict";
  eval("const foo = 123");
  console.log(foo); // ReferenceError: foo is not defined
})();
```

上面代码中，函数 `f` 内部是严格模式，这时 `eval` 内部声明的 `foo` 变量，就不会影响到外部。

不过，即使在严格模式下，`eval` 依然可以读写当前作用域的变量。

```js
(function f() {
  "use strict";
  const foo = 1;

  eval("foo = 2");
  console.log(foo); // 2
})();
```

上面代码中，严格模式下，`eval` 内部还是改写了外部变量，可见安全风险依然存在。

总之，`eval` 的本质是在当前作用域之中，注入代码。由于安全风险和不利于 JavaScript 引擎优化执行速度，所以一般不推荐使用。通常情况下，`eval` 最常见的场合是解析 JSON 数据的字符串，不过正确的做法应该是使用原生的 `JSON.parse` 方法。

### eval 的别名调用

前面说过 `eval` 不利于引擎优化执行速度。更麻烦的是，还有下面这种情况，引擎在静态代码分析的阶段，根本无法分辨执行的是 `eval`。

```js
const m = eval;
m("const x = 1");
x; // 1
```

上面代码中，变量 `m` 是 `eval` 的别名。静态代码分析阶段，引擎分辨不出 `m('const x = 1')` 执行的是 `eval` 命令。

为了保证 `eval` 的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行 `eval`，`eval` 内部一律是全局作用域。

```js
const a = 1;

function f() {
  const a = 2;
  const e = eval;
  e("console.log(a)");
}

f(); // 1
```

上面代码中，`eval` 是别名调用，所以即使它是在函数中，它的作用域还是全局作用域，因此输出的 `a` 为全局变量。这样的话，引擎就能确认 `e()` 不会对当前的函数作用域产生影响，优化的时候就可以把这一行排除掉。

`eval` 的别名调用的形式五花八门，只要不是直接调用，都属于别名调用，因为引擎只能分辨 `eval()` 这一种形式是直接调用。

```js
eval.call(null, "...");
window.eval("...")(1, eval)("...")(eval, eval)("...");
```

上面这些形式都是 `eval` 的别名调用，作用域都是全局作用域。

## 参考链接

- Ben Alman, [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
- Mark Daggett, [Functions Explained](http://markdaggett.com/blog/2013/02/15/functions-explained/)
- Juriy Zaytsev, [Named function expressions demystified](http://kangax.github.com/nfe/)
- Marco Rogers polotek, [What is the arguments object?](http://docs.nodejitsu.com/articles/javascript-conventions/what-is-the-arguments-object)
- Juriy Zaytsev, [Global eval. What are the options?](http://perfectionkills.com/global-eval-what-are-the-options/)
- Axel Rauschmayer, [Evaluating JavaScript code via eval() and new Function()](http://www.2ality.com/2014/01/eval.html)
