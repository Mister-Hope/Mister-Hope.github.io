---
date: 2023-02-26
title: 快速上手 Vue.js
icon: creative
category: Vue
tag:
  - 快速上手
  - 基础
order: 2
---

## Vue.js 是什么

## 起步

::: tip

您应当已了解关于 HTML、CSS 和 JavaScript 的中级知识。

:::

[安装](https://cn.vuejs.org/guide/quick-start.html)

尝试 Vue.js 最简单的方法是使用 [SFC Playground](https://sfc.vuejs.org/)。您可以在浏览器新标签页中打开它，跟着例子自己进行一些尝试。

当然，由于大多数浏览器都支持 ES Module，你可以直接导入 Vue:

```html
<div id="app">{{ message }}</div>

<script type="module">
  import {
    createApp,
    ref,
  } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

  createApp({
    setup() {
      const message = ref("Hello Vue!");

      return {
        message,
      };
    },
  }).mount("#app");
</script>
```

::: warning

`vue-cli` 已经过时，不建议在新项目中使用，请使用 `vite`

:::

::: warning

Mr.Hope **不推荐** 新手直接使用 `vite` 或者 `webpack` 之类的 Bundler 进行上手，尤其是在您不熟悉基于 Node.js 的构建工具的情况下。

请使用 CDN 的方式引入 Vue，并充分熟悉 Vue 的基础知识后再引入 Bundler。

:::
