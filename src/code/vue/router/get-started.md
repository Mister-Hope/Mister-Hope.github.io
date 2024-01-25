---
date: 2020-05-04
title: 快速上手
icon: router
category: Vue
tag:
  - Vue Router
  - 快速上手
---

## 介绍

Vue Router 是 Vue 官方出品的路由组件，托管整个 Vue 项目路由。

## Route 属性

在日常开发中，我们主要关注选项中的 `routes` 属性。`routes` 属性是一个数组，其每一个元素是一个对象，对象会包含 `path`，`component` 两个必填属性与 `meta` 和 `name` 两个可选属性。

- `path`: 填入需要配置的网站页面的 `url`

- `conponent`: 导入需要显示的 Vue 文件组件

- `name` (可选): 指定该组件与 `url` 的别名

- `meta` (可选): 该属性可以填入该界面的额外信息 (比如 `title`、`author` 等)

也就是说，Vue 项目网站能够访问到的地址都能够被 `route` 数组中的某个元素的 `path` 值所匹配，此时页面展示的是该元素 `component` 属性对应的 vue 文件视图。

当希望在 Vue 项目中添加新的界面的时候，只需制作好其组件文件，并在 `route` 数组中添加新项，指定的带设定 `url` 路径为响应 vue 文件即可。

## 载入 Router

通过调用 `app.use(router)`，我们会触发第一次导航且可以在任意组件中以 `this.$router` 的形式访问它，并且以 `this.$route` 的形式访问当前路由：

```ts
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

// 5. 创建并挂载根实例
const app = Vue.createApp({});
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router);

app.mount("#app");

// 现在，应用已经启动了！
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

编程式导航对动态导航是十分有用的，比如需要根据不同人的名字导航到不同界面，这个时候就可以动态生成路由，再使用 `router.push` 函数导航到相应界面。
