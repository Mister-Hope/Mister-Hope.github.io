---
icon: vue
category: Vue
---

# Vue 单文件组件说明

Vue 文件即是一个组件文件，组件文件既可以成为其他 vue 文件的一个组件，又可以添加到 router 中成为一个页面视图。

Vue 文件主要由三部分构成:

- `template` 对应网站视图树，即 HTML 部分

- `script` 对应网站的脚本。即 js 部分，默认为 Javascript，可以添加 `lang="ts"` 来指定页面脚本文件为 `Typescript`

- `style` 对应网站的样式，即 CSS 部分，可以通过添加 `scoped` 属性来指定样式只在当前文件生效。

在脚本部分中，如有需要，需要使用 `export default{}` 向外暴露一个对象以供 Router 或其他 Vue 文件引用。

在 HTML 标签中，由于页面都被 Router 托管，如需要跳转到本网站的其他视图上去，需要使用 `<route-link to="内部url地址">链接文字</route-link>`

---

下面是学校公众号界面

```js
<template>
  <div class="container">
    <h2 class="px-3 pt-3">学院微信</h2>
    <hr class="mx-3" />
    <div class="row px-3">
      <a
        :href="item.url"
        :key="item.text"
        class="col-4 col-sm-3 col-md-2 col-lg-1 col-fix"
        v-for="item in gzh"
      >
        <img
          :src="require(`@/icon/function/schoolGzh/${item.src}.jpg`)"
          class="img-thumbnail mt-1 img-fix"
          style="border-radius:50%;"
        />
        <p class="mx-1 my-2 gzhName">{{ item.text }}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "SchoolGzh",
  data: () => ({
    gzh: [
      {
        url:
          "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3NTM3MTkzOQ==&scene=110#wechat_redirect",
        text: "美术学院",
        src: "art"
      },
      // ...中间的学院数据在此省略
      {
        url:
          "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIwMzI0NTE0NQ==#wechat_webview_type=1&wechat_redirect",
        text: "纽瓦克学院",
        src: "runin"
      }
    ]
  })
};
</script>
<style scoped>
.col-fix {
  padding: 0 5px;
}
.img-fix {
  width: 90%;
  margin: 0.25rem 5% 0 5%;
}
.gzhName {
  text-align: center;
  color: #000;
  font-size: 14px;
}
</style>
```

下面是网站的 404 页面

```js
<template>
  <div class="container">
    <h1 mt-1>Page not found</h1>
    <p>
      很抱歉并未找到您打开的界面，可能是您输入的路径有误，网页尚未制作或者出现了一个bug。
    </p>
    <p>
      您可以反馈给
      <router-link
        to="http://wpa.qq.com/msgrd?v=3&amp;uin=1178522294&amp;site=qq&amp;menu=yes"
        >Mr.Hope</router-link
      >
    </p>
  </div>
</template>
<script>
export default{
  name: "Page404"
}
</script>
```
