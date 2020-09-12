---
title: 推荐配置
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
  "editor.formatOnPaste": true,
  "editor.mouseWheelZoom": true,
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
  "explorer.confirmDelete": false,
  "emmet.includeLanguages": {
    "wxml": "html" //为 wxml 开启 HTML emmet 支持
  },
  // 文件相关
  "files.associations": {
    "*.cjson": "jsonc", //将 .cjson 设为 jsonc
    "*.wxss": "css", //将 wxss 视为 css
    "*.wxs": "javascript" //将 wxs 视为 JavaScript
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
  "merge-conflict.autoNavigateNextConflict.enabled": true,
  // npm 设置
  "npm.packageManager": "yarn",
  "npm.scriptExplorerAction": "run",
  "npm-intellisense.packageSubfoldersIntellisense": true,
  "npm-intellisense.scanDevDependencies": true,
  "npm-intellisense.showBuildInLibs": true,
  "remote.SSH.remotePlatform": {
    "codeserver": "linux"
  },
  // 文件格式化器设置
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
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
  // 远程连接
  "remote.SSH.configFile": "Z:/config/local/vscode/host",
  // typescript配置
  "typescript.locale": "zh-CN",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "typescript.format.semicolons": "insert",
  "typescript.suggest.completeFunctionCalls": true,
  "typescript.referencesCodeLens.enabled": true,
  "typescript.preferences.quoteStyle": "single",
  "javascript.implicitProjectConfig.checkJs": true,
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "javascript.format.semicolons": "insert",
  "javascript.referencesCodeLens.enabled": true,
  "javascript.suggest.completeFunctionCalls": true,
  "javascript.preferences.quoteStyle": "single",
  "javascript.updateImportsOnFileMove.enabled": "always",
  // php设置
  "php.validate.enable": true,
  "php.validate.executablePath": "u:/PHP/php.exe",
  "php.validate.run": "onType",
  // c++设置
  "C_Cpp.default.cppStandard": "c++17",
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
  "eslint.enable": true,
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
  "markdown.extension.toc.githubCompatibility": true,
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
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "auto"
    },
    "prettyhtml": {
      "printWidth": 100,
      "singleQuote": false,
      "wrapAttributes": false,
      "sortAttributes": false
    },
    "prettier": {
      "printWidth": 80,
      "singleQuote": false,
      "tabWidth": 2,
      "useTabs": false,
      "semi": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "parser": "babel"
    }
  },
  "vetur.format.defaultFormatter.html": "prettyhtml",
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
  "minapp-vscode.prettier": {
    "parser": "html",
    "useTabs": false,
    "tabWidth": 2,
    "printWidth": 80,
    "singleQuote": false
  },
  // liveshare 设置
  "liveshare.audio.joinCallBehavior": "accept",
  // 设置同步
  "sync.forceUpload": true,
  "sync.gist": "98947a2f1cf80f21ee36eb8e3d03b9ce",
  // todoHightlight配置
  "todohighlight.keywords": ["WARNING: "],
  // leetcode
  "leetcode.defaultLanguage": "javascript",
  "leetcode.endpoint": "leetcode",
  "leetcode.hint.configWebviewMarkdown": false,
  // ProjectManager
  "projectManager.any.ignoredFolders": [
    "dist",
    "node_modules",
    "out",
    "typings",
    "test"
  ],
  "projectManager.git.baseFolders": ["U:/", "Z:/"],
  // dart
  "dart.debugExternalLibraries": false,
  "dart.debugSdkLibraries": false,
  // java
  "java.home": "C:\\Program Files\\Java\\jdk-14",
  "java.help.firstView": "gettingStarted",
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
  "vsonline.accountProvider": "Microsoft",
  "diffEditor.renderSideBySide": true,
  "java.semanticHighlighting.enabled": true,
  "python.jediEnabled": false,
  "python.pythonPath": "C:\\Users\\zhang\\AppData\\Local\\Programs\\Python\\Python38\\python.exe",
  "codespaces.accountProvider": "Microsoft",
  "[dart]": {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [80],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": false
  },
  "leetcode.workspaceFolder": "C:\\Users\\zhang\\.leetcode"
}
```

用鼠标在对应属性值上悬停时，VS Code 会自动给出属性的说明。
