---
date: 2020-05-04
title: 配置 VS Code
icon: config
category: VS Code
tag:
  - VS Code
  - 软件
---

这是 Mr.Hope 个人使用的 VS Code 设置，部分设置是[这里](extension.md)的插件配置

将下面内容拷贝至 setting.json 以更改 VS Code 设置

```json
{
  // 编辑器配置
  "editor.accessibilitySupport": "off",
  "editor.bracketPairColorization.enabled": true,
  "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.detectIndentation": false,
  "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": true,
  "editor.inlineSuggest.enabled": true,
  "explorer.incrementalNaming": "smart",
  "editor.mouseWheelZoom": true,
  "editor.rulers": [80],
  "editor.quickSuggestions": {
    "comments": true,
    "strings": true,
    "other": true
  },
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "boundary",
  "editor.smoothScrolling": true,
  "editor.stickyScroll.enabled": true,
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.experimental.pasteActions.enabled": true,
  // emmet 包含 wxml 视为 html
  "emmet.includeLanguages": {
    "wxml": "html",
    "axml": "xml"
  },
  "emmet.variables": {
    "lang": "zh-CN",
    "charset": "UTF-8"
  },
  // 文件相关
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.fileNesting.enabled": true,
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.wxml": "wxml"
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
  "window.commandCenter": true,
  "window.dialogStyle": "custom",
  "window.newWindowDimensions": "inherit",
  "breadcrumbs.enabled": true,
  // 工作台设置
  "workbench.activityBar.visible": true,
  "workbench.colorTheme": "One Dark Pro",
  "workbench.commandPalette.preserveInput": true,
  "workbench.editor.scrollToSwitchTabs": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "none",
  "security.workspace.trust.untrustedFiles": "open",

  "material-icon-theme.folders.associations": {
    "global-components": "Global",
    "node": "Node",
    "about": "Command",
    "intro": "Command",
    "file": "Public",
    "github": "GitHub",
    "composables": "Include",
    "service-worker": "config",
    "store": "Vuex-store",
    "demo": "Examples",
    "basic": "Helper",
    "vuex": "Vuex-store",
    "module": "plugin",
    "router": "Routes",
    ".vuepress": "vue",
    "vuepress": "vue",
    "node-js": "Node",
    "react": "React-components",
    "workflows": "Ci",
    "guide": "content",
    "git": "Git",
    "mysql": "DataBase",
    "software": "App",
    "tool": "Tools",
    "vscode": "VSCode",
    "en": "I18n",
    "zh": "I18n",
    "types": "typescript"
  },
  // 提示设置
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "problems.showCurrentInStatus": true,
  // 在线服务设置
  "telemetry.telemetryLevel": "error",
  // 终端设置
  "terminal.external.linuxExec": "bash",
  "terminal.integrated.confirmOnExit": "hasChildProcesses",
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.enableBell": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.env.linux": {
    "NODE_OPTIONS": "--max_old_space_size=4096"
  },
  "terminal.integrated.env.windows": {
    "NODE_OPTIONS": "--max_old_space_size=4096"
  },
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "overrideName": true,
      "icon": "terminal-powershell",
      "args": ["-NoLogo"]
    }
  },
  "terminal.integrated.shellIntegration.enabled": true,
  "terminal.integrated.smoothScrolling": true,
  "terminal.integrated.tabs.enabled": true,
  // git
  "diffEditor.ignoreTrimWhitespace": true,
  "diffEditor.renderSideBySide": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.mergeEditor": true,
  "merge-conflict.autoNavigateNextConflict.enabled": true,
  // npm 设置
  "npm.enableRunFromFolder": true,
  "npm.packageManager": "pnpm",
  "npm.scriptExplorerAction": "run",
  "npm-intellisense.importQuotes": "\"",
  "npm-intellisense.packageSubfoldersIntellisense": true,
  "npm-intellisense.scanDevDependencies": true,
  "npm-intellisense.showBuildInLibs": true,

  // 特定格式文件设置
  "[cpp]": {
    "editor.defaultFormatter": "ms-vscode.cpptools"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[dart]": {
    "editor.formatOnType": true,
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": true,
    "editor.suggestSelection": "recentlyUsed",
    "editor.tabCompletion": "on",
    "editor.wordBasedSuggestions": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[latex]": {
    "editor.defaultFormatter": "James-Yu.latex-workshop"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[matlab]": {
    "files.encoding": "gb2312"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[xml]": {
    "editor.defaultFormatter": "DotJoshJohnson.xml"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // typescript 配置
  "javascript.format.semicolons": "insert",
  "javascript.referencesCodeLens.enabled": true,
  "javascript.suggest.completeFunctionCalls": true,
  "javascript.preferences.quoteStyle": "double",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.locale": "zh-CN",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.format.semicolons": "insert",
  "typescript.preferences.quoteStyle": "double",
  "typescript.referencesCodeLens.enabled": true,
  "typescript.suggest.completeFunctionCalls": true,
  "typescript.updateImportsOnFileMove.enabled": "always",

  // php 设置
  "php.validate.enable": true,
  "php.validate.run": "onType",

  // c++ 设置
  "C_Cpp.default.cppStandard": "c++23",
  // 需要根据自己情况设置
  "C_Cpp.default.includePath": [
    // "C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include",
    // "C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include-fixed",
    // "C:/Program Files/mingw-w64/x86_64-w64-mingw32/include"
  ],
  "C_Cpp.clang_format_fallbackStyle": "Google",

  // dart
  "dart.debugSdkLibraries": false,
  "dart.openDevTools": "flutter",
  "java.jdt.ls.java.home": "c:\\Program Files\\Java\\jdk-18.0.1",
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
  "eslint.packageManager": "pnpm",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ],

  // Git Lens 设置
  "gitlens.defaultDateFormat": "YYYY-MM-DD HH:mm",
  "gitlens.defaultDateShortFormat": "YYYY-MM-DD",
  "gitlens.defaultTimeFormat": "HH:mm",
  "gitlens.gitCommands.closeOnFocusOut": true,
  "gitlens.views.repositories.branches.layout": "list",
  "gitlens.advanced.messages": {
    "suppressCommitNotFoundWarning": true,
    "suppressRebaseSwitchToTextWarning": true
  },

  // markdown 设置
  "markdown.extension.orderedList.marker": "one",
  "markdown.validate.enabled": true,
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

  // 根据自己情况设置
  "markdown-pdf.executablePath": "C:/Users/mister-hope/AppData/Local/Google/Chrome/Application/chrome.exe",

  // XML工具设置
  "xmlTools.enforcePrettySelfClosingTagOnFormat": true,
  "xmlTools.removeCommentsOnMinify": true,
  // 微信小程序
  "minapp-vscode.disableAutoConfig": true,
  "minapp-vscode.wxmlFormatter": "prettier",
  "minapp-vscode.prettier": {
    "parser": "html",
    "printWidth": 80
  },
  // liveshare 设置
  "liveshare.audio.joinCallBehavior": "accept",
  // 项目管理器
  "projectManager.sortList": "Saved",
  "projectManager.ignoreProjectsWithinProjects": true,
  "projectManager.any.ignoredFolders": [
    "dist",
    "node_modules",
    "out",
    "typings",
    "test",
    "__tests__"
  ],
  "projectManager.git.baseFolders": ["C:/Projects/"],
  // TODO Highlight 配置
  "todohighlight.keywords": ["WARNING: "],

  // stylelint 设置
  "stylelint.packageManager": "pnpm",
  // Java
  "redhat.telemetry.enabled": false,

  // github copilot
  "github.copilot.enable": {
    "*": true,
    "yaml": true,
    "plaintext": true,
    "markdown": true
  }
}
```

用鼠标在对应属性值上悬停时，VS Code 会自动给出属性的说明。
