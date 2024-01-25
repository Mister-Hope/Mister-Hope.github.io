---
date: 2021-00-19
title: 列表渲染
icon: loop
category: 小程序
---

## wx:for

在组件上使用 `wx:for` 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`

```xml
<view wx:for="{{array}}">
  {{index}}: {{item.message}}
</view>
```

```js
Page({
  data: {
    array: [
      {
        message: "foo",
      },
      {
        message: "bar",
      },
    ],
  },
});
```

使用 `wx:for-item` 可以指定数组当前元素的变量名，

使用 `wx:for-index` 可以指定数组当前下标的变量名:

```xml
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

`wx:for` 也可以嵌套，下边是一个九九乘法表

```xml
<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
    <view wx:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
```

## block wx:for

类似 `block wx:if`，也可以将 `wx:for` 用在 `<block />` 标签上，以渲染一个包含多节点的结构块。例如:

```xml
<block wx:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

## wx:key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态(如 input 中的输入内容，switch 的选中状态)，需要使用 `wx:key` 来指定列表中项目的唯一的标识符。

`wx:key` 的值以两种形式提供

1. 字符串，代表在 `for` 循环的 `array` 中 `item` 的某个 `property`，该 `property` 的值需要是列表中唯一的字符串或数字，且不能动态改变。
1. 保留关键字 `*this` 代表在 `for` 循环中的 `item` 本身，这种表示需要 `item` 本身是一个唯一的字符串或者数字.

当数据改变触发渲染层重新渲染的时候，会校正带有 `key` 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

如不提供 `wx:key`，会报一个 warning， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。

示例代码:

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/tpg5tKmv6kZt)

```xml
<switch wx:for="{{objectArray}}" wx:key="unique" style="display: block;"> {{item.id}} </switch>
<button bindtap="switch"> Switch </button>
<button bindtap="addToFront"> Add to the front </button>

<switch wx:for="{{numberArray}}" wx:key="*this" style="display: block;"> {{item}} </switch>
<button bindtap="addNumberToFront"> Add to the front </button>
```

```js
Page({
  data: {
    objectArray: [
      { id: 5, unique: "unique_5" },
      { id: 4, unique: "unique_4" },
      { id: 3, unique: "unique_3" },
      { id: 2, unique: "unique_2" },
      { id: 1, unique: "unique_1" },
      { id: 0, unique: "unique_0" },
    ],
    numberArray: [1, 2, 3, 4],
  },
  switch(e) {
    const length = this.data.objectArray.length;

    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length);
      const y = Math.floor(Math.random() * length);
      const temp = this.data.objectArray[x];

      this.data.objectArray[x] = this.data.objectArray[y];
      this.data.objectArray[y] = temp;
    }

    this.setData({
      objectArray: this.data.objectArray,
    });
  },
  addToFront(e) {
    const length = this.data.objectArray.length;

    this.data.objectArray = [{ id: length, unique: `unique_${length}` }].concat(
      this.data.objectArray,
    );
    this.setData({
      objectArray: this.data.objectArray,
    });
  },
  addNumberToFront(e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(
      this.data.numberArray,
    );
    this.setData({
      numberArray: this.data.numberArray,
    });
  },
});
```

::: tip

当 `wx:for` 的值为字符串时，会将字符串解析成字符串数组

```xml
<view wx:for="array">
  {{item}}
</view>
```

等同于

```xml
<view wx:for="{{['a','r','r','a','y']}}">
  {{item}}
</view>
```

:::

::: warning

花括号和引号之间如果有空格，将最终被解析成为字符串

```xml
<view wx:for="{{[1,2,3]}} ">
  {{item}}
</view>
```

等同于

```xml
<view wx:for="{{[1,2,3] + ' '}}" >
  {{item}}
</view>
```

:::
