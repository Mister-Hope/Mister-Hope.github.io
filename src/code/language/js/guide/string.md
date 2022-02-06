---
title: 字符串
icon: string
date: 2019-09-16
category: JavaScript
tag:
  - 快速上手
---

JavaScript 的字符串就是用 `''` 或 `""` 括起来的字符表示。

<!-- more -->

::: tip

请注意，`''` 或 `""` 本身只是一种表示方式，不是字符串的一部分，因此，字符串 `'abc'` 只有 `a`，`b`，`c` 这 3 个字符。

:::

如果 `'` 本身也是一个字符，那就可以用 `""` 括起来，比如 `"I'm OK"` 包含的字符是 `I`，`'`，`m`，`空格`，`O`，`K` 这 6 个字符。

如果字符串内部既包含 `'` 又包含 `"` 怎么办? 可以用转义字符 `\` 来标识，比如:

```js
'I\'m \"OK\"!';
```

表示的字符串内容是: `I'm "OK"!`

转义字符 `\` 可以转义很多字符，比如 `\n` 表示换行，`\t` 表示制表符，字符 `\` 本身也要转义，所以 `\\` 表示的字符就是 `\`。

ASCII 字符可以以 `\x##` 形式的十六进制表示，例如:

```js
"\x41"; // 完全等同于 'A'
```

还可以用 `\u####` 表示一个 Unicode 字符:

```js
"\u4e2d\u6587"; // 完全等同于 '中文'
```

## 多行字符串

由于多行字符串用 `\n` 写起来比较费事，所以最新的 ES6 标准新增了一种多行字符串的表示方法，用反引号 `` ` `` 表示:

```js
`这是一个
多行
字符串`;
```

::: tip

反引号在键盘的 `ESC` 下方，数字键 1 的左边。

:::

## 模板字符串

要把多个字符串连接起来，可以用 `+` 号连接:

```js
const name = "小明";
const age = 20;
const message = "您好, " + name + ", 您今年" + age + "岁了!";

alert(message);
```

如果有很多变量需要连接，用 `+` 号就比较麻烦。ES6 新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量:

```js
const name = "小明";
const age = 20;
const message = `您好, ${name}, 您今年${age}岁了!`;

alert(message);
```

## 操作字符串

字符串常见的操作如下:

```js
const s = "Hello, world!";

s.length; // 13
```

要获取字符串某个指定位置的字符，使用类似 `Array` 的下标操作，索引号从 `0` 开始:

```js
const s = "Hello, world!";

s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回 undefined
```

::: warning

需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是也没有任何效果:

:::

```js
let s = "Test";

s[0] = "X";
alert(s); // s 仍然为 'Test'
```

JavaScript 为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串:

- toUpperCase

  `toUpperCase()` 把一个字符串全部变为大写:

  ```js
  const s = "Hello";
  s.toUpperCase(); // 返回 'HELLO'
  ```

- toLowerCase

  `toLowerCase()` 把一个字符串全部变为小写:

  ```js
  const s = "Hello";
  const lower = s.toLowerCase(); // 返回 'hello' 并赋值给变量 lower

  lower; // 'hello'
  ```

- indexOf

  `indexOf()` 会搜索指定字符串第一次出现的位置:

  ```js
  const s = "hello, world";

  s.indexOf("world"); // 返回 7
  s.indexOf("World"); // 没有找到指定的子串，返回 -1
  ```

- substring

  `substring()` 返回指定索引区间的子串:

  ```js
  const s = "hello, world";

  s.substring(0, 5); // 从索引 0 开始到 5(不包括 5)，返回 'hello'
  s.substring(7); // 从索引 7 开始到结束，返回 'world'
  ```

## 更多介绍

更系统的介绍详见 [数据结构 / 字符串](../types/string.md)
