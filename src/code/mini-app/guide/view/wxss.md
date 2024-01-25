---
date: 2020-10-09
title: WXSS
icon: css
category: 小程序
---

WXSS (WeiXin Style Sheets) 是一套样式语言，用于描述 WXML 的组件样式。

WXSS 用来决定 WXML 的组件应该怎么显示。

为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。

与 CSS 相比，WXSS 扩展的特性有:

- 尺寸单位
- 样式导入

与 CSS 相比，WXSS 缺失的特性有:

- 一部分高级选择器
- 一部分 CSS3 高级功能

<!-- more -->

## 尺寸单位

rpx(responsive pixel): 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。

| 设备         | rpx 换算 px (屏幕宽度/750) | px 换算 rpx (750/屏幕宽度) |
| ------------ | -------------------------- | -------------------------- |
| iPhone5      | 1rpx = 0.42px              | 1px = 2.34rpx              |
| iPhone6      | 1rpx = 0.5px               | 1px = 2rpx                 |
| iPhone6 Plus | 1rpx = 0.552px             | 1px = 1.81rpx              |

::: tip

开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。

:::

::: warning

在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况。

:::

## 样式导入

使用 `@import` 语句可以导入外联样式表，`@import` 后跟需要导入的外联样式表的相对路径，用 `;` 表示语句结束。

示例代码:

```css
/** common.wxss **/
.small-p {
  padding: 5px;
}
/** app.wxss **/
@import "common.wxss";
.middle-p {
  padding: 15px;
}
```

## 内联样式

框架组件上支持使用 `style`, `class` 属性来控制组件的样式。

- `style`: 静态的样式统一写到 `class` `中。style` 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 `style` 中，以免影响渲染速度。

  ```xml
  <view style="color:{{color}};" />
  ```

- `class`: 用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上 `.`，样式类名之间用空格分隔。

  ```xml
  <view class="normal_view" />
  ```

## 选择器

目前支持的选择器有:

| 选择器           | 样例           | 样例描述                                       |
| ---------------- | -------------- | ---------------------------------------------- |
| .class           | .intro         | 选择所有拥有 `class="intro"` 的组件            |
| \#id             | \#firstname    | 选择拥有 `id="firstname"` 的组件               |
| element          | view           | 选择所有 view 组件                             |
| element, element | view, checkbox | 选择所有文档的 view 组件和所有的 checkbox 组件 |
| ::after          | view::after    | 在 view 组件后边插入内容                       |
| ::before         | view::before   | 在 view 组件前边插入内容                       |

## 全局样式与局部样式

定义在 `app.wxss` 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 `app.wxss` 中相同的选择器。
