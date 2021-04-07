const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "快速上手",
    icon: "creative",
    collapsable: false,
    prefix: "guide/",
    children: [
      "",
      "selector",
      "declaration",
      "import",
      "cascade",
      "box",
      "common",
    ],
  },
  {
    title: "CSS 介绍",
    icon: "info",
    collapsable: false,
    prefix: "intro/",
    children: [
      "selector",
      "box",
      "background-and-border",
      "font",
      "text-direction",
      "overflow",
      "value",
      "sizing",
      "replaced",
      "media",
    ],
  },
  {
    title: "CSS 布局",
    icon: "layout",
    collapsable: false,
    prefix: "layout/",
    children: ["intro", "flow", "float", "flex", "exercise", "grid"],
  },
]);
