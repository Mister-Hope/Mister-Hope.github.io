import { arraySidebar } from "vuepress-theme-hope";

export const design = arraySidebar([
  "",
  {
    text: "图标",
    icon: "discover",
    collapsible: false,
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
    text: "导航",
    icon: "navigate",
    collapsible: false,
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
    text: "交互",
    icon: "interact",
    collapsible: false,
    prefix: "interact/",
    children: ["", "search", "text-field"],
  },
  {
    text: "文章",
    icon: "note",
    prefix: "articles/",
    children: ["", "gestalt-principle", "left-or-right", "infomation-flow"],
  },
  "APP",
]);
