---
date: 2020-10-09
title: 页面交互 API
icon: change
category: 小程序
---

本页面介绍的一系列 API 都是和小程序页面交互(用户交互)相关的 API。

小程序与用户交互合理，并在合适的时机向用户展示相应状态可以让用户的沉浸感更强。

<!-- more -->

::: tip 概要

- `wx.showToast`: 展示消息提示框
- `wx.hideToast`: 隐藏消息提示框

  用于展示一些不是很重要的提示

- `wx.showLoading`: 显示加载提示
- `wx.hideLoading`: 隐藏加载提示

  在合适的时候显示加载中状态，可以减轻用户的焦虑感。

- `wx.showModal`: 显示一个弹窗

  这是希望提示用户或者让用户一个两项选择的好方式

- `wx.showActionSheet`

  希望用户在多个预设动作之间进行选择时可以使用此 API

:::

## 注意事项

- `wx.showLoading` 和 `wx.showToast` 同时只能显示一个
- `wx.showToast` 应与 `wx.hideToast` 配对使用，`wx.showLoading` 应与 `wx.hideLoading` 配对使用，不能混用

## wx.showToast(Object object)

显示消息提示框

### showToast 参数

Object object

| 属性     | 类型     | 默认值      | 必填 | 说明                                           |
| -------- | -------- | ----------- | ---- | ---------------------------------------------- |
| title    | string   |             | 是   | 提示的内容                                     |
| icon     | string   | `'success'` | 否   | 图标                                           |
| image    | string   |             | 否   | 自定义图标的本地路径，image 的优先级高于 icon  |
| duration | number   | `1500`      | 否   | 提示的延迟时间                                 |
| mask     | boolean  | `false`     | 否   | 是否显示透明蒙层，防止触摸穿透                 |
| success  | function |             | 否   | 接口调用成功的回调函数                         |
| fail     | function |             | 否   | 接口调用失败的回调函数                         |
| complete | function |             | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |

object.icon 的合法值

| 值      | 说明                                                              |
| ------- | ----------------------------------------------------------------- |
| success | 显示成功图标，此时 `title` 文本最多显示 7 个汉字长度              |
| loading | 显示加载图标，此时 `title` 文本最多显示 7 个汉字长度              |
| none    | 不显示图标，此时 `title` 文本最多可显示两行，1.9.0 及以上版本支持 |

示例代码

```js
wx.showToast({
  title: "成功",
  icon: "success",
  duration: 2000,
});
```

## wx.hideToast(Object object)

隐藏消息提示框

参数

Object object

| 属性     | 类型     | 必填 | 说明                                           |
| -------- | -------- | ---- | ---------------------------------------------- |
| success  | function | 否   | 接口调用成功的回调函数                         |
| fail     | function | 否   | 接口调用失败的回调函数                         |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |

## wx.showModal(Object object)

显示模态对话框

### showModal 参数

Object object

| 属性         | 类型     | 默认值  | 必填 | 说明                                               |
| ------------ | -------- | ------- | ---- | -------------------------------------------------- |
| title        | string   |         | 否   | 提示的标题                                         |
| content      | string   |         | 否   | 提示的内容                                         |
| showCancel   | boolean  | true    | 否   | 是否显示取消按钮                                   |
| cancelText   | string   | '取消'  | 否   | 取消按钮的文字，最多 4 个字符                      |
| cancelColor  | string   | #000000 | 否   | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 |
| confirmText  | string   | '确定'  | 否   | 确认按钮的文字，最多 4 个字符                      |
| confirmColor | string   | #576B95 | 否   | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 |
| success      | function |         | 否   | 接口调用成功的回调函数                             |
| fail         | function |         | 否   | 接口调用失败的回调函数                             |
| complete     | function |         | 否   | 接口调用结束的回调函数(调用成功、失败都会执行)     |

object.success 回调函数

参数

Object res

| 属性    | 类型    | 说明                                                                                  | 最低版本 |
| ------- | ------- | ------------------------------------------------------------------------------------- | -------- |
| confirm | boolean | 为 true 时，表示用户点击了确定按钮                                                    |          |
| cancel  | boolean | 为 true 时，表示用户点击了取消(用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭) | 1.1.0    |

示例代码

```js
wx.showModal({
  title: "提示",
  content: "这是一个模态弹窗",
  success: (res) => {
    if (res.confirm) console.log("用户点击确定");
    else if (res.cancel) console.log("用户点击取消");
  },
});
```

## wx.showLoading(Object object)

显示 loading 提示框。需主动调用 `wx.hideLoading` 才能关闭提示框

### showLoading 参数

Object object

| 属性     | 类型     | 默认值 | 必填 | 说明                                           |
| -------- | -------- | ------ | ---- | ---------------------------------------------- |
| title    | string   |        | 是   | 提示的内容                                     |
| mask     | boolean  | false  | 否   | 是否显示透明蒙层，防止触摸穿透                 |
| success  | function |        | 否   | 接口调用成功的回调函数                         |
| fail     | function |        | 否   | 接口调用失败的回调函数                         |
| complete | function |        | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |

示例代码

```js
wx.showLoading({
  title: "加载中",
});

setTimeout(() => {
  wx.hideLoading();
}, 2000);
```

## wx.hideLoading(Object object)

隐藏 loading 提示框

### hideLoading 参数

Object object

| 属性     | 类型     | 必填 | 说明                                           |
| -------- | -------- | ---- | ---------------------------------------------- |
| success  | function | 否   | 接口调用成功的回调函数                         |
| fail     | function | 否   | 接口调用失败的回调函数                         |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |

## wx.showActionSheet(Object object)

显示操作菜单

### showActionSheet 参数

Object object
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --------- | ---------------- | ------- | ---- | ---------------------------------------------- |
| itemList | `Array.<string>` | | 是 | 按钮的文字数组，数组长度最大为 6 |
| itemColor | string | #000000 | 否 | 按钮的文字颜色 |
| success | function | | 否 | 接口调用成功的回调函数 |
| fail | function | | 否 | 接口调用失败的回调函数 |
| complete | function | | 否 | 接口调用结束的回调函数(调用成功、失败都会执行) |

object.success 回调函数

参数

Object res

| 属性     | 类型   | 说明                                            |
| -------- | ------ | ----------------------------------------------- |
| tapIndex | number | 用户点击的按钮序号，从上到下的顺序，从 `0` 开始 |

示例代码

```js
wx.showActionSheet({
  itemList: ["A", "B", "C"],
  success: (res) => {
    console.log(res.tapIndex);
  },
  fail: (res) => {
    console.log(res.errMsg);
  },
});
```
