---
title: 全局配置文档
icon: app
category: 小程序
---

小程序根目录下的 app.json 文件用来对微信小程序进行全局配置。文件内容为一个 JSON 对象，有以下属性:

<!-- more -->

## 配置项

以下是比较**重要**的配置项:

| 属性   | 类型     | 必填 | 描述               |
| ------ | -------- | ---- | ------------------ |
| pages  | string[] | 是   | 页面路径列表       |
| window | Object   | 否   | 全局的默认窗口表现 |
| tabBar | Object   | 否   | 底部 tab 栏的表现  |

以下是一些补充与细节的配置项，在初期可以不用掌握与配置。

| 属性                           | 类型     | 必填 | 描述                                                              | 最低版本                |
| ------------------------------ | -------- | ---- | ----------------------------------------------------------------- | ----------------------- |
| networkTimeout                 | Object   | 否   | 网络超时时间                                                      |                         |
| debug                          | boolean  | 否   | 是否开启 debug 模式，默认关闭                                     |                         |
| functionalPages                | boolean  | 否   | 是否启用插件功能页，默认关闭                                      | 2.1.0                   |
| subpackages                    | Object[] | 否   | 分包结构配置                                                      | 1.7.3                   |
| workers                        | string   | 否   | Worker 代码放置的目录                                             | 1.9.90                  |
| requiredBackgroundModes        | string[] | 否   | 需要在后台使用的能力，如「音乐播放」                              |                         |
| plugins                        | Object   | 否   | 使用到的插件                                                      | 1.9.6                   |
| preloadRule                    | Object   | 否   | 分包预下载规则                                                    | 2.3.0                   |
| resizable                      | boolean  | 否   | iPad 小程序是否支持屏幕旋转、Windows 系统下是否宽屏显示，默认关闭 | 2.3.0                   |
| navigateToMiniProgramAppIdList | string[] | 否   | 需要跳转的小程序列表                                              | 2.4.0                   |
| usingComponents                | Object   | 否   | 全局自定义组件配置                                                | 开发者工具 1.02.1810190 |
| permission                     | Object   | 否   | 小程序接口权限相关设置                                            | 微信客户端 7.0.0        |

## pages

用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径(含文件名) 信息。文件名不需要写文件后缀，框架会自动去寻找对于位置的 `.json`, `.js`, `.wxml`, `.wxss` 四个文件进行处理。

数组的第一项代表小程序的初始页面(首页)。小程序中新增/减少页面，都需要对 `pages` 数组进行修改。

如开发目录为:

```md
├── app.js
├── app.json
├── app.wxss
├── pages
│ │── index
│ │ ├── index.wxml
│ │ ├── index.js
│ │ ├── index.json
│ │ └── index.wxss
│ └── logs
│ ├── logs.wxml
│ └── logs.js
└── utils
```

则需要在 `app.json` 中写

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"]
}
```

## window

用于设置小程序的状态栏、导航条、标题、窗口背景色。

| 属性                         | 类型     | 默认值   | 描述                                                         | 最低版本                         |
| ---------------------------- | -------- | -------- | ------------------------------------------------------------ | -------------------------------- |
| navigationBarBackgroundColor | HexColor | #000000  | 导航栏背景颜色，如 #000000                                   |                                  |
| navigationBarTextStyle       | string   | white    | 导航栏标题颜色，仅支持 black / white                         |                                  |
| navigationBarTitleText       | string   |          | 导航栏标题文字内容                                           |
| navigationStyle              | string   | default  | 导航栏样式，仅支持`default` 默认样式 `custom` 自定义导航航栏 | 微信客户端 6.6.0                 |
| backgroundColor              | HexColor | #ffffff  | 窗口的背景色                                                 |                                  |
| backgroundTextStyle          | string   | dark     | 下拉 loading 的样式，仅支持 dark / light                     |                                  |
| backgroundColorTop           | string   | #ffffff  | 顶部窗口的背景色，仅 iOS 支持                                | 微信客户端 6.5.16                |
| backgroundColorBottom        | string   | #ffffff  | 底部窗口的背景色，仅 iOS 支持                                | 微信客户端 6.5.16                |
| enablePullDownRefresh        | boolean  | false    | 是否开启全局的下拉刷新。                                     |                                  |
| onReachBottomDistance        | number   | 50       | 页面上拉触底事件触发时距页面底部距离，单位为 px。            |
| pageOrientation              | string   | portrait | 屏幕旋转设置，支持 auto / portrait / landscape               | 2.4.0 (auto) / 2.5.0 (landscape) |

```json
{
  "window": {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "微信接口功能演示",
    "backgroundColor": "#eeeeee",
    "backgroundTextStyle": "light"
  }
}
```

## tabBar

如果小程序是一个多 tab 应用(客户端窗口的底部或顶部有 tab 栏可以切换页面)，可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

| 属性            | 类型     | 必填 | 默认值 | 描述                                                     | 最低版本 |
| --------------- | -------- | ---- | ------ | -------------------------------------------------------- | -------- |
| color           | HexColor | 是   |        | tab 上的文字默认颜色，仅支持十六进制颜色                 |
| selectedColor   | HexColor | 是   |        | tab 上的文字选中时的颜色，仅支持十六进制颜色             |
| backgroundColor | HexColor | 是   |        | tab 的背景色，仅支持十六进制颜色                         |
| borderStyle     | string   | 否   | black  | tabbar 上边框的颜色， 仅支持 black / white               |
| list            | Array    | 是   |        | tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab |
| position        | string   | 否   | bottom | tabBar 的位置，仅支持 bottom / top                       |
| custom          | boolean  | 否   | false  | 自定义 tabBar                                            | 2.5.0    |

其中 `list` 接受一个数组，只能配置最少 2 个、最多 5 个 tab。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下:

| 属性             | 类型   | 必填 | 说明                                                                              |
| ---------------- | ------ | ---- | --------------------------------------------------------------------------------- |
| pagePath         | string | 是   | 页面路径，必须在 pages 中先定义                                                   |
| text             | string | 是   | tab 上按钮文字                                                                    |
| iconPath         | string | 否   | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，不支持网络图片。         |
| selectedIconPath | string | 否   | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，不支持网络图片。 |

::: warning
当 postion 为 top 时，不显示 icon。
:::

## 其他配置

### networkTimeout

各类网络请求的超时时间，单位均为毫秒。

| 属性          | 类型   | 必填 | 默认值 | 说明                                      |
| ------------- | ------ | ---- | ------ | ----------------------------------------- |
| request       | number | 否   | 60000  | wx.request 的超时时间，单位: 毫秒。       |
| connectSocket | number | 否   | 60000  | wx.connectSocket 的超时时间，单位: 毫秒。 |
| uploadFile    | number | 否   | 60000  | wx.uploadFile 的超时时间，单位: 毫秒。    |
| downloadFile  | number | 否   | 60000  | wx.downloadFile 的超时时间，单位: 毫秒。  |

### debug

可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有 Page 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。

### functionalPages

> 基础库 2.1.0 开始支持，低版本需做兼容处理。

插件所有者小程序需要设置这一项来启用插件功能页。

### subpackages

> 微信客户端 6.6.0 ，基础库 1.7.3 及以上版本支持
>
> 写成 subPackages 也支持。

启用分包加载时，声明项目分包结构。

### workers

> 基础库 1.9.90 开始支持，低版本需做兼容处理。

使用 Worker 处理多线程任务时，设置 Worker 代码放置的目录

### requiredBackgroundModes

> 微信客户端 6.7.2 及以上版本支持

申明需要后台运行的能力，类型为数组。目前支持以下项目:

- audio: 后台音乐播放

如:

```json
{
  "pages": ["pages/index/index"],
  "requiredBackgroundModes": ["audio"]
}
```

::: tip
在此处申明了后台运行的接口，开发版和体验版上可以直接生效，正式版还需通过审核。
:::

### plugins

> 基础库 1.9.6 开始支持，低版本需做兼容处理。

声明小程序需要使用的插件。

### preloadRule

> 基础库 2.3.0 开始支持，低版本需做兼容处理。

声明分包预下载的规则。

### resizable

> 基础库 2.3.0 开始支持，低版本需做兼容处理。

在 iPad 上运行的小程序可以设置支持屏幕旋转。

::: tip
设置此项后在 Windows 版微信也会默认横向打开小程序。
:::

### navigateToMiniProgramAppIdList

> 基础库 2.4.0 开始支持，低版本需做兼容处理。

当小程序需要使用 wx.navigateToMiniProgram 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个。

### usingComponents

> 开发者工具 1.02.1810190 及以上版本支持

在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。

### permission

> 微信客户端 7.0.0 及以上版本支持

小程序接口权限相关设置。字段类型为 Object，结构为:

| 属性               | 类型             | 必填 | 描述             |
| ------------------ | ---------------- | ---- | ---------------- |
| scope.userLocation | PermissionObject | 否   | 位置相关权限声明 |

PermissionObject 结构

| 属性 | 类型   | 必填 | 说明                                               |
| ---- | ------ | ---- | -------------------------------------------------- |
| desc | string | 是   | 小程序获取权限时展示的接口用途说明。最长 30 个字符 |

如:

```json
{
  "pages": ["pages/index/index"],
  "permission": {
    "scope.userLocation": {
      "desc": "您的位置信息将用于小程序位置接口的效果展示"
    }
  }
}
```

## 配置示例

```json
{
  "pages": ["pages/index/index", "pages/logs/index"],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/logs/logs",
        "text": "日志"
      }
    ]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true,
  "navigateToMiniProgramAppIdList": ["wxe5f52902cf4de896"]
}
```
