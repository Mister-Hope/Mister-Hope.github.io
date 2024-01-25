---
title: JSON
icon: json
date: 2019-10-14
category: JavaScript
---

`JSON` 是 `JavaScript Object Notation` 的缩写，它是一种数据交换格式。

<!-- more -->

在 JSON 出现之前，大家一直用 XML 来传递数据。因为 XML 是一种纯文本格式，所以它适合在网络上交换数据。XML 本身不算复杂，但是，加上 DTD、XSD、XPath、XSLT 等一大堆复杂的规范以后，任何正常的软件开发人员碰到 XML 都会感觉头大了，最后大家发现，即使您努力钻研几个月，也未必搞得清楚 XML 的规范。

终于，在 2002 年的一天，道格拉斯·克罗克福特 (Douglas Crockford) 同学为了拯救深陷水深火热同时又被某几个巨型软件企业长期愚弄的软件工程师，发明了 JSON 这种超轻量级的数据交换格式。

道格拉斯同学长期担任雅虎的高级架构师，自然钟情于 JavaScript。他设计的 JSON 实际上是 JavaScript 的一个子集。在 JSON 中，一共就这么几种数据类型:

- number: 和 JavaScript 的 number 完全一致；
- boolean: 就是 JavaScript 的 `true` 或 `false；`
- string: 就是 JavaScript 的 string；
- null: 就是 JavaScript 的 `null`；
- array: 就是 JavaScript 的 Array 表示方式—— `[]`；
- object: 就是 JavaScript 的 `{ ... }` 表示方式。

以及上面的任意组合。

并且，JSON 还定死了字符集必须是 UTF-8，表示多语言就没有问题了。为了统一解析，JSON 的字符串规定必须用双引号 `""`，Object 的键也必须用双引号 `""`。

由于 JSON 非常简单，很快就风靡 Web 世界，并且成为 ECMA 标准。几乎所有编程语言都有解析 JSON 的库，而在 JavaScript 中，我们可以直接使用 JSON，因为 JavaScript 内置了 JSON 的解析。

把任何 JavaScript 对象变成 JSON，就是把这个对象序列化成一个 JSON 格式的字符串，这样才能够通过网络传递给其他计算机。

如果我们收到一个 JSON 格式的字符串，只需要把它反序列化成一个 JavaScript 对象，就可以在 JavaScript 中直接使用这个对象了。

## 序列化

让我们先把小明这个对象序列化成 JSON 格式的字符串:

```js
"use strict";

const xiaoming = {
  name: "小明",
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  "middle-school": '"W3C" Middle School',
  skills: ["JavaScript", "Java", "Python", "Lisp"],
};

const s = JSON.stringify(xiaoming);
console.log(s);
```

要输出得好看一些，可以加上参数，按缩进输出:

```js
JSON.stringify(xiaoming, null, "  ");
```

结果:

```json
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" Middle School",
  "skills": ["JavaScript", "Java", "Python", "Lisp"]
}
```

第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入 `Array`:

```js
JSON.stringify(xiaoming, ["name", "skills"], "  ");
```

结果:

```json
{
  "name": "小明",
  "skills": ["JavaScript", "Java", "Python", "Lisp"]
}
```

还可以传入一个函数，这样对象的每个键值对都会被函数先处理:

```js
function convert(key, value) {
  if (typeof value === "string") return value.toUpperCase();

  return value;
}

JSON.stringify(xiaoming, convert, "  ");
```

上面的代码把所有属性值都变成大写:

```json
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" MIDDLE SCHOOL",
  "skills": ["JAVASCRIPT", "JAVA", "PYTHON", "LISP"]
}
```

如果我们还想要精确控制如何序列化小明，可以给 `xiaoming` 定义一个 `toJSON()` 的方法，直接返回 JSON 应该序列化的数据:

```js
const xiaoming = {
  name: "小明",
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  "middle-school": '"W3C" Middle School',
  skills: ["JavaScript", "Java", "Python", "Lisp"],
  toJSON() {
    return {
      // 只输出name和age，并且改变了key:
      Name: this.name,
      Age: this.age,
    };
  },
};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
```

## 反序列化

拿到一个 JSON 格式的字符串，我们直接用 `JSON.parse()` 把它变成一个 JavaScript 对象:

```js
JSON.parse("[1,2,3,true]"); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse("true"); // true
JSON.parse("123.45"); // 123.45
```

`JSON.parse()` 还可以接收一个函数，用来转换解析出的属性:

```js
"use strict";

const obj = JSON.parse('{"name":"小明","age":14}', (key, value) =>
  key === "name" ? `${value}同学` : value,
);

console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}
```

在 JavaScript 中使用 JSON，就是这么简单!
