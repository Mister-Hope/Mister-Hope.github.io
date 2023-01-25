import { arraySidebar } from "vuepress-theme-hope";

export const css = arraySidebar([
  "",
  {
    text: "快速上手",
    icon: "creative",
    collapsible: false,
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
    text: "CSS 介绍",
    icon: "info",
    collapsible: false,
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
    text: "CSS 布局",
    icon: "layout",
    collapsible: false,
    prefix: "layout/",
    children: ["intro", "flow", "float", "flex", "exercise", "grid"],
  },
]);
