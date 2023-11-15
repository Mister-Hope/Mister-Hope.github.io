---
date: 2020-10-09
title: YAML 文件案例
icon: discover
category: 小程序
---

## 账户页面

![账户页面二维码](./assets/account.png)

```yaml
title: 统一身份认证
grey: true
content:
  - tag: text
    type: p
    heading: 统一身份认证介绍
    text:
      - 学校为每个人分配了一个统一身份，这个身份就是您的邮箱账号和密码。
      - 无论您登录校园网、进入内网查看通知、查看是否欠书未还、查看校园卡余额以及消费记录、进入本科生或研究生选课平台、查成绩、查课表、访问 BB 平台、本科教学服务系统等等，各种与信息查询提交的有关的操作都需要这个统一身份。

  - tag: list
    header: 了解更多
    content:
      - text: 统一身份认证
        icon: apply
        path: authorize

      - text: 校园邮箱
        icon: email
        path: mail

  - tag: footer
    author: Mr.Hope
    time: 2020年7月17日

shareable: true
```

## 校园卡介绍

![校园卡介绍页面二维码](./assets/card-intro.png)

```yaml
title: 校园卡介绍
author: Mr.Hope
date: 2020年7月18日
shareable: true
content:
  - tag: title
    text: 校园卡说明

  - tag: text
    type: p
    text: 校园卡是您在东师校园内的通用消费卡以及身份认证卡，是您在东师的日常生活与学习中是非常重要的存在，一旦忘记携带或丢失校园卡会造成诸多不便。

  - tag: img
    src: https://mp.innenu.com/img/card/card.jpg
    desc: 校园卡

  - tag: title
    text: 主要功能

  - tag: text
    type: ul
    heading: 生活
    text:
      - 宿舍网络的自助付费
      - 食堂消费
      - 超市购物
      - 浴池洗浴
      - 洗漱间的生活用水
      - 饮用水接取
      - 体育馆门禁

  - tag: text
    type: ul
    heading: 学习
    text:
      - 图书超期罚款
      - 图书馆电子阅览室的图书借阅
      - 图书馆门禁
      - 期中期末考试身份认证
      - 计算机等级考试身份认证
      - 英语四六级考试身份认证

  - tag: title
    text: 消费限额

  - tag: text
    type: p
    text:
      - "由于校园卡是东师内部的“电子钱包”，学校为了保障您的资金安全，对校园卡进行了消费上的限制。每张校园卡的初始消费设置为: 单次消费限额为 20 元，每日累计消费限额为 100 元。"
      - 如果当日您的消费金额超过限额，则在刷卡时，您需要在刷卡机上输入密码才能完成消费。
      - 当然，您可以根据自身的消费习惯通过自助终端机修改消费限额，并定期更改校园卡密码。

  - tag: title
    text: 不同的计费系统

  - tag: text
    text: 直饮机、生活用水、网费都是有自己的小钱包的，而且可以通过校园卡充值。同时电费和浴池(本部)也是有自己的钱包的。
```
