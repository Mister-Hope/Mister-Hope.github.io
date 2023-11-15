---
date: 2020-10-09
title: 小程序简易开发指南
icon: creative
category: 小程序
---

这里是开发前应当了解的内容，阅读时长大约为五分钟。

## json 文件中合法的值有哪些

合法的值大家编辑用到的一共有五种:
**number**(数字)、**boolean**(布尔值)、**string**(字符串)、**array**(数组)和**object**(对象)。

## json 介绍

### 对象

对象的一组键值对，使用冒号结构表示。

```yml
animal: pets
```

转为 JavaScript 如下。

```js
{
  animal: "pets";
}
```

Yaml 也允许另一种写法，将所有键值对写成一个行内对象。

```yml
hash: { name: Steve, foo: bar }
```

转为 JavaScript 如下。

```js
{ hash: { name: 'Steve', foo: 'bar' } }
```

### 数组

一组连词线开头的行，构成一个数组。

```yml
- Cat
- Dog
- Goldfish
```

转为 JavaScript 如下。

```js
["Cat", "Dog", "Goldfish"];
```

数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。

```yml
- - Cat
  - Dog
  - Goldfish
```

转为 JavaScript 如下。

```js
[["Cat", "Dog", "Goldfish"]];
```

数组也可以采用行内表示法。

```yml
animal: [Cat, Dog]
```

转为 JavaScript 如下。

```js
{
  animal: ["Cat", "Dog"];
}
```

### 复合结构

对象和数组可以结合使用，形成复合结构。

```yml
languages:
  - Ruby
  - Perl
  - Python
websites:
  YAML: yaml.org
  Ruby: ruby-lang.org
  Python: python.org
  Perl: use.perl.org
```

转为 JavaScript 如下。

```yml
{
  languages: ["Ruby", "Perl", "Python"],
  websites:
    {
      YAML: "yaml.org",
      Ruby: "ruby-lang.org",
      Python: "python.org",
      Perl: "use.perl.org",
    },
}
```

### 纯量

纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量。

- 字符串
- 布尔值
- 整数
- 浮点数
- Null
- 时间
- 日期

数值直接以字面量的形式表示。

```yml
number: 12.30
```

转为 JavaScript 如下。

```js
{
  number: 12.3;
}
```

布尔值用 `true` 和 `false` 表示。

```yml
isSet: true
```

转为 JavaScript 如下。

```js
{
  isSet: true;
}
```

### 如何打开或编辑 json

推荐使用 VS Code，具体详见[VS Code 简单介绍](../../../software/vscode/simple.md)。

### json 中的值

合法的值大家编辑用到的一共有五种:

- **number**(数字)
- **boolean**(布尔值)
- **string**(字符串)
- **array**(数组)
- **object**(对象)

### 什么是**number**

**number**是可以直接参与运算数值，整数和小数直接表示

**例**:

- `5201314`
- `-1`
- `3.141592654`

**总结:** 想要表达具体的数量使用数字，直接表示即可。

### 什么是**boolean**

**boolean**是布尔值，表示真假。只有两个: `true` 和 `false`。

### 什么是**string**

**string**是字符串，用于表达一串文本。在文本内容外面套上英文双引号 `"` 即可表示**string**。

**例**:

- `"Mr.Hope is handsome"`
- `"春眠不觉晓，处处闻啼鸟"`
- `"A saying goes: \"Great hopes make great man.\""`

**请注意:** `1` 是 **number**，可以参加运算；`"1"` 是**string**，字符串内容为 1；同理，`"true"` 是**string**，`true` 才是表示“真”的 **boolean**。

**其他注意事项:** 如果想要在字符串中表示回车，请输入 `\n`。

### 什么是**array**

Array 中文名叫数组，它是用 `[` `]` 包括起来的、用英文逗号(comma)分隔开的内容的集合，每个项叫数组(array)的一个元素(element)。每个元素(element)可以是其他的任何值类型。

**例**:

- `[1, 2, 3]`
- `[-5, "abc", true]`
  (在此数组中第一项是数字 `-5`，第二项是字符串 `"abc"`，第三项是布尔值 `true`，该数组是合法的，数组的元素也可以是接下来的 object)
- `["小程序必火", "666", "Mr.Hope有点帅"]`

::: warning

- `[1,2,3,]` 是非法的，因为最后多了一个逗号导致格式不正确
- `[1,2,3` 也是非法的，因为没有结束标识符 `]` 导致格式不正确

:::

**总结**:

**array** 是一个包含若干 **元素** 的集合，用 `[` `]` 表示，每一个 **元素** 之间需要用 **英文逗号** 隔开，即 `array = [element1 , element2 , ...]`，其中**元素**可以是其他数据类型。

### 什么是**object**

**object** 中文名叫对象(不是您想的那个对象)，它是用 `{` `}` 包括起来的用逗号分隔开的一堆属性(property)的集合，每个属性(property)是一个不可重复的字符串，对应着一个值(value)，用冒号对应。该值(value)可以是任何内容。

**例**:

- `{"a":1,"b":"2","c":true,"d":"false"}`

  该对象有四项，分别是:

  - 值为数字 `1` 的 `a`
  - 值为字符串 `2` 的 `b`
  - 值为布尔值 真(`true`)的 `c`
  - 值为字符串 `false` 的 `d`

- `{"tag":"p","head":"校园卡说明","text":"校园卡是东师的金融消费卡"}`。

::: warning

- `{a:1,b:2}` 是非法的，因为属性不是一个字符串
- `{"a":1,"a":2}` 是非法的，因为属性 `a` 出现了两次无法确定其值
- `{a:1,b:2,}`、`a:1,b:2}` 是非法的，因为格式不正确。

:::

**总结**:

**object**是一个拥有若干**property**的集合，用 `{` `}` 表示，每一个**property**都是不可重复的**string**，而每个**property**对应着一个**value**即 `object = { property1 : value1 , proprety2 : value2 , ... }`，其中**value**可以是其他数据类型。

::: tip

使用 VS Code 可以格式化**object**，可以使**object**更易于阅读。

如:

`{"tag":"p","head":"校园卡说明","text":"校园卡是东师的金融消费卡"}`

可以格式化为:

```json
{
  "tag": "text",
  "heading": "校园卡说明",
  "text": "校园卡是东师的金融消费卡"
}
```

:::

### 关于值的嵌套

由于**array**的**element**和 **object** 的**value**可以是五种值的任一个，故可以发生嵌套。

**如**:

`[{"a":"Mr.Hope"},{"b":"Ms.Hope"}]`

就是一个数组: `[ element1 , element2 ]`，而该数组的**element1**是**object**`{ "a" : "Mr.Hope" }`，**element2**是**object**`{ "b" : "Ms.Hope" }`
