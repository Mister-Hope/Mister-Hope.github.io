const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  "html/",
  "css/",
  {
    title: "Emmet",
    icon: "emmet",
    collapsable: false,
    prefix: "emmet/",
    children: ["", "html", "css"],
  },
  "js",
  "jQuery/",
  "https",
]);
