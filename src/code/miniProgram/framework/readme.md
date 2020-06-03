---
title: 小程序框架说明
icon: info
category: 小程序
---

::: danger 公告
这是一个由 Mr.Hope 独立编写的小程序界面开发框架。全部代码均由 Mr.Hope 编写，如有抄袭、商用，Mr.Hope 保留追究其责任的权利。
:::

<!-- more -->

## 开发框架优点

1. 将界面开发的复杂过程转换为编写简单的 json 文件。开发门槛低，

2. 拥有详细的开发文档说明，简单易懂，页面文件自述性高，没有开发基础的人也可以经过简单阅读后看懂页面文件大体描述内容。[查看例子点这里](demo.md)

3. 开发者无需着眼于界面样式或是功能的实现，只需着眼于在 json 文件中添加渲染界面所需参数，即可完成界面编写。开发者只需在开发过程中按照开发说明录入参数，并注意格式即可。

## 开发工具

开发工具使用 vscode，具体详见[vscode 说明](../../vscode/readme.md)或[vscode 简单说明](../../vscode/simple.md)

## 开发说明

### 简单界面编写说明

1. 新建一个或多个 json 文件，对文件进行合理命名，使用“文件主题+编号”格式，命名为`xxx.json`。(多个文件请命名为 `xxx0.json` , `xxx1.json` , ...)文件命名只能包含英文与数字，文件名中不得包含空格。由多个单词组成的文件名建议使用驼峰表示法(除了多单词的首字母大写外均小写)。如`厚普公益学校`可以表示为`hopeGoodSchool`。

2. 整理界面所需的图片和图标，图片和图标请使用[压缩网站](https://tinypng.com)压缩至 800Kb 以下(带有文字或需要查看及其详细细节的图片可以提升至不多于 1.2Mb)，并按照`页面文件名称`+`编号`的形式命名，如 studentOrg1.jpg。

3. 在 json 中创建一个 array，该 array 的每个元素均为一个`Object`。对于数组中的每个`Object`，其内必须包含一个有效的`tag`值。该值决定了该`object`所显示的内容。([您在说什么？](simpleDebug.md))

   每一个`Object`最终被渲染成为了页面的一部分。

   按照[tag 值参数表](tagList.md)对**Object**剩余参数进行填写，并将所有，编写界面内容。

4. 将 json 文件与其他资源打包成 zip 压缩包，发送至[QQ:1178522294](https://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq)。

   > 不涉及到复杂界面编写的请直接看[开发注意事项](#开发注意事项)

### 复杂界面编写说明

对文件进行合理命名，使用“文件主题+编号”格式。

1. 在指定的路径下新建 xxx.ts 与 xxx.wxml 文件，并将其界面路径添加至 app.json 中的 pages 数组中。\*\*

2. 在 xxx.js 中输入:

   ```ts
   import $register from "wxpage";
   import {
     resolvePage,
     setOnlinePage,
     setColor,
     changeNav,
   } from "../utils/page";

   $register("module1", {
     onNavigate(option) {
       resolvePage(option);
     },

     onLoad(res: any) {
       setOnlinePage(res, this);
     },

     onShow() {
       if (this.data.page) {
         // 设置胶囊和背景颜色
         const { nc, bc } = setColor(this.data.page[0].grey);

         wx.setNavigationBarColor(nc);
         wx.setBackgroundColor(bc);
       }
     },

     onPageScroll(event) {
       changeNav(event, this);
     },

     onShareAppMessage() {
       return {
         title: this.data.page[0].title,
         path: `/module/sharePage?aim=${this.data.page[0].aim}`,
       };
     },
   });
   ```

   ::: tip
   为了方便查错以及后续更改，在复制粘贴时保留原代码换行及缩进样式。
   :::

3. 在 xxx.wxml 中输入:

   ```xml
     <import src="/components/template" />
     <template is="all" data="{{page,T,nm}}" />
   ```

4. 对照 tag 值参数表文件进行界面内容编写。

   页面的编写主要通过操纵处于界面 data 下名为**page**的**array**来完成。该**array**的每个**element**均为一个**Object**。对于数组中的每个**Object**，其内必须包含**拥有有效值的 tag 属性**，**tag 的 value**决定了该**object**所显示的内容。

5. 在 xxx.js 中添加与编写函数。

   如果页面包含选择器、开关或者滑块，请在回调函数中处理其他逻辑

   ```ts
     list({ detail }: any) {
       if (detail.event) this[detail.event as ListAction](detail.value);
     },
   ```

   ::: warning
   `ListAction`类型需要自行声明
   :::

最后测试无误后，新建分支并上传到代码库中，等待 Mr.Hope 审核合并。

## 开发注意事项

下面是开发中需要注意的一些问题

- **p**组件文字排版

  1. 在针对段落文字排版时，请使用连续的三个空格来代替首行缩进;
  2. 段落里表示文字标题时请不要缩进，在尾部添加中文冒号并直接换行;
  3. 在段落里表示有序列表时请使用“空格+编号+英文句点+空格“的方式来表示。

- **img**、**p**组件图片链接填写

  请在 `src` 中填入 `https://mp.nenuyouth.com/img/文件名/图片文件名+编号.jpg`。

- **doc**组件文档路径填写

  请在 `url` 中填入 `https://mp.nenuyouth.com/file/文件名.文件类型`

- **audio**音频路径填写

  请将音频上传至微信公众号并编辑图文发送，在 `src` 中填写图文链接。(请一直保留微信推送与素材库里的文件)

- **swiper**组件图片链接填写

  请在 `url` 的每个 element 依次填入 `https://mp.nenuyouth.com/img/文件名/图片文件名+编号.jpg`。
