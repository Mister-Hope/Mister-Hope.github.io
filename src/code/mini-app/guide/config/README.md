---
date: 2022-01-07
title: 配置
icon: config
category: 小程序
---

小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。

::: tip

为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。

:::

<!-- more -->

## 全局配置

小程序根目录下的 `app.json` 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置 tabBar 等。

以下是一个包含了部分常用配置选项的 `app.json`:

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

更多详情请见 [全局配置文档](app-config.md)

## 页面配置

每一个小程序页面也可以使用同名 `.json` 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项。

例如:

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```

更多详情请见 [页面配置文档](page-config.md)

## 索引配置 <Badge text="初学无需阅读" type="grey" />

微信现已开放小程序内搜索，开发者可以通过 sitemap.json 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 `user-agent`: `mpcrawler` 及场景值 `1129`。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。

### 具体配置说明

1. 页面收录设置: 可对整个小程序的索引进行关闭，小程序管理后台-设置-基本设置-页面收录设置
1. sitemap 配置: 可对特定页面的索引进行关闭

### sitemap 配置

小程序根目录下的 sitemap.json 文件用来配置小程序及其页面是否允许被微信索引。

完整配置项说明请参考 [sitemap 配置](sitemap-config.md)
