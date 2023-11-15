---
date: 2020-10-09
title: 代码构成
icon: tree
category: 小程序
---

## 文件组成 <Badge text="重要" type="error" />

小程序的代码由四种文件组成:

- `.json` 后缀的 JSON 配置文件，主要用作小程序配置
- `.wxml` 后缀的 WXML 模板文件，为视图层，相当于 HTML
- `.wxss` 后缀的 WXSS 样式文件，为样式部分，相当于 CSS
- `.js` 后缀的 JS 脚本逻辑文件，为脚本部分，处理小程序逻辑与行为

## 目录结构 <Badge text="重要" type="error" />

小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。

一个小程序主体部分由三个文件组成，必须放在项目的根目录:

| 文件     | 必需 | 作用             |
| -------- | ---- | ---------------- |
| app.js   | 是   | 小程序逻辑       |
| app.json | 是   | 小程序公共配置   |
| app.wxss | 否   | 小程序公共样式表 |

一个小程序页面由四个文件组成:

| 文件 | 必需 | 作用       |
| ---- | ---- | ---------- |
| js   | 是   | 页面逻辑   |
| wxml | 是   | 页面结构   |
| json | 否   | 页面配置   |
| wxss | 否   | 页面样式表 |

::: warning

为了方便开发者减少配置项，描述页面的四个文件必须具有相同的路径与文件名。

这样开发者工具会自动将它们视作一个小程序页面的不同代码部分。

:::

### 允许上传的文件 <Badge text="不重要" type="grey" />

见页脚[^allowfiles]

[^allowfiles]:
    在项目目录中，以下文件会经过编译，因此上传之后无法直接访问到: `.js`、`app.json`、`.wxml`、`*.wxss`(其中 `wxml` 和 `wxss` 文件仅针对在 `app.json` 中配置了的页面)。除此之外，只有后缀名在白名单内的文件可以被上传。具体白名单列表如下:

    - wxs
    - png
    - jpg
    - jpeg
    - gif
    - svg
    - json
    - cer
    - mp3
    - aac
    - m4a
    - mp4
    - wav
    - ogg
    - silk

## JSON 配置

JSON 是一种数据格式，**在小程序中，JSON 负责描述小程序的静态配置，负责配置项目、小程序整体和每个页面。**

我们可以看到在项目的根目录有一个 `app.json` 和 `project.config.json`，此外在 `pages/logs` 目录下还有一个 `logs.json`。下面是它们的用途说明。

### 小程序配置 app.json <Badge text="重要" type="error" />

app.json 是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。QuickStart 项目里边的 app.json 配置内容如下:

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  }
}
```

- `pages` 字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前您的小程序页面定义在哪个目录。

- `window` 字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等。

其他配置项可以参考文档 [全局配置](config/app-config.md)。

### 页面配置 page.json <Badge text="简单了解" />

这里的 `page.json` 其实用来表示小程序页面相关的配置。

如果您整个小程序的风格是蓝色调，那么您可以在 `app.json` 里边声明顶部颜色是蓝色即可。实际您可能希望小程序里边的每个页面都有不一样的色调来区分不同功能模块，`page.json` 就提供了定义每个页面的一些属性的能力。

配置项可以参考文档 [页面配置](config/page-config.md)。

### 工具配置 project.config.json <Badge text="不重要" type="grey" />

通常大家在使用一个工具的时候，都会针对各自喜好做一些个性化配置，例如界面颜色、编译配置等等，当您换了另外一台电脑重新安装工具的时候，您还要重新配置。

考虑到这点，小程序开发者工具在每个项目的根目录都会生成一个 project.config.json，您在工具上做的任何配置都会写入到这个文件，当您重新安装工具或者换电脑工作时，您只要载入同一个项目的代码包，开发者工具就自动会帮您恢复到当时您开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。

其他配置项细节可以参考文档 [开发者工具的配置](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)。

::: info

更多 JSON 相关教程，请查看 [JSON 教程](../../language/json/README.md)

:::

## WXML 模板 <Badge text="重要" type="error" />

在小程序中 WXML 充当的就是类似 HTML 的角色。打开 `pages/index/index.wxml`，您会看到以下的内容:

```xml
<view class="container">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}"> 获取头像昵称 </button>
    <block wx:else>
      <image src="{{userInfo.avatarUrl}}" background-size="cover" />
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>
```

和 HTML 非常相似，WXML 由标签、属性等等构成。但是也有很多不一样的地方，我们来一一阐述一下:

- 自己的一套标签名称

  > e.g.: 小程序把最常见的 `<span />` 改成了 `<text />`，`<div />` 改成了 `<view />`

::: v-pre

- 多了一些 `wx:if` 这样的属性以及 `{{ }}` 这样的表达式

:::

由于小程序不允许用户进行 DOM 操作，所以小程序在编译的时候就要编译好整个的 DOM 结构。

小程序下通过提供动态绑定、条件渲染与循环渲染帮助您去动态改变编译好的 DOM 结构。

更详细的文档可以参考 [WXML](view/wxml.md) 。

## 动态绑定 <Badge text="重要" type="error" />

动态绑定负责把 JS 的变量映射绑定到 WXML 上，也就是说负责把逻辑层的变量显示在视图层的具体位置。

WXML:

```xml
<text>{{msg}}</text>
```

JS 只需要管理状态即可:

```js
this.setData({ msg: "Hello World" });
```

::: v-pre

通过 `{{ }}` 的语法把一个变量绑定到界面上，我们称为数据绑定。仅仅通过数据绑定还不够完整的描述状态和界面的关系，还需要 `if` / `else`, `for` 等控制能力，在小程序里边，这些控制能力都用 `wx:` 开头的属性来表达。

:::

## WXSS 样式 <Badge text="重要" type="error" />

WXSS 具有 CSS 大部分的特性，也做了一些扩充和修改。

- 新增了尺寸单位。WXSS 在底层支持新的尺寸单位 rpx ，规定屏幕宽 750 rpx。

  ::: tip

  由于换算采用的浮点数运算，所以运算结果会和预期结果有一点点偏差。

  所以 Mr.Hope 并不建议使用 rpx 单位。

  :::

- 提供了全局的样式和局部样式。

  和前边 `app.json`, `page.json` 的概念相同，您可以写一个 `app.wxss` 作为全局样式，会作用于当前小程序的所有页面，局部页面样式 `page.wxss` 仅对当前页面生效。

- 此外 WXSS 仅支持部分 CSS 选择器

更详细的文档可以参考 [WXSS](view/wxss.md)。

## JS 逻辑交互 <Badge text="重要" type="error" />

小程序仅仅只有界面展示是不够的，还需要和用户做交互: 响应用户的点击、获取用户的位置等等。小程序通过 JS 脚本文件来处理用户的操作。

```xml
<view>{{ msg }}</view>
<button bindtap="clickMe">点击我</button>
```

点击 button 按钮的时候，我们希望把界面上 `msg` 显示成 `"Hello World"`，于是我们在 button 上声明一个属性: `bindtap` ，在 JS 文件里边声明了 `clickMe` 方法来响应这次点击操作:

```js
Page({
  clickMe() {
    this.setData({ msg: "Hello World" });
  },
});
```

响应用户的操作就是这么简单，更详细的事件可以参考文档 [WXML - 事件](view/event.md) 。

此外您还可以在 JS 中调用小程序提供的丰富的 API，利用这些 API 可以很方便的调起微信提供的能力，例如获取用户信息、本地存储、微信支付等。在前边的 QuickStart 例子中，在 `pages/index/index.js` 就调用了 `wx.getUserInfo` 获取微信用户的头像和昵称，最后通过 `setData` 把获取到的信息显示到界面上。

更多 API 可以参考文档 [小程序的 API](service/api/README.md) 。
