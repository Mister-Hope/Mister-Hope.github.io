---
title: Angular
icon: angular
date: 2020-05-06
category: 前端
tag:
  - Angular
---

Angular 是 Google 官方在 2016 年 9 月出品的一款框架。

框架强制 Typescript，更倾向于大型项目。

<!-- more -->

::: warning

2023 年 Angular 挺凉的了

:::

::: info Angular 的优点

1. 零配置 CLI，享受到 webpack 每次升级的好处，但是不用关心任何 webpack config
1. 官方提供所有的必须组件(http、router、animation、ssr、e2e 等等)，在 2000+ 内部应用测试之后才会发布，基本零 bug，并且保证在未来很多年内一直保证兼容升级
1. 提供官方的应用市场和 low code 生成工具，一行命令就可以生成 Dashboard 和各种页面
1. 框架 100% 由 TypeScript 开发，并且生态内的所有三方库都是(只能用) TypeScript 开发
1. 内置 RxJS，并且从 View 的操作到 Http 全部都是 Reactive 的，可以随意组合
1. 每次升级只要运行一行命令就会帮您修复所有的可能的不兼容问题
1. 通过 Template 隔绝底层的 Compiler 升级成本，Compiler 迭代了三代，性能不断提升，bundle size 不断减少，但是用户代码一行不用改

:::

Angular 写起来其实是有诸多限制的，但是对企业的大型项目来说，这些限制与规范会带来多人协同开发和后期维护上的简便。

如果您在前端框架上追求的更多是: 升级稳定、标准统一、长期维护成本低、协作方便，不需要频繁重构，Angular 的使用感受应该还是相当不错的，这也是为什么目前大量企业用户会选择 Angular 的原因。

## 相关链接

- [官方文档](https://angular.io/docs)
- [中文文档](https://angular.cn/docs)
