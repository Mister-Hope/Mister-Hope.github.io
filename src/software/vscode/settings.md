---
title: 配置 VSCode
icon: config
category: VS Code
tags:
  - VS Code
  - 软件
---

这是 Mr.Hope 个人使用的 VS Code 设置，部分设置是[这里](extension.md)的插件配置

将下面内容拷贝至 setting.json 以更改 VS Code 设置

```json
{
  // 编辑器配置
  "editor.cursorSmoothCaretAnimation": true,
  "editor.detectIndentation": false,
  "editor.fontFamily": "'Fira Code' ,Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.mouseWheelZoom": true,
  "editor.rulers": [80],
  "editor.codeActionsOnSave": {
    // markdownlint 自动修复
    "source.fixAll.markdownlint": true
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "boundary",
  "editor.smoothScrolling": true,
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  // emmet 包含 wxml 视为 html
  "emmet.includeLanguages": {
    "wxml": "html" // 为 wxml 开启 HTML emmet 支持
  },
  "emmet.variables": {
    "lang": "zh-CN",
    "charset": "UTF-8"
  },
  // 文件相关
  "explorer.confirmDelete": false,
  "files.associations": {
    "*.cjson": "jsonc", // 将 .cjson 设为 jsonc
    "*.wxss": "css", // 将 wxss 视为 css
    "*.wxs": "javascript" // 将 wxs 视为 JavaScript
  },
  "files.autoSave": "off",
  "files.eol": "\n",
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "files.maxMemoryForLargeFilesMB": 4096,
  // 编辑器窗口设置
  "window.closeWhenEmpty": true,
  "window.newWindowDimensions": "inherit",
  "window.zoomLevel": 0,
  "breadcrumbs.enabled": true,
  // 工作台设置
  "workbench.colorTheme": "One Dark Pro",
  "workbench.commandPalette.preserveInput": true,
  "workbench.enableExperiments": false,
  "workbench.editor.scrollToSwitchTabs": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "none",
  "material-icon-theme.folders.associations": {
    "about": "Command",
    "intro": "Command",
    "file": "Public",
    "service-worker": "config",
    "store": "Vuex-store",
    "vuex": "Vuex-store",
    "module": "plugin",
    "router": "Routes",
    ".vuepress": "vue",
    "vuepress": "vue",
    "workflows": "Ci",
    "guide": "content",
    "en": "I18n",
    "zh": "I18n",
    "types": "typescript"
  },
  // 提示设置
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "problems.showCurrentInStatus": true,
  // 在线服务设置
  "extensions.showRecommendationsOnlyOnDemand": true,
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  // 终端设置
  "terminal.integrated.confirmOnExit": false,
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.enableBell": true,
  "terminal.integrated.shell.windows": "C:/Program Files/PowerShell/7/pwsh.exe",
  "terminal.integrated.shellArgs.windows": "-nologo",
  "terminal.integrated.shell.linux": "/bin/bash",
  "terminal.external.linuxExec": "bash",
  // git设置
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "diffEditor.renderSideBySide": true,
  "merge-conflict.autoNavigateNextConflict.enabled": true,
  // npm 设置
  "npm.enableRunFromFolder": true,
  "npm.packageManager": "yarn",
  "npm.scriptExplorerAction": "run",
  "npm-intellisense.importQuotes": "\"",
  "npm-intellisense.packageSubfoldersIntellisense": true,
  "npm-intellisense.scanDevDependencies": true,
  "npm-intellisense.showBuildInLibs": true,
  "remote.SSH.remotePlatform": {
    "codeserver": "linux"
  },
  // 特定格式文件设置
  "[dart]": {
    "editor.formatOnType": true,
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": true,
    "editor.suggestSelection": "recentlyUsed",
    "editor.tabCompletion": "on",
    "editor.wordBasedSuggestions": true
  },
  "[cpp]": {
    "editor.defaultFormatter": "ms-vscode.cpptools"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "redhat.vscode-yaml"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[xml]": {
    "editor.defaultFormatter": "DotJoshJohnson.xml"
  },
  // typescript配置
  "typescript.locale": "zh-CN",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.format.semicolons": "insert",
  "typescript.preferences.quoteStyle": "double",
  "typescript.referencesCodeLens.enabled": true,
  "typescript.suggest.completeFunctionCalls": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.implicitProjectConfig.checkJs": true,
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "javascript.format.semicolons": "insert",
  "javascript.referencesCodeLens.enabled": true,
  "javascript.suggest.completeFunctionCalls": true,
  "javascript.preferences.quoteStyle": "double",
  "javascript.updateImportsOnFileMove.enabled": "always",
  // php设置
  "php.validate.enable": true,
  "php.validate.run": "onType",
  // c++设置
  "C_Cpp.default.cppStandard": "c++20",
  "C_Cpp.clang_format_fallbackStyle": "Google",
  // dart
  "dart.debugExternalLibraries": false,
  "dart.debugSdkLibraries": false,
  // java
  "java.semanticHighlighting.enabled": true,
  "java.help.firstView": "gettingStarted",
  // python
  "python.languageServer": "Pylance",
  // css颜色提示配置
  "colorInfo.fields": ["hex", "rgb", "alpha", "css-color-name", "preview"],
  "colorInfo.languages": [
    {
      "selector": "vue",
      "colors": "css"
    },
    {
      "selector": "css",
      "colors": "css"
    },
    {
      "selector": "sass",
      "colors": "css"
    },
    {
      "selector": "scss",
      "colors": "css"
    },
    {
      "selector": "less",
      "colors": "css"
    }
  ],
  // eslint
  "eslint.packageManager": "yarn",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ],
  // gitLens设置
  "gitlens.advanced.messages": {
    "suppressLineUncommittedWarning": true,
    "suppressSupportGitLensNotification": true
  },
  "gitlens.gitCommands.closeOnFocusOut": true,
  "gitlens.views.repositories.branches.layout": "list",
  // live server
  "liveServer.settings.donotShowInfoMsg": true,
  // markdown设置
  "markdown.extension.orderedList.marker": "one",
  "markdown.extension.print.imgToBase64": true,
  // markdownlint 设置
  "markdownlint.config": {
    "default": true,
    "MD003": {
      "style": "atx"
    },
    "MD004": {
      "style": "dash"
    },
    "MD013": false,
    "MD024": {
      "allow_different_nesting": true
    },
    "MD035": {
      "style": "---"
    }
  },
  // vetur 设置
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.useWorkspaceDependencies": true,
  // vetur stylus 设置
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  // XML工具设置
  "xmlTools.enforcePrettySelfClosingTagOnFormat": true,
  "xmlTools.removeCommentsOnMinify": true,
  // 微信小程序
  "minapp-vscode.disableAutoConfig": true,
  "minapp-vscode.wxmlFormatter": "prettier", //指定格式化工具
  // liveshare 设置
  "liveshare.audio.joinCallBehavior": "accept",
  // 项目管理器
  "projectManager.sortList": "Saved",
  // todoHightlight配置
  "todohighlight.keywords": ["WARNING: "],

  // leetcode
  "leetcode.hint.commentDescription": false,
  "leetcode.hint.commandShortcut": false,
  "leetcode.hint.configWebviewMarkdown": false,
  "leetcode.hint.setDefaultLanguage": false,
  "leetcode.enableStatusBar": false,
  "leetcode.endpoint": "leetcode",
  "leetcode.showDescription": "In Webview",

  // prettier
  "prettier.packageManager": "yarn",

  // ProjectManager
  "projectManager.any.ignoredFolders": [
    "dist",
    "node_modules",
    "out",
    "typings",
    "test"
  ],

  // stylelint 设置
  "stylelint.packageManager": "yarn",
  "stylelint.validate": [
    "css",
    "html",
    "javascript",
    "javascriptreact",
    "less",
    "markdown",
    "postcss",
    "sass",
    "scss",
    "source.css.styled",
    "source.markdown.math",
    "styled-css",
    "sugarss",
    "svelte",
    "typescript",
    "typescriptreact",
    // "vue",
    "vue-html",
    "vue-postcss",
    "xml",
    "xsl",
    "wxss"
  ],
  "codespaces.accountProvider": "Microsoft"
}
```

用鼠标在对应属性值上悬停时，VS Code 会自动给出属性的说明。
