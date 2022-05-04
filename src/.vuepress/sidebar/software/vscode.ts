import { arraySidebar } from "vuepress-theme-hope";

export const vscode = arraySidebar([
  "",
  "install",
  "get-started",
  {
    text: "简易指南",
    icon: "guide",
    prefix: "guide/",
    children: [
      "basic",
      "customization",
      "extension",
      "file",
      "edit",
      "intellisense",
      "git",
      "debug",
      "task",
      "command",
    ],
  },
  "ui",
  "settings",
  "shortcut-key",
]);
