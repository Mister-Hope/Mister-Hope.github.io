---
title: 循环
icon: loop
date: 2019-09-16
category: JavaScript
tag:
  - 快速上手
---

循环语句用于重复执行某个操作，它有多种形式，JavaScript 的循环有两种: `while` 循环和 `for` 循环。

<!-- more -->

试设我们想要计算 $1 + 2 + 3$，我们可以直接写表达式:

```js
1 + 2 + 3; // 6
```

要计算 $1 + 2 + \dots + 10$，勉强也能写出来。

但是，要计算 $1 + 2 + \dots + 10000$，直接写表达式就不可能了。

为了让计算机能计算成千上万次的重复运算，我们就需要循环语句。

## while 循环

### while

`while` 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。

```js
while (条件)
  语句;
// 或者
while (条件) 语句;
```

`while` 语句的循环条件是一个表达式，必须放在圆括号中。代码块部分，如果只有一条语句，可以省略大括号，否则就必须加上大括号。

```js
while (条件) {
  语句;
}
```

这里是一个例子[^whiledemo]。

[^whiledemo]: while 循环案例

    比如我们要计算 100 以内所有奇数之和，可以用 `while` 循环实现:

    ```js
    let x = 0;
    let n = 99;

    while (n > 0) {
      x = x + n;
      n = n - 2;
    }
    x; // 2500
    ```

    在循环内部变量 `n` 不断自减，直到变为 `-1` 时，不再满足 `while` 条件，循环退出。

> `for` 循环在已知循环的初始和结束条件时非常有用。而上述忽略了条件的 `for` 循环容易让人看不清循环的逻辑，此时用 `while` 循环更佳。

### do ... while

while 循环还包含了 `do { ... } while()` 循环，它和 `while` 循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件:

```js
let n = 0;

do {
  n = n + 1;
} while (n < 100);
n; // 100
```

用 `do { ... } while()` 循环要小心，循环体会至少执行 `1` 次，而 `for` 和 `while` 循环则可能一次都不执行。

## for

`for` 语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。

```js
for (初始化表达式; 条件; 递增表达式)
  语句;
// 或者
for (初始化表达式; 条件; 递增表达式) {
  语句;
}
```

`for` 语句后面的括号里面，有三个表达式。

- 初始化表达式(initialize): 确定循环变量的初始值，只在循环开始时执行一次。
- 条件表达式(test): 每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。
- 递增表达式(increment): 每轮循环的最后一个操作，通常用来递增循环变量。

这里是一个例子[^fordemo]。

[^fordemo]: **for 循环案例**

    ```js
    let x = 0;
    let i;

    for (i = 1; i <= 10000; i++) {
      x = x + i;
    }
    x; // 50005000
    ```

    让我们来分析一下这个例子中 for 循环的控制条件:

    - `i = 1` 这是初始条件，将变量 `i` 置为 `1`；
    - `i <= 10000` 这是判断条件，满足时就继续循环，不满足就退出循环；
    - `i++` 这是每次循环后的递增条件，由于每次循环后变量 `i` 都会加 `1`，因此它终将在若干次循环后不满足判断条件 `i <= 10000` 而退出循环。

for 循环最常用的地方是利用索引来遍历数组:

```js
let arr = ["Apple", "Google", "Microsoft"];
let i, x;

for (i = 0; i < arr.length; i++) {
  x = arr[i];
  console.log(x);
}
```

`for` 语句的三个部分(initialize、test、increment)，可以省略任何一个，也可以全部省略。

如果没有退出循环的判断条件，就必须使用 `break` 语句退出循环，否则就是死循环:

```js
let x = 0;
for (;;) {
  // 将无限循环下去
  if (x > 100) {
    break; // 通过if判断来退出循环
  }
  x++;
}
```

### for ... in

for 循环的一个变体是 `for ... in` 循环，它可以把一个对象的所有属性依次循环出来:

```js
let o = {
  name: "Jack",
  age: 20,
  city: "Beijing",
};

for (let key in o) {
  console.log(key); // 'name', 'age', 'city'
}
```

要过滤掉对象继承的属性，用 `hasOwnProperty()` 来实现。[^hasownproperty]

[^hasownproperty]: **过滤掉对象继承的属性**

    ```js
    let o = {
      name: "Jack",
      age: 20,
      city: "Beijing",
    };

    for (let key in o) {
      if (o.hasOwnProperty(key)) console.log(key); // 'name', 'age', 'city'
    }
    ```

同时，`for ... in` 循环可以直接循环 Array。[^array]

[^array]:
    Array 也是对象，而它的每个元素的索引被视为对象的属性，因此，`for ... in` 循环可以直接循环出 Array 的索引:

    ```js
    let a = ["A", "B", "C"];

    for (let i in a) {
      console.log(i); // '0', '1', '2'
      console.log(a[i]); // 'A', 'B', 'C'
    }
    ```


    ::: warning

    `for ... in` 对 Array 的循环得到的是 **`String`** 而不是 `Number`。

    :::

## break 和 continue 语句

`break` 语句和 `continue` 语句都具有跳转作用，可以让代码不按既有的顺序执行。

- `break` 语句用于跳出代码块或循环。

  ```js
  let i = 0;

  while (i < 100) {
    console.log("i 当前为: " + i);
    i++;
    if (i === 10) break;
  }
  ```

  上面代码只会执行 10 次循环，一旦 `i` 等于 10，就会跳出循环。
  `for` 循环也可以使用 `break` 语句跳出循环。

  ```js
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) break;
  }
  // 0
  // 1
  // 2
  // 3
  ```

  上面代码执行到 `i` 等于 3，就会跳出循环。

- `continue` 语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。

  ```js
  let i = 0;
  while (i < 100) {
    i++;
    if (i % 2 === 0) continue;
    console.log("i 当前为: " + i);
  }
  ```

  上面代码只有在 `i` 为奇数时，才会输出 `i` 的值。如果 `i` 为偶数，则直接进入下一轮循环。

如果存在多重循环，不带参数的 `break` 语句和 `continue` 语句都只针对最内层循环。

### 标签(label)

JavaScript 语言允许，语句的前面有标签(label)，相当于定位符，用于跳转到程序的任意位置，标签的格式如下。

```js
label: 语句;
```

标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。
标签通常与 `break` 语句和 `continue` 语句配合使用，跳出特定的循环。

```js
top: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break top;
    console.log("i=" + i + ", j=" + j);
  }
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```

上面代码为一个双重循环区块，`break` 命令后面加上了 `top` 标签(注意，`top` 不用加引号)，满足条件时，直接跳出双层循环。如果 `break` 语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。

标签也可以用于跳出代码块。

```js
foo: {
  console.log(1);
  break foo;
  console.log("本行不会输出");
}
console.log(2);
// 1
// 2
```

上面代码执行到 `break foo`，就会跳出区块。

`continue` 语句也可以与标签配合使用。

```js
top: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) continue top;
    console.log("i=" + i + ", j=" + j);
  }
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2
```

上面代码中，`continue` 命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮外层循环。如果 `continue` 语句后面不使用标签，则只能进入下一轮的内层循环。

## 循环小结

- 循环是让计算机做重复任务的有效的方法，有些时候，如果代码写得有问题，会让程序陷入“死循环”，也就是永远循环下去。JavaScript 的死循环会让浏览器无法正常显示或执行当前页面的逻辑，有的浏览器会直接挂掉，有的浏览器会在一段时间后提示您强行终止 JavaScript 的执行，因此，要特别注意死循环的问题。

- 在编写循环代码时，务必小心编写初始条件和判断条件，尤其是边界值。特别注意 `i < 100` 和 `i <= 100` 是不同的判断逻辑。
