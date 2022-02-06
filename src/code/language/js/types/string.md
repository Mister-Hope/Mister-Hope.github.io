---
title: string
icon: string
date: 2019-09-21
category: JavaScript
---

## 定义

字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

```js
'abc'
"abc"
```

单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。

```js
'key = "value"'
"It's a long journey"
```

上面两个都是合法的字符串。

如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。

```js
'Did she say \'Hello\'?'
// "Did she say 'Hello'?"

"Did she say \"Hello\"?"
// "Did she say "Hello"?"
```

::: tip

由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号，故本教程遵守这个约定。当然，只使用双引号也完全可以。重要的是坚持使用一种风格，不要一会使用单引号表示字符串，一会又使用双引号表示。

Mr.Hope 的所有项目均强制字符串为单引号。

:::

字符串默认只能写在一行内，分成多行将会报错。

```js
'a
b
c'
// SyntaxError: Unexpected token ILLEGAL
```

上面代码将一个字符串分成三行，JavaScript 就会报错。

如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

```js
const longString =
  "Long \
long \
long \
string";

longString;
// "Long long long string"
```

上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分成多行书写。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符(比如空格)，否则会报错。

连接运算符(`+`)可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。

```js
const longString = "Long "
  + "long "
  + "long "
  + "string";
```

如果想输出多行字符串，有一种利用多行注释的变通方法。

```js
(function () {
  /*
line 1
line 2
line 3
*/
}
  .toString()
  .split("\n")
  .slice(1, -1)
  .join("\n"));
// "line 1
// line 2
// line 3"
```

上面的例子中，输出的字符串就是多行。

### 转义

反斜杠(\)在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

需要用反斜杠转义的特殊字符，主要有下面这些。

- `\0` : null(`\u0000`)
- `\b` : 后退键(`\u0008`)
- `\f` : 换页符(`\u000C`)
- `\n` : 换行符(`\u000A`)
- `\r` : 回车键(`\u000D`)
- `\t` : 制表符(`\u0009`)
- `\v` : 垂直制表符(`\u000B`)
- `\'` : 单引号(`\u0027`)
- `\"` : 双引号(`\u0022`)
- `\\` : 反斜杠(`\u005C`)

上面这些字符前面加上反斜杠，都表示特殊含义。

```js
console.log("1\n2");
// 1
// 2
```

上面代码中，`\n` 表示换行，输出的时候就分成了两行。

反斜杠还有三种特殊用法。

1. `\HHH`

   反斜杠后面紧跟三个八进制数(`000` 到 `377`)，代表一个字符。`HHH` 对应该字符的 Unicode 码点，比如 `\251` 表示版权符号。显然，这种方法只能输出 256 种字符。

1. `\xHH`

   `\x` 后面紧跟两个十六进制数(`00` 到 `FF`)，代表一个字符。`HH` 对应该字符的 Unicode 码点，比如 `\xA9` 表示版权符号。这种方法也只能输出 256 种字符。

1. `\uXXXX`

   `\u` 后面紧跟四个十六进制数(`0000` 到 `FFFF`)，代表一个字符。`XXXX` 对应该字符的 Unicode 码点，比如 `\u00A9` 表示版权符号。

   下面是这三种字符特殊写法的例子。

   ```js
   "\251"; // "©"
   "\xA9"; // "©"
   "\u00A9"; // "©"

   "\172" === "z"; // true
   "\x7A" === "z"; // true
   "\u007A" === "z"; // true
   ```

如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。

```js
"\a";
// "a"
```

上面代码中，`a` 是一个正常字符，前面加反斜杠没有特殊含义，反斜杠会被自动省略。

如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前面需要再加一个反斜杠，用来对自身转义。

```js
"Prev \\ Next";
// "Prev \ Next"
```

## 多行字符串

由于多行字符串用 `\n` 写起来比较费事，所以最新的 ES6 标准新增了一种多行字符串的表示方法，用反引号 ` 表示:

```js
`这是一个
多行
字符串 `;
```

::: tip

反引号在键盘的 **ESC** 下方，数字键 1 的左边。

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

## 字符串与数组

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符(位置编号从 0 开始)。

```js
const s = "hello";

s[0]; // "h"
s[1]; // "e"
s[4]; // "o"

// 直接对字符串使用方括号运算符
"hello"[1]; // "e"
```

如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回 `undefined`。

```js
"abc"[3]; // undefined
"abc"[-1]; // undefined
"abc"["x"]; // undefined
```

::: warning

需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值或进行删除操作，不会有任何错误，但是也没有任何效果:

```js
const s = "hello";

delete s[0];
s; // "hello"

s[1] = "a";
s; // "hello"

s[5] = "!";
s; // "hello"
```

:::

## length 属性

`length` 属性返回字符串的长度，该属性也是无法改变的。

```js
const s = "hello";

s.length; // 5

s.length = 3;
s.length; // 5

s.length = 7;
s.length; // 5
```

上面代码表示字符串的 `length` 属性无法改变，但是不会报错。

## 字符集

JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。

JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成 `\uxxxx` 的形式，其中 `xxxx` 代表该字符的 Unicode 码点。比如，`\u00A9` 代表版权符号。

```js
const s = "\u00A9";

s; // "©"
```

解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。

```js
const foo = "abc";

foo; // "abc"
```

上面代码中，第一行的变量名 `foo` 是 Unicode 形式表示，第二行是字面形式表示。JavaScript 会自动识别。

我们还需要知道，每个字符在 JavaScript 内部都是以 16 位(即 2 个字节)的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为 16 位长度，即 2 个字节。

但是，UTF-16 有两种长度: 对于码点在 `U+0000` 到 `U+FFFF` 之间的字符，长度为 16 位(即 2 个字节)；对于码点在 `U+10000` 到 `U+10FFFF` 之间的字符，长度为 32 位(即 4 个字节)，而且前两个字节在 `0xD800` 到 `0xDBFF` 之间，后两个字节在 `0xDC00` 到 `0xDFFF` 之间。举例来说，码点 `U+1D306` 对应的字符为`𝌆，`它写成 UTF-16 就是 `0xD834 0xDF06`。

JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到 `U+FFFF`，因此两字节足够表示了。后来，Unicode 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。上一节的那个四字节字符`𝌆`，浏览器会正确识别这是一个字符，但是 JavaScript 无法识别，会认为这是两个字符。

```js
"𝌆".length; // 2
```

上面代码中，JavaScript 认为`𝌆`的长度为 2，而不是 1。

总结一下，对于码点在 `U+10000` 到 `U+10FFFF` 之间的字符，JavaScript 总是认为它们是两个字符(`length` 属性为 2)。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。

## 操作字符串

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

## Base64 转码

有时，文本里面包含一些不可打印的符号，比如 ASCII 码 0 到 31 的符号都无法打印出来，这时可以使用 base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 base64 编码。

所谓 base64 就是一种编码方法，可以将任意值转成 0 ～ 9、A ～ Z、a-z、`+` 和`/`这 64 个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

JavaScript 原生提供两个 base64 相关的方法。

- `btoa()`: 任意值转为 base64 编码
- `atob()`: base64 编码转为原来的值

```js
const string = "Hello World!";

btoa(string); // "SGVsbG8gV29ybGQh"
atob("SGVsbG8gV29ybGQh"); // "Hello World!"
```

注意，这两个方法不适合非 ASCII 码的字符，会报错。

```js
btoa("您好"); // 报错
```

要将非 ASCII 码字符转为 base64 编码，必须中间插入一个转码环节，再使用这两个方法。

```js
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode("您好"); // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode("JUU0JUJEJUEwJUU1JUE1JUJE"); // "您好"
```

## 参考链接

- Mathias Bynens, [JavaScript’s internal character encoding: UCS-2 or UTF-16?](http://mathiasbynens.be/notes/javascript-encoding)
- Mathias Bynens, [JavaScript has a Unicode problem](http://mathiasbynens.be/notes/javascript-unicode)
- Mozilla Developer Network, [Window.btoa](https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa)
