---
title: 文件处理原则
icon: file
category: Vue
tag:
  - Vue Cli
---

## Index 文件

`public/index.html` 文件是一个会被处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入打包好的 JavaScript 和 CSS 文件的资源链接。它会最终成为 Vue 应用的页面。

## 处理静态资源

静态资源可以通过两种方式进行处理:

- 在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。

- 放置在 `public` 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。

### 从相对路径导入

当您在 JavaScript、CSS 或 `*.vue` 文件中使用相对路径 (必须以 `.` 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 `<img src="...">`、`background: url(...)` 和 CSS `@import` 的资源 URL **都会被解析为一个模块依赖**。

例如，`url(./image.png)` 会被翻译为 `require('./image.png')`，而:

```html
<img src="./image.png" />
```

将会被编译到:

```js
h("img", { attrs: { src: require("./image.png") } });
```

### URL 转换规则

- 如果 URL 是一个绝对路径 (例如 `/images/foo.png`)，它将会被保留不变。

- 如果 URL 以 `.` 开头，它会作为一个相对模块请求被解释且基于您的文件系统中的目录结构进行解析。

- 如果 URL 以 `~` 开头，其后的任何内容都会作为一个模块请求被解析。这意味着您甚至可以引用 Node.js 模块中的资源:

  ```html
  <img src="~some-npm-package/foo.png" />
  ```

- 如果 URL 以 `@` 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 `<projectRoot>/src` 的别名 `@`。**(仅作用于模版中)**

### `public` 文件夹

任何放置在 `public` 文件夹的静态资源都会被简单的复制，而不经过 webpack。您需要通过绝对路径来引用它们。

注意我们推荐将资源作为您的模块依赖图的一部分导入，这样它们会通过 webpack 的处理并获得如下好处:

- 脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。
- 文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。
- 最终生成的文件名包含了内容哈希，因此您不必担心浏览器会缓存它们的老版本。

`public` 目录提供的是一个**应急手段**，当您通过绝对路径引用它时，留意应用将会部署到哪里。如果您的应用没有部署在域名的根部，那么您需要为您的 URL 配置 publicPath 前缀:

- 在 `public/index.html` 或其它通过 `html-webpack-plugin` 用作模板的 HTML 文件中，您需要通过 `<%= BASE_URL %>` 设置链接前缀:

  ```html
  <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
  ```

- 在模板中，您首先需要向您的组件传入基础 URL:

  ```js
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
  ```

  然后:

  ```html
  <img :src="`${publicPath}my-image.png`" />
  ```

### 何时使用 `public` 文件夹

- 您需要在构建输出中指定一个文件的名字。
- 您有上千个图片，需要动态引用它们的路径。
- 有些库可能和 webpack 不兼容，这时您除了将其用一个独立的 `<script>` 标签引入没有别的选择。
