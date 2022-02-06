---
title: in东师小程序快速上手
icon: creative
category: 小程序
---

本部分将手把手引领您完成一个页面的制作，其中会涉及最常见的组件。

<!-- more -->

## 材料准备

假定您已经获得以下材料:

- 统一身份认证登陆
  ![统一身份认证登陆](https://mp.innenu.com/img/account/authserver.jpg)
- 修改密码页面截图
  ![修改密码页面截图](https://mp.innenu.com/img/account/reset-password.jpg)
- 别名管理页面截图
  ![别名管理页面截图](https://mp.innenu.com/img/account/email-address.jpg)

::: details 相关材料

一、**获得学号**

学号是 10 位数字，您收到的录取通知书编号和日后发放的校园卡 💳 卡号即是学号。

二、**获得邮箱(别名)**

1. 访问 <https://authserver.nenu.edu.cn/authserver/login>
1. 使用学号与默认密码进行登录。
1. 登陆后，您可以在“别名管理中”中通过别名获得自己的邮箱号 ✉
1. 邮箱地址统一为 “别名” + “@nenu.edu.cn”

默认密码: Nenu + 身份证后六位，X 用 1 代替

修改密码及密保绑定

1. 访问 <https://authserver.nenu.edu.cn/authserver/login>
1. 点击“修改密码”，修改初始密码。

提示

- 为了您找回密码时的便捷，建议您在个人资料处绑定其他邮箱或绑定手机，便于密码遗忘后自助找回。
- 由于身份证号可能被他人获得，为了您的资金、消费以及课程成绩安全 🔐，⚠ 请您务必更换默认密码 🔑。

:::

接下来您就需要按照 [参数表](./tag-list.md) 进行页面的创建。

## 创建页面配置文件

打开 VSCode 并选择“文件”-“新建文件”，并立即保存文件为 `authorize.yml`。

## 编写总体结构

按照 [参数表 → 总体结构](./tag-list.md#总体结构) 完成页面的基础信息添加。页面的标题可以起为“统一身份认证”，假定当天是 2021 年 11 月 1 日，您叫张三。

::: details 总体结构

| 参数      | 必填 |       值类型        | 内容         | 备注                                         |
| --------- | :--: | :-----------------: | ------------ | -------------------------------------------- |
| title     |  是  |      `string`       | 导航栏标题   | 一般不超过八个字，六字及以下为佳             |
| desc      |  否  |      `string`       | 页面描述     | 会显示在页脚                                 |
| author    |  否  |      `string`       | 页面的作者   | 会显示在页脚                                 |
| time      |  否  |      `string`       | 页面更新时间 | 会显示在页脚                                 |
| grey      |  否  |      `boolean`      | 使用灰色背景 | 默认为白色背景                               |
| content   |  否  | `ComponentConfig[]` | 页面的内容   | 数组的每个对象会最终渲染为一个组件           |
| shareable |  否  |      `boolean`      | 是否可被分享 | 是否可以使用小程序的界面分享，默认为 `false` |

:::

参照上述说明，你可以很轻松的编写如下内容:

```yml
title: 统一身份认证
author: 张三
date: 2021年11月1日
shareable: true
content: []
```

在这里，`content` 暂时被设置成了空数组，它表示页面的内容，接下来我们就需要丰富和完善它。

## 添加第一个组件——标题

如 [参数表 → 支持的组件](./tag-list.md#支持的组件) 所说:

> `content` 的每个元素都为一个对象，该对象会最终渲染为一个组件。
>
> 每个配置对象有一个固定的键 `tag` 来决定渲染的组件。有效的 `tag` 值及对应的渲染结果如下:
>
> - [title](#title): 大标题
> - ...

现在，我们需要为小程序页面添加第一个组件——标题。

为让小程序渲染它，我们需要为 content 数组添加第一个元素。为了让这个元素渲染为标题组件，我们需要设置元素为一个对象，并设置 `tag` 键的值为 `title`:

```yml
title: 统一身份认证
author: 张三
date: 2021年11月1日
shareable: true
content:
  - tag: title
```

接下来，我们需要参阅 [参数表 → title 参数](./tag-list.md#title)，设置更多参数描述组件。

::: details title 参数

| 参数 | 必填 |  值类型  | 内容       |
| ---- | :--: | :------: | ---------- |
| text |  是  | `string` | 大标题文字 |

:::

可以看到，我们需要使用 `text` 来设置标题组件的文字:

```yml
title: 统一身份认证
author: 张三
date: 2021年11月1日
shareable: true
content:
  - tag: title
    text: 获得学号
```

## 添加第二个组件文本

查阅参数表可知，小程序提供了标题组件，以及段落、无序列表、有序列表三个文字组件。

对于 “学号是 10 位数字，您收到的录取通知书编号和日后发放的校园卡 💳 卡号即是学号。” 这段文字来说，它显然不够充当一个段落，因此，我们选择文本组件。而文本组件的 `tag` 是 `text`，其参数如下:

::: details 文本组件参数

| 参数    | 必填 |                       值类型                       | 内容         | 备注               |
| ------- | :--: | :------------------------------------------------: | ------------ | ------------------ |
| heading |  否  |               `string` \| `boolean`                | 标题         |                    |
| text    |  是  |               `string` \| `string[]`               | 文字内容     |                    |
| type    |  否  |   `'tip'` \| `'warn'` \| `'danger'` \| `'info'`    | 文字块样式   | 不填无额外样式     |
| align   |  否  | `'left'` \| `'right'` \| `'center'` \| `'justify'` | 段落对齐方式 | 默认为 `'justify'` |

:::

我们显然不需要对其设置额外的样式，默认的两端对齐也可以满足要求，那么我们只需要通过 `text` 属性设置文字:

```yml
title: 统一身份认证
author: 张三
date: 2021年11月1日
shareable: true
content:
  - tag: title
    text: 获得学号

  - tag: text
    text: 学号是 10 位数字，您收到的录取通知书编号和日后发放的校园卡 💳 卡号即是学号。
```

在这里，我们注意到 `text` 同时接收 string 和 string 数组，这是因为文字可以有一个或多个段落，所以如果我们需要添加一个新行，我们需要将其改为:

```yml
title: 统一身份认证
author: 张三
date: 2021年11月1日
shareable: true
content:
  - tag: title
    text: 获得学号

  - tag: text
    text:
      - 学号是 10 位数字，您收到的录取通知书编号和日后发放的校园卡 💳 卡号即是学号。
      - 这里的文字另起了新行...
```

## 文本排版

对于同样的排版，您可以有多种方式来实现。假定我们想实现以下文字:

```
春眠不觉晓
处处闻啼鸟
```

借用文字组件，以下写法的显示并无不同:

- 使用数组创建多个段落

  ```yml
  - tag: text
    text:
      - 春眠不觉晓
      - 处处闻啼鸟
  ```

- 使用多行字符串

  ```yml
  - tag: text
    text: |-
      春眠不觉晓
      处处闻啼鸟
  ```

  ```yml
  - tag: text
    text:
      - |-
        春眠不觉晓
        处处闻啼鸟
  ```

- 使用换行符

  ```yml
  - tag: text
    text: "春眠不觉晓\n处处闻啼鸟"
  ```

  ```yml
  - tag: text
    text:
      - "春眠不觉晓\n处处闻啼鸟"
  ```

所以您完全可以根据自己的习惯去进行编辑，不过 Mr.Hope 还是推荐前两种，因为他们更为直观。

## 媒体文件存放

由于 YAML 是纯文本文件，所有的图片、文件等需单独列出，并在对应的配置项处填入对应的网址。

in 东师服务器文件结构如下:

- 文件: 存放在 `https://mp.innenu.com/file/`
- 图片: 存放在 `https://mp.innenu.com/img/`
- 页面 YAML: 存放在 `https://mp.innenu.com/res/`
- 图标: 存放在 `https://mp.innenu.com/res/icon/`

::: info

关于完整的服务器文件结构，请访问 <https://github.com/Hope-Studio/innenu-res>

:::

对于本页面，您可以获得的图片按照内容进行命名:

- 统一身份认证登陆: `authserver.jpg`
- 修改密码页面截图: `reset-password.jpg`
- 别名管理页面截图: `email-address.jpg`

同时，您需要在对应的配置项填入:

- `https://mp.innenu.com/img/account/authserver.jpg`
- `https://mp.innenu.com/img/account/reset-password.jpg`
- `https://mp.innenu.com/img/account/email-address.jpg`

提交时，直接提交下列压缩包结构。

```
├─ img
|  └─ account
|     ├─ authserver.jpg
|     ├─ reset-passwor.jpg
|     └─ email-address.jpg
└─ res
   └─ guide
       └─ account
           └─ authorize.yml
```

## 继续完成页面

类似的，通过添加新元素设置 `tag` 选定组件，并查表添加对应参数后，您很容易就可以得到如下的页面:

```yml
title: 统一身份认证
author: 张三
date: 2021年11月1日
shareable: true
content:
  - tag: title
    text: 获得学号

  - tag: text
    text: 学号是 10 位数字，您收到的录取通知书编号和日后发放的校园卡💳卡号即是学号。

  - tag: title
    text: 获得邮箱(别名)

  - tag: ul
    text:
      - 访问 https://authserver.nenu.edu.cn/authserver/login

  - tag: copy
    text: https://authserver.nenu.edu.cn/authserver/login

  - tag: ul
    text:
      - 使用学号与默认密码进行登录。
      - 登陆后，您可以在“别名管理中”中通过别名获得自己的邮箱号✉
      - 邮箱地址统一为 “别名” + “@nenu.edu.cn”

  - tag: img
    src: https://mp.innenu.com/img/account/email-address.jpg
    desc: 本例中邮箱为 "mr-hope@nenu.edu.cn"

  - tag: text
    type: info
    heading: 默认密码
    text: Nenu + 身份证后六位，X 用 1 代替

  - tag: img
    src: https://mp.innenu.com/img/account/authserver.jpg

  - tag: title
    text: 修改密码及密保绑定

  - tag: ul
    text: 请您访问 https://authserver.nenu.edu.cn/authserver/login 进行登录。

  - tag: copy
    text: https://authserver.nenu.edu.cn/authserver/login

  - tag: ul
    text: 点击“修改密码”，修改初始密码。

  - tag: img
    src: https://mp.innenu.com/img/account/reset-password.jpg

  - tag: ul
    type: tip
    heading: Mr.Hope の 友情提示
    text:
      - 为了您找回密码时的便捷，建议您在个人资料处绑定其他邮箱或绑定手机，便于密码遗忘后自助找回。
      - 由于身份证号可能被他人获得，为了您的资金、消费以及课程成绩安全🔐，⚠请您务必更换默认密码🔑。
```

这样您就创建出了一个简单的页面。

## 使用列表进行导航

小程序主要使用列表和网格组件导航至其他页面，当然部分其他组件也有类似功能。

如果您同时提交了多个文件，或者您编写的页面想要导航至其他页面，您就需要创建列表来构建“页面跳转”。

列表组件因为含有多个子项目，其 `content` 属性的值和文件的根键值 `content` 很像。您需要为数组中的每个元素设置文字与可选的图标、描述和链接。

::: details 列表参数

| 参数    | 必填 |        值类型         | 内容     | 备注                                                      |
| ------- | :--: | :-------------------: | -------- | --------------------------------------------------------- |
| header  |  否  | `string` \| `boolean` | 头部标题 | 不填会在标题所在处留空占位，设置为 `false` 来取消留空占位 |
| footer  |  否  |       `string`        | 尾部标题 |                                                           |
| content |  是  |    `SimpleList[]`     | 列表内容 |                                                           |

列表每一项参数如下:

| 参数 | 必填 |  值类型  | 内容                                                                |
| ---- | :--: | :------: | ------------------------------------------------------------------- |
| icon |  否  | `string` | 列表图标的简称或在线网址                                            |
| text |  是  | `string` | 列表项文字                                                          |
| desc |  否  | `string` | 列表项描述，显示在尾部                                              |
| path |  否  | `string` | 对应配置文件的相对或绝对路径(不带后缀名)，以 `/` 结尾默认为 `index` |

:::

假定我们需要提交如下的页面结构:

```
└─ res
   ├─ intro
   |    ...
   └─ guide
       └─ account
            ├─ mail
            |  ├─ intro.yml  (邮箱介绍)
            |  ├─ ios.yml  (iOS 邮箱设置)
            |  └─ android.yml (安卓邮箱设置)
            |
            ├─ authorize.yml (统一身份认证)
            └─ index.yml (账号主页)
```

在 `index.yml` 中，我们可以设置如下的列表项:

```yml
title: 账号
content:
  - tag: list
    header: 了解更多
    content:
      - text: 统一身份认证

  - tag: list
    header: 校园邮箱
    content:
      - text: 邮箱介绍

      - text: 安卓邮箱客户端设置

      - text: iOS 邮箱客户端设置
```

我们可以添加额外的 `icon` 属性来设置一个美观的图标。当前可用的全部图标请详见 <https://github.com/Hope-Studio/innenu-res/blob/main/res/icon/>。 我们可以直接找到相应图标并设置 `icon` 为文件名 (不带 `.svg` 后缀)。

```yml
title: 账号
content:
  - tag: list
    header: 了解更多
    content:
      - text: 统一身份认证
        icon: authorize

  - tag: list
    header: 校园邮箱
    content:
      - text: 邮箱介绍
        icon: email

      - text: 安卓邮箱客户端设置
        icon: android

      - text: iOS 邮箱客户端设置
        icon: apple
```

接下来，我们需要通过 `path` 设置路径。我们使用 `/` 来分割目录，所以 `intro.yml` 相对 `index.yml` 的路径为 `mail/intro`。(这里同样省略万年不变的后缀 `.yml`)

```yml
title: 账号
content:
  - tag: list
    header: 了解更多
    content:
      - text: 统一身份认证
        icon: authorize
        path: authorize

  - tag: list
    header: 校园邮箱
    content:
      - text: 邮箱介绍
        icon: email
        path: mail/intro

      - text: 安卓邮箱客户端设置
        icon: android
        path: mail/android

      - text: iOS 邮箱客户端设置
        icon: apple
        path: mail/ios
```

此时，小程序就可以渲染出正确的列表项，并在您点击“邮箱介绍”时跳转到新页面渲染 `intro.yml` 文件。

::: tip 回退上一层和从根目录访问

有些时候，您可能需要从 `intro.yml` 跳转到 `index.yml` 中去，这就涉及到表示父目录的方式。我们使用 `../` 表示父目录，所以对于 `intro.yml` 来说，`index.yml` 的路径可写为 `../index`，而参数表中提到 `index` 为默认文件，所以可以简写为 `../`。

有些时候您能想从根目录开始描述路径，这种情况下，请以 `/` 开头设置 path，此时您会从 `res/` 文件夹下开始进行路径的匹配。

```
└─ res
   ├─ intro
   |    ...
   └─ guide
       └─ account
            ├─ mail
            |  ├─ intro.yml  (邮箱介绍)
            |  ├─ ios.yml  (iOS 邮箱设置)
            |  └─ android.yml (安卓邮箱设置)
            |
            ├─ authorize.yml (统一身份认证)
            └─ index.yml (账号主页)
```

比如，对于所有文件来说，他们都可以通过 `/guide/account/mail/intro` 访问 `intro.yml`。

:::

至此，您应该能够独自完成大部分的页面编辑工作了。
