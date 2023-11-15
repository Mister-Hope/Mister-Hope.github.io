---
date: 2020-10-09
title: 模板
icon: template
category: 小程序
---

WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。

<!-- more -->

## 定义模板

使用 `name` 属性，作为模板的名字。然后在 `<template />` 内定义代码片段，如:

```xml
<!--
  index: int
  msg: string
  time: string
-->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

## 使用模板

使用 `is` 属性，声明需要的使用的模板，然后将模板所需要的 `data` 传入，如:

```xml
<template is="msgItem" data="{{...item}}"/>
```

```js
Page({
  data: {
    item: {
      index: 0,
      msg: "this is a template",
      time: "2016-09-15",
    },
  },
});
```

`is` 属性可以使用 Mustache 语法，来动态决定具体需要渲染哪个模板:

```js
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block wx:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>
```

## 模板的作用域

模板拥有自己的作用域，只能使用 `data` 传入的数据以及模板定义文件中定义的 `<wxs />` 模块。

## 引用

WXML 提供两种文件引用方式 `import` 和 `include`。

### import

`import` 可以在该文件中使用目标文件定义的 template，如:

在 `item.wxml` 中定义了一个叫 item 的 template:

```xml
<!-- item.wxml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

在 `index.wxml` 中引用了 `item.wxml`，就可以使用 item 模板:

```xml
<import src="item.wxml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

### import 的作用域

`import` 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template。

如: C import B，B import A，在 C 中可以使用 B 定义的 template，在 B 中可以使用 A 定义的 template，但是 C 不能使用 A 定义的 template。

```xml
<!-- A.wxml -->
<template name="A">
  <text> A template </text>
</template>
<!-- B.wxml -->
<import src="a.wxml"/>
<template name="B">
  <text> B template </text>
</template>
<!-- C.wxml -->
<import src="b.wxml"/>
<template is="A"/>  <!-- Error! Can not use tempalte when not import A. -->
<template is="B"/>
```

### include

`include` 可以将目标文件除了 `<template />` `<wxs />` 外的整个代码引入，相当于是拷贝到 `include` 位置，如:

```xml
<!-- index.wxml -->
<include src="header.wxml"/>
<view> body </view>
<include src="footer.wxml"/>
<!-- header.wxml -->
<view> header </view>
<!-- footer.wxml -->
<view> footer </view>
```
