---
date: 2020-10-09
title: 存储
icon: storage
category: 小程序
---

每个微信小程序都可以有自己的本地缓存，可以通过 `wx.setStorage` / `wx.setStorageSync`、`wx.getStorage` / `wx.getStorageSync`、`wx.clearStorage` / `wx.clearStorageSync`，`wx.removeStorage` / `wx.removeStorageSync` 对本地缓存进行读写和清理。

同一个微信用户，同一个小程序 storage 上限为 10MB。Storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。

<!-- more -->

## API 文档

- [点击前往](../service/api/storage.md)

::: tip

如果用户储存空间不足，我们会清空最近最久未使用的小程序的本地缓存。我们不建议将关键信息全部存在 storage，以防储存空间不足或用户换设备的情况。

:::
