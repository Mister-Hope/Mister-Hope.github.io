---
title: 变量
icon: variable
date: 2019-09-15
category: JavaScript
tag:
  - 快速上手
---

变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。

<!-- more -->

## 标识符

标识符 (identifier) 指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript 语言的标识符对大小写敏感，所以 `a` 和 `A` 是两个不同的标识符。

标识符有一套命名规则，不符合规则的就是非法标识符。JavaScript 引擎遇到非法标识符，就会报错。

简单说，标识符命名规则如下。

- 第一个字符，可以是任意 Unicode 字母(包括英文字母和其他语言的字母)，以及美元符号 (`$`) 和下划线 (`_`)。
- 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字 `0-9`。

下面这些都是合法的标识符。

```js
arg0;
_tmp;
$elem;
π;
```

下面这些则是不合法的标识符。

```js
1a  // 第一个字符不能是数字
23  // 同上
***  // 标识符不能包含星号
a+b  // 标识符不能包含加号
-d  // 标识符不能包含减号或连词线
```

中文是合法的标识符，可以用作变量名:

```js
var 临时变量 = 1;
```

::: warning

显然老旧的浏览器不会支持这个，所以请不要给自己找麻烦。

:::

另外 JavaScript 有一些 保留字[^preserve]，不能用作标识符。

[^preserve]: JavaScript 的保留字:

    arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

## 变量

变量在 JavaScript 中用一个合法的标识符表示，在设计之初使用 `var` 命令。

```js
var a;
```

但是由于其带来的不好效果[^lift]，在后来，JavaScript 更改了声明变量的方式，使用 `let` 与 `const`。

[^lift]: 历史遗留问题-变量提升

    JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升(hoisting)。

    ```js
    console.log(a);
    var a = 1;
    ```

    上面代码首先使用 `console.log` 方法，在控制台(console)显示变量 `a` 的值。这时变量 `a` 还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码。

    ```js
    var a;
    console.log(a);
    a = 1;
    ```

    最后的结果是显示 `undefined`，表示变量 `a` 已声明，但还未赋值。

    为了解决这个问题，ES6 中新规范的 `let` 和 `const` 命令遇到类似问题直接报错。

    ```js
    console.log(a);
    // Uncaught ReferenceError: Cannot access 'a' before initialization

    let a = 1;
    ```

```js
let a; // 申明了变量 a，此时 a 的值为undefined
let $b = 1; // 申明了变量 $b，同时给 $b 赋值，此时 $b 的值为 1
let s_007 = "007"; // s_007 是一个字符串
let Answer = true; // Answer 是一个布尔值 true
let t = null; // t的值是 null

const person = "Mr.Hope"; // 声明了一个常量 person，值为 Mr.Hope
const score = 500; // 声明了一个常量 score，值为 500
```

::: warning

`const` 代表常量的声明，且该常量必须在一开始就被声明成具体的值，之后该值不再改变。

:::

在 JavaScript 中，使用等号 `=` 对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用 `let` 申明一次，例如:

```js
let a = 123; // a 的值是整数 123
a = "ABC"; // a 变为字符串
```

这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如 Java 是静态语言，赋值语句如下:

```js
int a = 123; // a 是整数类型变量，类型用 int 申明
a = "ABC"; // 错误: 不能把字符串赋给整型变量
```

和静态语言相比，动态语言更灵活，就是这个原因。

::: info

由于这个原因，动态语言也更容易出错。目前火热的 TypeScript 正是 JavaScript 的一个超集，类型化了 JavaScript。

:::

::: warning

请不要把赋值语句的等号等同于数学的等号。比如下面的代码:

```js
let x = 10;
x = x + 2;
```

如果从数学上理解 `x = x + 2` 那无论如何是不成立的，在程序中，赋值语句先计算右侧的表达式 `x + 2`，得到结果 `12`，再赋给变量 `x`。由于 `x` 之前的值是 `10`，重新赋值后，`x` 的值变成 `12`。

:::

要显示变量的内容，可以用 `console.log(x)`，打开 Chrome 的控制台就可以看到结果。

```js
// 打印变量 x

var x = 100;
console.log(x);
```

::: tip

您可以使用 `alert()`，使用 `console.log()` 代替 `alert()` 的好处是可以避免弹出烦人的对话框。

:::

如果一个变量没有声明就直接使用，JavaScript 会报错，告诉您变量未定义。

```js
x;
// ReferenceError: x is not defined
```

## strict 模式

JavaScript 在设计之初甚至并不强制要求用 `var` 声明变量。这个设计错误带来了严重的后果: 如果一个变量没有通过 `var` 声明就被使用，那么该变量就自动被声明为全局变量:

```js
i = 10; // i 现在是全局变量
```

在同一个页面的不同的 JavaScript 文件中，如果都不用 `var` 申明，恰好都使用了变量 `i`，将造成变量 `i` 互相影响，产生难以调试的错误结果。

使用 `var` 声明的变量则不是全局变量，它的范围被限制在该变量被声明的函数体内(函数的概念将稍后讲解)，同名变量在不同的函数体内互不冲突。

为了修补 JavaScript 这一严重设计缺陷，ECMA 在后续规范中推出了 `strict` 模式，在 `strict` 模式下运行的 `JavaScript` 代码，强制使用变量前声明变量，未声明变量就使用的，将导致运行错误。

启用 `strict` 模式的方法是在 JavaScript 代码的第一行写上:

```js
"use strict";
```

这是一个字符串，不支持 `strict` 模式的浏览器会把它当做一个字符串语句执行，支持 `strict` 模式的浏览器将开启 `strict` 模式运行 JavaScript。

不用 `var` 声明的变量会被视为全局变量，为了避免这一缺陷，所有的 JavaScript 代码都应该使用 `strict` 模式。我们在后面编写的 JavaScript 代码将全部采用 `strict` 模式。

::: warning

微信小程序默认执行 `use strict`。而且 Mr.Hope 所有的项目都是在严格环境下执行。大家在学习时也强烈建议开启该环境模式。

:::
