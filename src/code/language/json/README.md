---
title: JSON 教程
icon: json
date: 2020-07-25
category: JSON
---

JSON: JavaScript Object Notation(JavaScript 对象表示法)

- JSON 是存储和交换文本信息的语法。类似 XML。

- JSON 比 XML 更小、更快，更易解析。

- JSON 是轻量级的文本数据交换格式

- JSON 独立于语言: JSON 使用 JavaScript 语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。目前非常多的动态(PHP，JSP，.NET)编程语言都支持 JSON。

- JSON 具有自我描述性，更易理解

<!-- more -->

## JSON 值

JSON 值可以是:

- 数字(整数或浮点数)
- 字符串(在双引号中)
- 逻辑值(`true` 或 `false`)
- 数组(在中括号中)
- 对象(在大括号中)
- null

## JSON 数字

JSON 数字可以是整型或者浮点型:

**例:**

- `5201314`
- `-1`
- `3.141592654`

## JSON 布尔值

JSON 布尔值可以是 `true` 或者 `false`

## JSON 字符串

JSON 字符串需要用双括号 `"` 包含，如果内部含有英文引号 `"`，需要使用 `\` 转义。

**例:**

- `"Mr.Hope is handsome"`
- `"春眠不觉晓，处处闻啼鸟"`
- `"A saying goes: \"Great hopes make great man.\""`

## JSON 对象

JSON 对象在大括号 `{}` 中书写以 `键: 值` 对的方式书写，不同键值对之间用 `,` 分隔。

**例:**

```json
{
  "tag": "text",
  "heading": "校园卡说明",
  "text": "校园卡是东师的金融消费卡"
}
```

## JSON 数组

JSON 数组在中括号 `[]` 中书写，不同元素间用 `,` 隔开。

## JSON null

JSON 可以设置 `null` 值
