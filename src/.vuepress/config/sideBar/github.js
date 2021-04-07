const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  "intro",
  "pr",
  "semantic",
  "pages",
  "speedup",
  "token",
  {
    title: "Github Actions",
    icon: "actions",
    collapsable: false,
    prefix: "actions/",
    children: [
      "",
      "intro",
      "config",
      {
        title: "常见 Actions",
        icon: "actions",
        children: ["checkout", "cache", "gh-pages-deploy"],
      },
    ],
  },
  "deploy",
]);
