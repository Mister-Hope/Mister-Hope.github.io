---
date: 2020-08-18
title: 命令行
icon: shell
category: VS Code
tag:
  - VS Code
  - 软件
---

VS Code 具有强大的命令行界面(CLI)，可让您自定义启动编辑器以支持各种情况的方式。

确保 VS Code 可执行文件已经添加到您的环境变量。只需键入 `code` 即可启动 VS Code。

```sh
# 使用 code 打开当前文件夹
code .

# 在最近使用面板
code -r .

# 打开新窗口
code -n

# 改编当前语言
code --locale=es

# 打开文件比较器
code --diff <file1> <file2>

# 打开文件并跳转到指定的行(和列)
code --goto package.json:10:5

# 查看帮助选项
code --help

# 禁用所有扩展
code --disable-extensions .
```

## .vscode 文件夹

基于工作区的 `.vscode` 文件夹位于根目录下。例如任务运行对应的 `tasks.json` 配置文件和调试器对应的 `launch.json` 文件。
