---
title: 快速上手
icon: router
category: Vue
tag:
  - Vue Router
  - 快速上手
---

## 介绍

Vue Router 是 Vue 官方出品的路由组件，托管整个 Vue 项目路由。

## 配置文件说明

配置文件会引入 Node.js 模块 `vue-router`，并配置信息，最终向外暴露一个添加了配置信息的 `Router对象`。

在日常开发中，我们只需要关注默认暴露对象的 `route` 属性。(其他属性已经在下方用注释简要说明)

在 inNENU Website 项目中，其配置文件位于 `src/routes` 文件夹下，名称为 `router.ts`。

### Route 属性

在 inNENU Website 中，route 属性由同文件夹下的 `route.ts` 导入。

route 属性是一个数组，其每一个元素是一个对象，对象会包含 `path`，`component` 两个必填属性与 `meta` 和 `name` 两个可选属性。

- `path`: 填入需要配置的网站页面的 `url`

- `conponent`: 导入需要显示的 Vue 文件组件

- `name`(可选): 指定该组件与 `url` 的别名

- `meta`(可选): 该属性可以填入该界面的额外信息(比如 `title`、`author` 等)

也就是说，Vue 项目网站能够访问到的地址都能够被 `route` 数组中的某个元素的 `path` 值所匹配，此时页面展示的是该元素 `component` 属性对应的 vue 文件视图。

当希望在 Vue 项目中添加新的界面的时候，只需制作好其组件文件，并在 `route` 数组中添加新项，指定的带设定 `url` 路径为响应 vue 文件即可。

---

下面是目前项目中使用的 Vue-router 配置文件—— `router.ts` 文件

```ts
/*
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: router配置文件
 * @Date: 2019-02-26 23:43:23
 * @LastEditTime: 2019-05-05 14:35:43
 */

import Vue from "vue";
import Router from "vue-router";
import routes from "./route";

Vue.use(Router); // 使用官方Router

// tslint:disable-next-line: no-var-requires
Vue.use(require("vue-wechat-title")); // 启用wechat客户端内对title属性的支持。

/**
 * @description: 暴露Router对象
 * @param {router} router配置
 * @return: router对象
 */
export default new Router({
  // 设置路由配置
  routes,

  // 使用html5的history API
  mode: "history",

  // 设置根目录为环境变量BASE_URL
  base: process.env.BASE_URL,

  /**
   * 保存滚动位置
   *
   * @param to 新页面route对象
   * @param from 旧页面route对象
   * @param savedPosition 上次保存的滚动位置
   * @returns 返回网页滚动位置
   */
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
});
```

下面是目前项目中使用的路由配置文件—— `route.ts` 文件:

```ts
/*
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: 路由配置文件
 * @Date: 2019-03-25 12:27:33
 * @LastEditTime: 2019-05-05 14:40:14
 */
import Main from "@/views/Main.vue";
import Page404 from "@/views/Page404.vue";

const route = [
  {
    path: "/",
    alias: "/index.html",
    name: "main",
    component: Main,
  },
  {
    path: "/handbook",
    name: "handbook",
    meta: { title: "东师攻略" },
    // 使用 import 来进行异步调用实现懒加载，打包时，webpack 会识别 webpackChunkName 注释，将相同的一起打包一同执行懒加载
    component: () =>
      import(/* webpackChunkName: "handbook" */ "@/views/Handbook.vue"),
  },
  {
    path: "/page/:path",
    alias: "/handbook/:path",
    props: true,
    meta: { title: "东师指南" },
    component: () => import(/* webpackChunkName: "page" */ "@/views/Page.vue"),
  },
  {
    path: "/lecture",
    name: "lecture",
    meta: { title: "讲座信息" },
    component: () =>
      import(/* webpackChunkName: "handbook" */ "@/views/Lecture.vue"),
  },
  {
    path: "/lecture/:school",
    name: "lectureDetail",
    meta: { title: "讲座信息" },
    component: () =>
      import(/* webpackChunkName: "handbook" */ "@/views/Lecture.vue"),
  },
  {
    path: "/tool/calendar",
    name: "calendar",
    meta: { title: "东师校历" },
    component: () =>
      import(/* webpackChunkName: "calendar" */ "@/views/tools/Calendar.vue"),
  },
  {
    path: "/tool/calendar/:time",
    name: "calendarDetail",
    meta: { title: "校历详情" },
    component: () =>
      import(
        /* webpackChunkName: "calendar" */ "@/views/tools/CalendarDetail.vue"
      ),
  },
  {
    path: "/tool/schoolGzh",
    name: "schoolGzh",
    meta: { title: "学院矩阵" },
    component: () =>
      import(/* webpackChunkName: "tool" */ "@/views/tools/SchoolGzh.vue"),
  },
  {
    path: "/tool/NetCharge",
    name: "NetCharge",
    meta: { title: "网费充值" },
    component: () =>
      import(/* webpackChunkName: "tool" */ "@/views/tools/NetCharge.vue"),
  },
  {
    path: "/scence",
    name: "scence",
    meta: { title: "东师风貌" },
    component: () =>
      import(/* webpackChunkName: "scence" */ "@/views/scence/Scence.vue"),
  },
  {
    path: "/scence/benbu",
    name: "benbuScence",
    meta: { title: "本部风貌" },
    component: () =>
      import(/* webpackChunkName: "scence" */ "@/views/scence/Benbu.vue"),
  },
  {
    path: "/scence/jingyue",
    name: "jingyueScence",
    meta: { title: "净月风貌" },
    component: () =>
      import(/* webpackChunkName: "scence" */ "@/views/scence/Jingyue.vue"),
  },
  {
    path: "/intro/studentUnion",
    name: "su",
    meta: { title: "校学生会简介" },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/SU.vue"),
  },
  {
    path: "/intro/department",
    name: "department",
    meta: { title: "校学生会部门简介" },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/Department.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "关于我们" },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/About.vue"),
  },
  {
    path: "/about/Mr-Hope",
    name: "mrhope",
    meta: { title: "Mr.Hope简介" },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/MrHope.vue"),
  },
  {
    path: "/about/question",
    name: "question",
    meta: { title: "其他问题" },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/Question.vue"),
  },
  {
    path: "*",
    name: "404",
    meta: { title: "未找到界面" },
    component: Page404,
  },
];

export default route;
```

## 导航

使用 Vue Router 进行界面间导航有两种方式。一种是通过在视图层定义，一种在脚本中定义。

### 视图层

使用 `router-link` 标签进行导航。

`router-link` 标签可以设置以下几个属性:

- `to`: 填入想要导航的地址，可以是绝对路径也可以是相对路径。

- `tag`(可选): 控制 `router-link` 最终渲染的标签，默认渲染为 `a` 标签。

  ```html
  <!-- 点击导航至guide -->
  <router-link to="/guide"> 点击导航 </router-link>

  <table>
    <tr>
      <!-- 点击导航至doc，此时router-link标签不再渲染为a标签，而是渲染为td标签。
      这是因为tr标签直接包含a标签是不合法的且不会显示 -->
      <router-link to="/doc" tab="td"> 点击导航 </router-link>
    </tr>
  </table>
  ```

### 函数层

- `router.push(location)`: 直接填入一个地址，将导航到这个新地址中。

  > location 接受多种类型的格式:

  ```js
  // 字符串
  router.push("home");

  // 对象
  router.push({ path: "home" });

  // 命名的路由
  router.push({ name: "user", params: { userId: "123" } });

  // 带查询参数，变成 /register?plan=private
  router.push({ path: "register", query: { plan: "private" } });
  ```

- `router.replace(location)`: 直接填入一个地址，将当前界面重定向到这个新地址中。它不会向 `history` 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 `history` 记录。

  > location 的格式同上

- `router.go(n)`: 填入一个整数，如果为正，则前进 `n` 步，反之后退。
- `router.back()`: 后退一步
- `router.forward()`: 前进一步

  ```js
  // 在浏览器记录中前进一步，等同于 history.forward()
  router.go(1);

  // 后退一步记录，等同于 history.back()
  router.go(-1);

  // 前进 3 步记录
  router.go(3);

  // 如果 history 记录不够用，那就默默地失败呗
  router.go(-100);
  router.go(100);
  ```

在使用 Vue-cli 构建的项目中，在组件内部访问 `this.$router` 即是路由管理器对象。

如:

```xml
<template>
  <h1 @click='navigate'>张伯望很帅</h1>
</template>
<script>
  export default{
    methods:{
      navigate(){
        this.$router.push('/zhang/is/handsome');
        }
    }
  }
</script>
```

编程式导航对动态导航是十分有用的，比如需要根据不同人的名字导航到不同界面，这个时候就可以通过在 js 中进行字符串处理，再使用 `router.push` 函数导航到相应界面。
