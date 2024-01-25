---
date: 2021-00-19
title: Behavior
category: 小程序
---

`Behavior` 注册一个 behavior，接受一个 Object 类型的参数。

## 参数

| 定义段     | 类型         | 是否必填 | 描述                |
| ---------- | ------------ | -------- | ------------------- |
| properties | Object Map   | 否       | 同组件的属性        |
| data       | Object       | 否       | 同组件的数据        |
| methods    | Object       | 否       | 同自定义组件的方法  |
| behaviors  | String Array | 否       | 引入其它的 behavior |
| created    | Function     | 否       | 生命周期函数        |
| attached   | Function     | 否       | 生命周期函数        |
| ready      | Function     | 否       | 生命周期函数        |
| moved      | Function     | 否       | 生命周期函数        |
| detached   | Function     | 否       | 生命周期函数        |

::: details 代码示例

```js
// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String,
    },
  },
  data: {
    myBehaviorData: {},
  },
  attached() {},
  methods: {
    myBehaviorMethod() {},
  },
});
```

:::
