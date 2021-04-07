const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "快速入门",
    icon: "creative",
    path: "samples/",
    collapsable: false,
    prefix: "samples/",
    children: ["samples", "cheatsheet", "iterable"],
  },
]);
