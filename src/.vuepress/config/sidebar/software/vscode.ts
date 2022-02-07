import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const vscode: HopeThemeSidebarArrayConfig = [
  "README.md",
  "install.md",
  "get-started.md",
  {
    text: "简易指南",
    icon: "guide",
    prefix: "guide/",
    children: [
      "basic.md",
      "customization.md",
      "extension.md",
      "file.md",
      "edit.md",
      "intellisense.md",
      "git.md",
      "debug.md",
      "task.md",
      "command.md",
    ],
  },
  "ui.md",
  "settings.md",
  "shortcut-key.md",
];
