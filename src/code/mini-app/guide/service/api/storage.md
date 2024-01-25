---
date: 2020-10-09
title: 数据缓存 API
icon: storage
category: 小程序
---

本页面介绍的一系列 API 都是和小程序数据缓存(数据存储)相关的 API。

可以利用数据缓存存储一些不重要的信息，比如用户的设置、用户的操作历史记录等。

<!-- more -->

::: tip 概要

**最常用的三个**:

异步:

- `wx.setStorage`: 存储某个 `value` 到某个 `key`
- `wx.getStorage`: 读取某个 `key` 的 `value`
- `wx.removeStorage`: 删除某个 `key` 及其对应的 `value`

它们还有对应的同步 API 版本:

- `wx.setStorageSync`
- `wx.getStorageSync`
- `wx.removeStorageSync`

清除缓存

- `wx.clearStorage`: 清除全部数据缓存
- `wx.clearStorageSync`: 上方 API 的同步版本

:::

## 相关注意事项

- 除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。

  ::: warning

  当系统空间不足或用户长时间不使用小程序时，数据缓存可能被清理。

  所以要做好数据缓存丢失的逻辑。

  :::

- 单个 `key` 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

## wx.setStorage(Object object)

将数据存储在本地缓存中指定的 `key` 中。会覆盖掉原来该 `key` 对应的内容。

### setStorage 参数

Object object

| 属性     | 类型     | 必填 | 说明                                                                             |
| -------- | -------- | ---- | -------------------------------------------------------------------------------- |
| key      | string   | 是   | 本地缓存中指定的 key                                                             |
| data     | any      | 是   | 需要存储的内容。只支持原生类型、Date、及能够通过 `JSON.stringify` 序列化的对象。 |
| success  | function | 否   | 接口调用成功的回调函数                                                           |
| fail     | function | 否   | 接口调用失败的回调函数                                                           |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行)                                   |

示例代码

```js
wx.setStorage({
  key: "key",
  data: "value",
});
```

## wx.setStorageSync(string key, any data)

`wx.setStorage` 的同步版本

### setStorageSync 参数

- string key

  本地缓存中指定的 key

- any data

  需要存储的内容。只支持原生类型、Date、及能够通过 `JSON.stringify` 序列化的对象。

示例代码

```js
try {
  wx.setStorageSync("key", "value");
} catch (err) {}
```

## wx.getStorage(Object object)

从本地缓存中异步获取指定 key 的内容

### getStorage 参数

Object object

| 属性     | 类型     | 必填 | 说明                                           |
| -------- | -------- | ---- | ---------------------------------------------- |
| key      | string   | 是   | 本地缓存中指定的 key                           |
| success  | function | 否   | 接口调用成功的回调函数                         |
| fail     | function | 否   | 接口调用失败的回调函数                         |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |

Object.success 回调函数

参数

Object res

| 属性 | 类型 | 说明           |
| ---- | ---- | -------------- |
| data | any  | key 对应的内容 |

示例代码

```js
wx.getStorage({
  key: "key",
  success: (res) => {
    console.log(res.data);
  },
});
```

## wx.getStorageSync(string key)

`wx.getStorage` 的同步版本

### getStorageSync 参数

- string key: 本地缓存中指定的 `key`

### getStorageSync 返回值

- any data : `key` 对应的内容

示例代码

```js
try {
  const value = wx.getStorageSync("key");

  if (value) {
    // Do something with return value
  }
} catch (err) {
  // Do something when catch error
}
```

## wx.removeStorage(Object object)

从本地缓存中移除指定 key

### removeStorage 参数

Object object

| 属性     | 类型     | 必填 | 说明                                           |
| -------- | -------- | ---- | ---------------------------------------------- |
| key      | string   | 是   | 本地缓存中指定的 key                           |
| success  | function | 否   | 接口调用成功的回调函数                         |
| fail     | function | 否   | 接口调用失败的回调函数                         |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |

示例代码

```js
wx.removeStorage({
  key: "key",
  success: (res) => {
    console.log(res);
  },
});
```

## wx.removeStorageSync(string key)

`wx.removeStorage` 的同步版本

### removeStorageSync 参数

- string key: 本地缓存中指定的 `key`

示例代码

```js
try {
  wx.removeStorageSync("key");
} catch (err) {
  // Do something when catch error
}
```

## wx.clearStorage(Object object)

清理本地数据缓存

### clearStorage 参数

Object object

| 属性     | 类型     | 必填 | 说明                                           |
| -------- | -------- | ---- | ---------------------------------------------- |
| success  | function | 否   | 接口调用成功的回调函数                         |
| fail     | function | 否   | 接口调用失败的回调函数                         |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |

示例代码

```js
wx.clearStorage();
```

## wx.clearStorageSync()

`wx.clearStorage` 的同步版本

示例代码

```js
try {
  wx.clearStorageSync();
} catch (err) {
  // Do something when catch error
}
```
