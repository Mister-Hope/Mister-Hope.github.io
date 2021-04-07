const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "图标",
    icon: "discover",
    collapsable: false,
    prefix: "icon/",
    children: [
      "",
      "intro",
      "type",
      "guide",
      "software",
      "draw",
      "line",
      "flour",
      "decorative",
      "start",
      "skill",
      "apply",
    ],
  },
  {
    title: "导航",
    icon: "navigate",
    collapsable: false,
    prefix: "navigation/",
    children: [
      "intro",
      "navbar",
      "navbar-design",
      "sidebar-navigate",
      "tabbar",
      "tabbar-design",
    ],
  },
  {
    title: "交互",
    icon: "interact",
    collapsable: false,
    prefix: "interact/",
    children: ["", "search", "text-field"],
  },
  {
    title: "文章",
    icon: "note",
    prefix: "articles/",
    children: ["", "gestalt-principle", "left-or-right", "infomation-flow"],
  },
  "APP",
]);
