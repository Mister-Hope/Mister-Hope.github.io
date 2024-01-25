---
date: 2020-05-04
title: Vue 与小程序的异同
icon: compare
category: Vue
tag:
  - Vue
  - 小程序
  - 对比
---

<!-- more -->

## 优缺点比较

|        | 优点                                                                                                                                                                                   | 缺点                                                                                                                                                                                                                                                                                      |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 小程序 | 小程序底层由微信框架驱动，每个界面是单独的 JS 文件，页面切换以及全局生命周期丰富完善。小程序具有相当完备的 API。                                                                       | 小程序是由 JSCore 驱动逻辑层，视图层采用 Webview，故没有 DOM 节点的概念，只有渲染出的虚拟节点，所以无法动态删除或添加节点，无法使用一切 DOM 相关 API。小程序组件生命周期不够强大。小程序的 Webview 渲染存在一定的性能问题。小程序视图层与逻辑层通过 Jsbridge 连接，数据传输及渲染有延时。 |
| vue    | Vue 的实质是动态监测并托管 DOM 节点。由于 Vue 是网页开发，拥有 DOM 树，可以使用 DOM 相关 API。Vue 组件拥有更全面的生命周期，同时可以动态渲染组件。Vue 的组件传递数据方式默认为单向绑定 | 由于 Vue 的组件本质是监测 DOM 树，故其组件只能有一个根节点。同时 Vue 的界面路由依赖于 History API，其界面切换周期与逻辑不够强大。                                                                                                                                                         |

## 代码区别

小程序与 Vue 在代码写法上极其相似，但稍有不同。

### 数据绑定

#### 小程序数据绑定

```xml
<view class="text1 {{a}} {{b?:'b为真':'b为假'}}">{{text}}</view>
```

::: v-pre

小程序在所有内容上都使用 Muscle 语法 (`{{Javascript表达式}}`) 的写法。

:::

#### Vue 数据绑定

```html
<div class="text1" :class="a+' '+ b?:'b为真':'b为假'">{{text}}</div>
```

::: tip

Vue 在标签名属性用 `v-bind:prop="Javascript表达式"` 的写法、其简写为 `:prop=""`，在标签内容处使用 Muscle 语法。

:::

### 条件渲染

#### 小程序条件渲染

```xml
<view wx:if="{{condition1}}">板块只有 condition1 为 true 时才会渲染</view>


<block wx:if="{{condition2}}">
  <view>内容1</view>
  <view>内容2</view>
  <view>
    <view>内容3</view>
    <view>内容4</view>
  </view>
  <view>
    这是一个拥有很多兄弟标签的代码块.
    虚拟标签 block 会把其当作一个整体用作条件渲染。
  </view>
</block>
```

::: info

更多详情请见 [小程序条件渲染文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/conditional.html)

:::

#### Vue 条件渲染

```html
<div v-if="condition">板块只有 condition 为 true 时才会渲染</div>

<div v-if="{{condition2}}">
  <div>内容1</div>
  <div>内容2</div>
  <div>
    <div>内容3</div>
    <div>内容4</div>
  </div>
  <div>
    Vue 没有相关虚拟标签，且只能监听一个标签。所以只能建立一个没有样式的 div
    标签将多个并列标签抱起来。这样 Vue 就会因监听最外层 div
    会把其当作一个整体用作条件渲染。
  </div>
</div>
```

::: info

更多相关请见 [Vue 条件渲染文档](https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF)

:::

### 循环渲染

#### 小程序循环渲染

```xml
<view wx:for="{{array}}" wx:for-item="element" wx:for-index="index">
  {{index}} is {{element}}
</view>
```

实际渲染结果为:

```xml
<view>1</view>
<view>2</view>
<view>3</view>
<view>4</view>
<view>5</view>
```

::: info

更多详情请见 [小程序循环渲染文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/list.html)

:::

#### Vue 循环渲染

```html
<div>
    <div v-for="(element,index) in array">
       {{index}} is {{ element }}
    </div>
  </ol>
</div>
```

::: info

更多相关请见 [Vue 循环渲染文档](https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF)

:::

## 生命周期

### 页面生命周期

#### 小程序生命周期

![小程序页面生命周期](https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png)

#### Vue 页面生命周期

[Vue 页面生命周期](https://router.vuejs.org/guide/advanced/navigation-guards.html)

### 组件生命周期

#### 小程序组件生命周期

[小程序组件生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)

#### Vue 组件生命周期

[Vue 组件生命周期](https://cn.vuejs.org/guide/essentials/lifecycle.html)
