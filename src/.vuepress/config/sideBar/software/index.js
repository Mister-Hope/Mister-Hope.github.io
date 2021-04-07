const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  "editor",
  "vscode/",
  "chrome",
  "git/",
  "comsol/",
  {
    title: "工具软件",
    icon: "tool",
    collapsable: false,
    prefix: "tool/",
    children: [
      "",
      "power-toys",
      "powershell",
      {
        title: "Terminal",
        icon: "shell",
        path: "terminal/",
        collapsable: false,
        prefix: "terminal/",
        children: ["get-started", "settings"],
      },
    ],
  },
  "apache",
  "nginx",
  "mysql/",
]);
