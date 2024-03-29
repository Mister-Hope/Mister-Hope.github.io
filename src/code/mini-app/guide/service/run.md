---
date: 2020-10-09
title: 小程序运行机制
icon: play
category: 小程序
---

## 小程序启动

小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。

- 热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；
- 冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。

小程序没有重启的概念。

## 前台/后台状态

当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了**后台**状态；

当用户再次进入微信或再次打开小程序，小程序又会从后台进入**前台**。

## 小程序销毁

需要注意的是: 只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。

- 当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后(目前是 5 分钟)小程序会被微信主动销毁。
- 当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。
  - 在 iOS 上，当微信客户端在一定时间间隔内(目前是 5 秒)连续收到两次及以上系统内存告警时，会主动进行小程序的销毁，并提示用户 「该小程序可能导致微信响应变慢被终止」。
  - 建议小程序在必要时使用 `wx.onMemoryWarning` 监听内存告警事件，进行必要的内存清理。
