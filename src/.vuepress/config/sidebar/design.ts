import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  {
    text: "图标",
    icon: "discover",
    collapsable: false,
    prefix: "icon/",
    children: [
      "README.md",
      "intro.md",
      "type.md",
      "guide.md",
      "software.md",
      "draw.md",
      "line.md",
      "flour.md",
      "decorative.md",
      "start.md",
      "skill.md",
      "apply.md",
    ],
  },
  {
    text: "导航",
    icon: "navigate",
    collapsable: false,
    prefix: "navigation/",
    children: [
      "intro.md",
      "navbar.md",
      "navbar-design.md",
      "sidebar-navigate.md",
      "tabbar.md",
      "tabbar-design.md",
    ],
  },
  {
    text: "交互",
    icon: "interact",
    collapsable: false,
    prefix: "interact/",
    children: ["README.md", "search.md", "text-field.md"],
  },
  {
    text: "文章",
    icon: "note",
    prefix: "articles/",
    children: [
      "README.md",
      "gestalt-principle.md",
      "left-or-right.md",
      "infomation-flow.md",
    ],
  },
  "APP.md",
]);
