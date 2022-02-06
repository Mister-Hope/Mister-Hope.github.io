---
title: 快速原型开发
icon: create
category: Vue
tag:
  - Vue Cli
---

您可以使用 `vue serve` 和 `vue build` 命令对单个 `*.vue` 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展:

```bash
npm install -g @vue/cli-service-global
```

<!-- more -->

## vue serve

```md
Usage: serve [options][entry]

在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器

Options:

- `-o`, `--open`: 打开浏览器
- `-c`, `--copy`: 将本地 URL 复制到剪切板
- `-h`, `--help`: 输出用法信息
```

您所需要的仅仅是一个 `App.vue` 文件:

```html
<template>
  <h1>Hello!</h1>
</template>
```

然后在这个 `App.vue` 文件所在的目录下运行:

```bash
vue serve
```

::: tip

`vue serve` 使用了和 `vue create` 创建的项目相同的默认设置 (webpack、Babel、PostCSS 和 ESLint)。它会在当前目录自动推导入口文件——入口可以是 `main.js`、`index.js`、`App.vue` 或 `app.vue` 中的一个。您也可以显式地指定入口文件:

```bash
vue serve MyComponent.vue
```

:::

## vue build

```md
Usage: build [options][entry]

在生产环境模式下零配置构建一个 .js 或 .vue 文件

Options:

- `-t`, `--target <target>`: 构建目标 (app | lib | wc | wc-async, 默认值: app)
- `-n`, `--name <name>`: 库的名字或 Web Components 组件的名字 (默认值: 入口文件名)
- `-d`, `--dest <dir>`: 输出目录 (默认值: dist)
- `-h`, `--help`: 输出用法信息
```

您也可以使用 `vue build` 将目标文件构建成一个生产环境的包并用来部署:

```bash
vue build MyComponent.vue
```

`vue build` 也提供了将组件构建成为一个库或一个 Web Components 组件的能力。
