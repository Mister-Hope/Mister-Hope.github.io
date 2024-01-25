---
date: 2020-10-09
title: 小程序分享
icon: share
category: 小程序
next: ../../../software/
---

## 二维码生成

目前小程序二维码生成选用的是[无限制生成二维码](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html)。

我们使用 Postman 软件进行二维码的获取。

### 调用凭据获取

获取任何二维码都需要先获取 `access_token`，这是小程序全局唯一后台接口调用凭据。[文档地址](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)

请求方式为:

```md
GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
```

更多详情可以见文档。`AppSecret` 由于权限很大不在此文档中直接放置。

### 无限制二维码生成

- [文档地址](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html)

在获取 `access_token` 之后就可以获取小程序二维码了。

```md
POST https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN
```

请注意，在 Postman 软件中，首先要注意使用 `post` 方法。Body 使用 `raw`，格式选择 `Text`，需要将 `pretty` 化的 JSON 输入即可正常获取二维码。获取完二维码之后，需要在 `response` 中点击返回图片右上角的 `save as`，保存为 `jpg` 格式的文件即可保存二维码。

## 小程序链接

- [文档地址](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html)

具体格式如下:

```html
<a
  href="不支持小程序时打开的网页"
  data-miniprogram-appid="小程序的appid"
  data-miniprogram-path="小程序路径"
  >文本内容</a
>
```
