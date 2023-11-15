---
date: 2021-00-27
title: 搭建 Node 开发环境
icon: leaf
order: 3
category: Node.js
tag:
  - Node.js
  - 软件
---

由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: **Visual Studio Code**。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。

<!-- more -->

::: info

有关 VS Code 使用教程请[访问这里](../../software/vscode/README.md)

:::

## 运行和调试 JavaScript

在 VS Code 中，我们可以非常方便地运行 JavaScript 文件。

VS Code 以文件夹作为工程目录 (Workspace Dir)，所有的 JavaScript 文件都存放在该目录下。此外，VS Code 在工程目录下还需要一个 `.vscode` 的配置目录，里面存放里 VS Code 需要的配置文件。

假设我们在 `C:\Work\` 目录下创建了一个 hello 目录作为工程目录，并编写了一个 `hello.js` 文件，则该工程目录的结构如下:

```
hello/ <-- workspace dir
|
├─ hello.js <-- JavaScript file
|
└─ .vscode/ <-- VS Code config
      |
      └ launch.json <-- VS Code config file for JavaScript
```

可以用 VS Code 快速创建 `launch.json`，然后修改如下:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run hello.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceRoot}/hello.js",
      "stopOnEntry": false,
      "args": [],
      "cwd": "${workspaceRoot}",
      "preLaunchTask": null,
      "runtimeExecutable": null,
      "runtimeArgs": ["--nolazy"],
      "env": {
        "NODE_ENV": "development"
      },
      "externalConsole": false,
      "sourceMaps": false,
      "outDir": null
    }
  ]
}
```

有了配置文件，即可使用 VS Code 调试 JavaScript。

## 视频演示

- [视频演示](https://www.bilibili.com/video/av5827351/)
