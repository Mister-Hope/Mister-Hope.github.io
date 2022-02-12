---
title: 小程序
icon: mini-app
date: 2019-11-25
category: 小程序
star: true
---

::: tip

在开发小程序之前。应当掌握 [HTML](../website/html/README.md)、[CSS](../website/css/README.md)、[JavaScript 基础](../language/js/guide/README.md) 以及 [ES6](../language/js/es6/README.md)。

:::

<!-- more -->

## 小程序基础简介

在微信小程序中主要有四种文件结构: `wxml`、`wxss`、`js` 和 `json`。其中 `wxml` 对应带有 vue.js 特征的 html5，`wxss` 对应 css3，`js` 对应 ES6 标准的的 javaScript。

对于 QQ 小程序，其文件结构为 `QML`、`qss`、`js` 和 `json`。

::: tip

QQ 小程序本质还是换汤不换药的，且 QQ 开发者工具兼容 `wxml` 与 `wss`)

:::

小程序开发与网页开发极其相似。所以必须有适当的网页开发基础。零基础的人可能很难直接上手小程序开发。

## 教程目录

- [文件结构](guide/file-structure.md)

- [运行环境](guide/env.md)

- [小程序配置](guide/config/README.md)

  - [全局配置](guide/config/app-config.md)

  - [页面配置](guide/config/page-config.md)

  - [sitemap 配置](guide/config/sitemap-config.md)

- [小程序框架](guide/frame/README.md)

  - [框架介绍](guide/frame/intro.md)

  - [场景值](guide/frame/scene.md) <Badge type="grey" text="高级" />

  - [运行环境](guide/frame/env.md) <Badge type="grey" text="高级" />

  - [运行机制](guide/frame/mechanism.md) <Badge type="grey" text="高级" />

  - [更新机制](guide/frame/update.md) <Badge type="grey" text="高级" />

- [逻辑层](guide/service/README.md)

  - [生命周期](guide/service/lifetime.md)

  - [路由](guide/service/route.md)

  - [注册](guide/service/register.md)

  - [App()](guide/service/app.md)

  - [Page()](guide/service/page.md)

  - [运行](guide/service/run.md)

  - [模块化](guide/service/module.md)

  - [API](guide/service/api/README.md)

- [视图层](guide/view/README.md)

  - [WXML](guide/view/wxml.md)

  - [WXSS](guide/view/wxss.md)

  - [WXS](guide/view/wxs.md)

  - [事件](guide/view/event.md)

  - [基础组件](guide/view/component.md)

  - [动画](guide/view/animation.md) <Badge type="grey" text="高级" />

  - [WXS](guide/view/wxs.md) <Badge type="grey" text="高级" />

  - [WXS 事件](guide/view/wxs-event.md) <Badge type="grey" text="高级" />

  - [建议双向绑定](guide/view/model.md) <Badge type="grey" text="高级" />

  - [获取界面上的节点信息](guide/view/selector.md) <Badge type="grey" text="高级" />

  - [相应显示区域变化](guide/view/selector.md) <Badge type="grey" text="高级" />

  - [初始渲染缓存](guide/view/rendering-cache.md) <Badge type="grey" text="高级" />

- [小程序能力](guide/ability/README.md)

  - [网络请求](guide/ability/network.md)

  - [存储](guide/ability/storage.md)

  - [文件系统](guide/ability/file-system.md)

  - [调试](guide/ability/debug.md)

## 开发者工具

- [工具界面简介](tools/interface.md)

- [调试](tools/debug.md)

- [npm](tools/npm.md)

- [体验评分](tools/audit.md)

## 官方教程

- [点击前往](https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0008aeea9a8978ab0086a685851c0a)

## 案例

- [GitHub repository](https://github.com/Hope-Studio/wxminiappdemo)

## Mr.Hope 框架说明

- [小程序框架使用说明](framework/README.md)

- [tag 值参数表](framework/tag-list.md)

- [setPage 库使用说明](framework/page.md)

- [界面简单开发学习指南](framework/simple-debug.md)

- [分享相关](qr-code.md)

## 学习视频

- [零基础开发小程序](https://www.bilibili.com/video/av22790583/)(比较新的视频，强调总体思想)

- [小程序-从入门到入土](https://www.bilibili.com/video/av11938917)(比较老的视频，针对每个组件或者 API 进行了针对的讲解与示范，但部分内容已经与最新官方文档不符)

## 示例代码

- [小程序实例源码](https://github.com/wechat-miniprogram/miniprogram-demo)

  ![小程序示例二维码](https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg)

## 官方文档

- [QQ 小程序](https://q.qq.com/wiki/)
- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [微信小程序社区](https://developers.weixin.qq.com/community/develop/question)
  - [官方公告](https://developers.weixin.qq.com/community/develop/list/2?id=)

### QQ 开发者工具

现在很多功能还处于缺失状态，bug 到没之前那么多了。

- [查看详情](https://q.qq.com/wiki/)

- [下载地址](https://q.qq.com/wiki/tools/devtool/)

## 微信开发者工具

微信开发者工具用来开发与调试微信小程序和微信相关网页的官方工具。小程序使用该开发工具进行开发。

- [下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

- [开发者工具教程](tools/README.md)

- [官方使用指南](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
