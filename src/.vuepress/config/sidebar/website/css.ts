import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  {
    text: "快速上手",
    icon: "creative",
    collapsable: false,
    prefix: "guide/",
    children: [
      "README.md",
      "selector.md",
      "declaration.md",
      "import.md",
      "cascade.md",
      "box.md",
      "common.md",
    ],
  },
  {
    text: "CSS 介绍",
    icon: "info",
    collapsable: false,
    prefix: "intro/",
    children: [
      "selector.md",
      "box.md",
      "background-and-border.md",
      "font.md",
      "text-direction.md",
      "overflow.md",
      "value.md",
      "sizing.md",
      "replaced.md",
      "media.md",
    ],
  },
  {
    text: "CSS 布局",
    icon: "layout",
    collapsable: false,
    prefix: "layout/",
    children: [
      "intro.md",
      "flow.md",
      "float.md",
      "flex.md",
      "exercise.md",
      "grid.md",
    ],
  },
]);
