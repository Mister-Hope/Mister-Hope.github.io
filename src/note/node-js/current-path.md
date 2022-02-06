---
icon: nodeJS
date: 2019-09-10
tag:
  - Node.js
---

# `__dirname`、`__filename` 和 `process.cwd()` 三者的区别

1. `process.cwd()` 方法返回 Node.js 进程当前工作的目录

   例: 我在 `F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process` 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 `run test.js`

   ```js
   const cwd = process.cwd();
   console.log(cwd);
   ```

   输出如下 `F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process`

1. `__dirname` 是 Node.js 的一个全局变量，获得当前文件所在目录的完整目录名

   还在上面的 js 文件中输入一下代码

   ```js
   console.log(__dirname);
   ```

   输出如下 `F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process`

   现在一看感觉上面两个方法是一样的，其实不是。node.js 进程当前工作的目录有可能不是该文件所在目录的完整目录。例如: 我用 `node webpack ..` 打包了一个应用程序，
   我用这个应用程序可以生产出一套完整的页面架构，在应用程序的配置文件中 console.log(cwd)
   在完整的这个页面架构中执行启动这个项目的命令，则对应的 cwd 就是当前项目所在的绝对路径,而不是应用程序的路径

1. `__filename` 也是 Node.js 的全局变量 Node.js 中，在任何模块文件内部，可以使用 `__filename` 变量获取当前模块文件的带有完整绝对路径的文件名

```js
console.log(__filename);
```

输出 `F:\自己的文件\自己在网上学习的知识点\node 学习\node-API\process\test.js`
