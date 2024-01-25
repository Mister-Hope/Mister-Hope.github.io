---
date: 2020-10-09
title: 页面配置
icon: page
category: 小程序
---

每一个小程序页面也可以使用 `.json` 文件来对本页面的窗口表现进行配置。

<!-- more -->

页面中配置项在当前页面会覆盖 `app.json` 的 `window` 中相同的配置项。文件内容为一个 JSON 对象，有以下属性:

## 配置项

| 属性                                       | 类型                             | 默认值   | 描述                                                                                 | 最低版本          |
| ------------------------------------------ | -------------------------------- | -------- | ------------------------------------------------------------------------------------ | ----------------- | ---------------- |
| navigationBarBackgroundColor               | HexColor                         | #000000  | 导航栏背景颜色，如 #000000                                                           |
| navigationBarTextStyle                     | string                           | white    | 导航栏标题颜色，仅支持 black / white                                                 |
| navigationBarTitleText                     | string                           |          | 导航栏标题文字内容                                                                   |
| navigationStyle                            | string                           | default  | 导航栏样式，仅支持以下值: default 默认样式 custom 自定义导航栏，只保留右上角胶囊按钮 |                   | 微信客户端 7.0.0 |
| backgroundColor                            | HexColor                         | #ffffff  | 窗口的背景色                                                                         |
| backgroundTextStyle                        | string                           | dark     | 下拉 loading 的样式，仅支持 dark / light                                             |
| backgroundColorTop                         | string                           | #ffffff  | 顶部窗口的背景色，仅 iOS 支持                                                        | 微信客户端 6.5.16 |
| backgroundColorBottom                      | string                           | #ffffff  | 底部窗口的背景色，仅 iOS 支持                                                        | 微信客户端 6.5.16 |
| enablePullDownRefresh                      | boolean                          | false    | 是否开启当前页面下拉刷新。                                                           |
| 详见 Page.onPullDownRefresh                |
| onReachBottomDistance                      | number                           | 50       | 页面上拉触底事件触发时距页面底部距离，单位为 px。                                    |
| 详见 Page.onReachBottom                    |
| pageOrientation                            | string                           | portrait | 屏幕旋转设置，支持 auto / portrait / landscape                                       |
| 详见 响应显示区域变化                      | 2.4.0 (auto) / 2.5.0 (landscape) |
| disableScroll                              | boolean                          | false    | 设置为 true 则页面整体不能上下滚动。                                                 |
| 只在页面配置中有效，无法在 app.json 中设置 |
| usingComponents                            | Object                           | 否       | 页面自定义组件配置                                                                   | 1.6.3             |
| style                                      | string                           | default  | 启用新版的组件样式                                                                   | 2.10.2            |
| singlePage                                 | Object                           | 否       | 单页模式相关配置                                                                     | 2.12.0            |

> 页面配置中只能设置 `app.json` 中 `window` 对应的配置项，以决定本页面的窗口表现，所以无需写 `window` 这个属性。

## singlePage

> 基础库 2.11.3 及以上版本支持，目前分享到朋友圈 (Beta) 后打开会进入单页模式

单页模式相关配置

| 属性             | 类型   | 必填 | 默认值                                                                | 描述                                                                                                                          |
| ---------------- | ------ | ---- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| navigationBarFit | String | 否   | 默认自动调整，若原页面是自定义导航栏，则为 `float`，否则为 `squeezed` | 导航栏与页面的相交状态，值为 `float` 时表示导航栏浮在页面上，与页面相交；值为 `squeezed` 时表示页面被导航栏挤压，与页面不相交 |

## 配置示例

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```
