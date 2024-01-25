---
date: 2020-08-18
title: 个性化
icon: decorate
category: VS Code
tag:
  - VS Code
  - 软件
---

您可以做很多事情来个性化 VS Code。

- 改变您的主题
- 改变您的文件图标
- 更改键盘快捷键
- 调整设置
- 安装扩展

## 更改主题

键盘快捷键: `Ctrl + K Ctrl + T`

您可以从 VS Code 扩展市场中安装更多主题。

此外，您可以安装和更改文件图标主题。

::: tip

Mr.Hope 个人推荐 `One Dark Pro` 主题和 `Material Icon Theme` 文件图标主题。

您需要从扩展应用应用商店中安装它们。

:::

## 自定义键盘快捷键

键盘快捷键: `Ctrl + K Ctrl + S`

您可以搜索快捷方式并将自己的键绑定添加到 `keybindings.json` 文件中。

有关更多信息，请参见 [快捷键键绑定](../shortcut-key.md#快捷键编辑器)。

## 调整您的设置

默认情况下，VS Code 显示 **设置** 编辑器，您还可以通过使用 **打开设置(JSON)** 命令打开 `settings.json`。

键盘快捷键: `Ctrl + ,`

**示例**:

- 更改各种 UI 元素的字体大小

  ```json
  // Main editor
  "editor.fontSize": 18,
  // Terminal panel
  "terminal.integrated.fontSize": 14,
  // Output panel
  "[Log]": {
      "editor.fontSize": 15
  }
  ```

- 更改缩放等级

  ```json
  "window.zoomLevel": 5
  ```

- 字体连字

  ```json
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true
  ```

  ::: tip

  这需要安装支持字体连字的字体。FiraCode 是 VS Code 团队中流行的字体。

  Mr.Hope 也强力推荐安装并使用这一字体 (字体详见云文档共享文件)

  :::

- 自动保存

  ```json
  "files.autoSave": "afterDelay"
  ```

  您也可以使用 `文件 > 自动保存` 从顶层菜单切换自动保存。

- 保存时格式化

  ```json
  "editor.formatOnSave": true
  ```

- 粘贴格式

  ```json
  "editor.formatOnPaste": true
  ```

- 更改制表符的大小

  ```json
  "editor.tabSize": 4
  ```

- 空格或制表符

  ```json
  "editor.insertSpaces": true
  ```

- 渲染空白

  ```json
  "editor.renderWhitespace": "all"
  ```

  默认情况下，在文本选择中呈现空白字符。

- 忽略文件/文件夹

  从编辑器窗口中删除这些文件/文件夹。

  ```json
  "files.exclude": {
      "some-folder/": true,
      "some-file": true
  }
  ```

  从搜索结果中删除这些文件/文件夹。

  ```json
  "search.exclude": {
      "some-folder/": true,
      "some-file": true
  }
  ```

以及许多其他定制。

## 语言特定的设置

您可以通过语言标识符来确定只需要特定语言的设置的范围。您可以在 [语言标识符](https://code.visualstudio.com/docs/languages/identifiers) 参考中找到常用语言 ID 的列表。

```json
"[language-id]": {

}
```

::: tip

您还可以使用 **配置语言特定的设置** 命令来创建特定于语言的设置。

:::
