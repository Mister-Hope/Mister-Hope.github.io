---
title: 数组
icon: array
date: 2019-09-16
category: JavaScript
tag:
  - 快速上手
---

本文对 JavaScript 中数组的创建、访问、操作进行了简要的介绍。

<!-- more -->

## 数组的创建

第一种方法是直接表示:

```js
[1, 2, 3.14, "Hello", null, true];
```

上述数组包含 6 个元素。数组用 `[]` 表示，元素之间用 `,` 分隔。

另一种创建数组的方法是通过 `Array()` 函数实现:

```js
new Array(1, 2, 3); // 创建了数组[1, 2, 3]
```

然而，出于代码的可读性考虑，强烈建议直接使用 `[]`。

## 访问元素

数组的元素可以通过索引来访问。请注意，索引的起始值为 `0`:

```js
let arr = [1, 2, 3.14, "Hello", null, true];
arr[0]; // 返回索引为0的元素，即1
arr[5]; // 返回索引为5的元素，即true
arr[6]; // 索引超出了范围，返回undefined
```

JavaScript 的 Array 可以包含任意数据类型，并通过索引来访问每个元素。

## 数组的长度

要取得 Array 的长度，直接访问 `length` 属性:

```js
const arr = [1, 2, 3.14, "Hello", null, true];

arr.length; // 6
```

请注意，直接给 Array 的 `length` 赋一个新的值会导致 Array 大小的变化:

```js
const arr = [1, 2, 3];

arr.length; // 3
arr.length = 6;
arr; // arr 变为 [1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr 变为 [1, 2]
```

Array 可以通过索引把对应的元素修改为新的值，因此，对 Array 的索引进行赋值会直接修改这个 Array:

```js
const arr = ["A", "B", "C"];

arr[1] = 99;
arr; // arr 现在变为 ['A', 99, 'C']
```

::: warning

如果通过索引赋值时，索引超过了范围，同样会引起 Array 大小的变化:

```js
const arr = [1, 2, 3];

arr[5] = "x";
arr; // arr 变为 [1, 2, 3, undefined, undefined, 'x']
```

大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript 的 Array 却不会有任何错误。在编写代码时，不建议直接修改 Array 的大小，访问索引时要确保索引不会越界。

:::

## 操作数组

### indexOf

与 String 类似，Arra。也可以通过 `indexOf()` 来搜索一个指定的元素第一次出现的位置:

```js
const arr = [10, 20, "30", "xyz"];

arr.indexOf(10); // 元素 10 的索引为 0
arr.indexOf(20); // 元素 20 的索引为 1
arr.indexOf(30); // 元素 30 没有找到，返回 -1
arr.indexOf("30"); // 元素 '30' 的索引为 2
```

::: warning

数字 `30` 和字符串 `'30'` 是不同的元素。

:::

### slice

`slice()` 就是对应 String 的 `substring()` 版本，它截取 Array 的部分元素，然后返回一个新的 Array:

```js
const arr = ["A", "B", "C", "D", "E", "F", "G"];

arr.slice(0, 3); // 从索引 0 开始，到索引 3 结束，但不包括索引 3: ['A', 'B', 'C']
arr.slice(3); // 从索引 3 开始到结束: ['D', 'E', 'F', 'G']
```

注意到 `slice()` 的起止参数包括开始索引，不包括结束索引。

如果不给 `slice()` 传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个 Array:

```js
const arr = ["A", "B", "C", "D", "E", "F", "G"];
const aCopy = arr.slice();

aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false
```

### push 和 pop

`push()` 向 Array 的末尾添加若干元素， `pop()` 则 Array 的最后一个元素删除掉:

```js
const arr = [1, 2];

arr.push("A", "B"); // 返回 Array 新的长度: 4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop() 返回 'B'
arr; // [1, 2, 'A']
arr.pop();
arr.pop();
arr.pop(); // 连续 pop 3次
arr; // []
arr.pop(); // 空数组继续 pop 不会报错，而是返回 undefined
arr; // []
```

### unshift 和 shift

如果要往 Array 的头部添加若干元素，使用 `unshift()` 方法， `shift()` 方法则把 Array 的第一个元素删掉:

```js
const arr = [1, 2];

arr.unshift("A", "B"); // 返回 Array 新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]

arr.shift();
arr.shift();
arr.shift(); // 连续 shift 3次

arr; // []
arr.shift(); // 空数组继续 shift 不会报错，而是返回 undefined
arr; // []
```

### sort

`sort()` 可以对当前 Array 进行排序，它会直接修改当前 Array 的元素位置，直接调用时，按照默认顺序排序:

```js
const arr = ["B", "C", "A"];

arr.sort();
arr; // ['A', 'B', 'C']
```

数组页可以按照自己指定的顺序排序，将在后面的函数中讲到。

### reverse

`reverse()` 把整个 Array 的元素给掉个个，也就是反转:

```js
const arr = ["one", "two", "three"];

arr.reverse();
arr; // ['three', 'two', 'one']
```

### splice

`splice()` 方法是修改 Array 的 “万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素:

```js
const arr = ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle"];

// 从索引 2 开始删 3 个元素,然后再添加 2 个元素:
arr.splice(2, 3, "Google", "Facebook"); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']

// 只添加,不删除:
arr.splice(2, 0, "Google", "Facebook"); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

### concat

`concat()` 方法把当前的 Array 和另一个 Array 连接起来，并返回一个新的 Array:

```js
const arr = ["A", "B", "C"];
const added = arr.concat([1, 2, 3]);

added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']
```

::: tip

需要留意的是: `concat()` 方法并没有修改当前 Array，而是返回了一个新的 Array。

:::

实际上， `concat()` 方法可以接收任意个元素和 Array，并且自动把 Array 拆开，然后全部添加到新的 Array 里:

```js
const arr = ["A", "B", "C"];

arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
```

### join

`join()` 方法是一个非常实用的方法，它把当前 Array 的每个元素都用指定的字符串连接起来，然后返回连接后的字符串:

```js
const arr = ["A", "B", "C", 1, 2, 3];

arr.join("-"); // 'A-B-C-1-2-3'
```

::: tip

若 Array 的元素不是字符串，将自动转换为字符串后再连接。

:::

## 多维数组

如果数组的某个元素又是一个 Array，则可以形成多维数组，例如:

```js
const arr = [[1, 2, 3], [400, 500, 600], "-"];
```

上述 Array 包含 3 个元素，其中头两个元素本身也是 Array。

## 数组小结

Array 提供了一种顺序存储一组元素的功能，并可以按索引来读写。

## 更多介绍

更多关于数组的详情参见 [数据结构 / 数组](../types/array.md)
