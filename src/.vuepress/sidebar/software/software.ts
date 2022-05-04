import { arraySidebar } from "vuepress-theme-hope";

export const software = arraySidebar([
  "",
  "editor",
  "vscode/",
  "chrome",
  "git/",
  "comsol/",
  {
    text: "工具软件",
    icon: "tool",
    prefix: "tool/",
    children: [
      "",
      "power-toys",
      "powershell",
      {
        text: "Terminal",
        icon: "shell",
        link: "terminal/",
        prefix: "terminal/",
        children: ["get-started", "settings"],
      },
    ],
  },
  "apache",
  "nginx",
  "mysql/",
]);
