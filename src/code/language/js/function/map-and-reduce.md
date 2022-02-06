---
title: map & reduce
icon: map
date: 2019-10-05
category: JavaScript
---

如果您读过 Google 的那篇大名鼎鼎的论文 [“MapReduce: Simplified Data Processing on Large Clusters”](https://research.google.com/archive/mapreduce.html)(要翻墙)，您就能大概明白 map/reduce 的概念。

<!-- more -->

## map

举例说明，比如我们有一个函数 `f(x)=x2`，要把这个函数作用在一个数组 `[1, 2, 3, 4, 5, 6, 7, 8, 9]` 上，就可以用 `map` 实现如下:

![map](../assets/map.png)

由于 `map()` 方法定义在 JavaScript 的 Array 中，我们调用 Array 的 `map()` 方法，传入我们自己的函数，就得到了一个新的 Array 作为结果:

```js
"use strict";

const pow = (x) => x * x;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const results = arr.map(pow);

console.log(results); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
```

注意: `map()` 传入的参数是 `pow`，即函数对象本身。

您可能会想，不需要 `map()`，写一个循环，也可以计算出结果:

```js
const f = (x) => x * x;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = [];

for (let i = 0; i < arr.length; i++) result.push(f(arr[i]));
```

的确可以，但是，从上面的循环代码，我们无法一眼看明白“把 f(x) 作用在 Array 的每一个元素并把结果生成一个新的 Array”。

所以，`map()` 作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的 f(x)=x2，还可以计算任意复杂的函数，比如，把 Array 的所有数字转为字符串:

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
```

只需要一行代码。

### reduce

再看 `reduce` 的用法。Array 的 `reduce()` 把一个函数作用在这个 Array 的 `[x1, x2, x3...]` 上，这个函数必须接收两个参数，`reduce()` 把结果继续和序列的下一个元素做累积计算，其效果就是:

```js
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4);
```

比方说对一个 Array 求和，就可以用 `reduce` 实现:

```js
const arr = [1, 3, 5, 7, 9];

arr.reduce((x, y) => x + y); // 25
```

要把 `[1, 3, 5, 7, 9]` 变换成整数 13579，`reduce()` 也能派上用场:

```js
const arr = [1, 3, 5, 7, 9];

arr.reduce((x, y) => x * 10 + y); // 13579
```

如果我们继续改进这个例子，想办法把一个字符串 `13579` 先变成 Array —— `[1, 3, 5, 7, 9]`，再利用 `reduce()` 就可以写出一个把字符串转换为 Number 的函数。

## filter

`filter` 也是一个常用的操作，它用于把 Array 的某些元素过滤掉，然后返回剩下的元素。

和 `map()` 类似，Array 的 `filter()` 也接收一个函数。和 `map()` 不同的是，`filter()` 把传入的函数依次作用于每个元素，然后根据返回值是 `true` 还是 `false` 决定保留还是丢弃该元素。

例如，在一个 Array 中，删掉偶数，只保留奇数，可以这么写:

```js
const arr = [1, 2, 4, 5, 6, 9, 10, 15];
const r = arr.filter((x) => x % 2 !== 0);

r; // [1, 5, 9, 15]
```

把一个 Array 中的空字符串删掉，可以这么写:

```js
const arr = ["A", "", "B", null, undefined, "C", "  "];
const r = arr.filter((s) => s && s.trim());

r; // ['A', 'B', 'C']
```

可见用 `filter()` 这个高阶函数，关键在于正确实现一个“筛选”函数。

### 回调函数

`filter()` 接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示 Array 的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身:

```js
const arr = ["A", "B", "C"];
const r = arr.filter((element, index, self) => {
  console.log(element); // 依次打印 'A', 'B', 'C'
  console.log(index); // 依次打印 0, 1, 2
  console.log(self); // self 就是变量 arr
  return true;
});
```

利用 `filter`，可以巧妙地去除 `Array` 的重复元素:

```js
"use strict";

let r;
const arr = [
  "apple",
  "strawberry",
  "banana",
  "pear",
  "apple",
  "orange",
  "orange",
  "strawberry",
];

r = arr.filter((element, index, self) => self.indexOf(element) === index);

console.log(r.toString());
```

去除重复元素依靠的是 `indexOf` 总是返回第一个元素的位置，后续的重复元素位置与 `indexOf` 返回的位置不相等，因此被 `filter` 滤掉了。

## sort

### 排序算法

排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个对象呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。通常规定，对于两个元素 `x` 和 `y`，如果认为 `x < y`，则返回 `-1`，如果认为 `x == y`，则返回 `0`，如果认为 `x > y`，则返回 `1`，这样，排序算法就不用关心具体的比较过程，而是根据比较结果直接排序。

JavaScript 中 Array 的 `sort()` 方法就是用于排序的，但是排序结果可能让您大吃一惊:

```js
// 看上去正常的结果:
["Google", "Apple", "Microsoft"].sort(); // ['Apple', 'Google', 'Microsoft'];

// apple 排在了最后:
["Google", "apple", "Microsoft"].sort(); // ['Google', 'Microsoft", 'apple']

// 无法理解的结果:
[10, 20, 1, 2].sort(); // [1, 10, 2, 20]
```

第二个排序把 `apple` 排在了最后，是因为字符串根据 ASCII 码进行排序，而小写字母 `a` 的 ASCII 码在大写字母之后。

第三个排序结果是什么鬼? 简单的数字排序都能错?

这是因为 `Array` 的 `sort()` 方法默认把所有元素先转换为 `String` 再排序，结果 `'10'` 排在了 `'2'` 的前面，因为字符 `'1'` 比字符 `'2'` 的 ASCII 码小。

如果不知道 `sort()` 方法的默认排序规则，直接对数字排序，绝对栽进坑里!

幸运的是，`sort()` 方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。

要按数字大小排序，我们可以这么写:

```js
"use strict";

const arr = [10, 20, 1, 2];

arr.sort((x, y) => {
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
});
console.log(arr); // [1, 2, 10, 20]
```

如果要倒序排序，我们可以把大的数放前面:

```js
const arr = [10, 20, 1, 2];

arr.sort((x, y) => {
  if (x < y) return 1;
  if (x > y) return -1;

  return 0;
}); // [20, 10, 2, 1]
```

默认情况下，对字符串排序，是按照 ASCII 的大小比较的，现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能定义出忽略大小写的比较算法就可以:

```js
const arr = ["Google", "apple", "Microsoft"];

arr.sort((s1, s2) => {
  x1 = s1.toUpperCase();
  x2 = s2.toUpperCase();

  if (x1 < x2) return -1;
  if (x1 > x2) return 1;

  return 0;
}); // ['apple', 'Google', 'Microsoft']
```

忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写(或者都变成小写)，再比较。

从上述例子可以看出，高阶函数的抽象能力是非常强大的，而且，核心代码可以保持得非常简洁。

最后友情提示，`sort()` 方法会直接对 Array 进行修改，它返回的结果仍是当前 Array:

```js
const a1 = ["B", "A", "C"];
const a2 = a1.sort();

a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1 和 a2 是同一对象
```
