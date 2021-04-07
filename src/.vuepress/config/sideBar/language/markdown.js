const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  "intro",
  "block",
  "inline",
  "extend",
  "demo",
  {
    title: "Emoji",
    icon: "emoji",
    path: "emoji/",
    prefix: "emoji/",
    collapsable: false,
    children: ["people", "nature", "object", "place", "symbol"],
  },
]);
