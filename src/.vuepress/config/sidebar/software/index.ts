import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  "editor.md",
  "vscode/README.md",
  "chrome.md",
  "git/README.md",
  "comsol/README.md",
  {
    text: "工具软件",
    icon: "tool",
    prefix: "tool/",
    children: [
      "README.md",
      "power-toys.md",
      "powershell.md",
      {
        text: "Terminal",
        icon: "shell",
        link: "terminal/",
        prefix: "terminal/",
        children: ["get-started", "settings.md"],
      },
    ],
  },
  "apache.md",
  "nginx.md",
  "mysql/README.md",
]);
