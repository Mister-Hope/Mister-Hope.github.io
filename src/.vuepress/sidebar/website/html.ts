import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const html: HopeThemeSidebarArrayConfig = [
  "",
  {
    text: "快速上手",
    icon: "creative",
    prefix: "guide/",
    children: ["", "tag"],
  },
  {
    text: "介绍",
    icon: "info",
    prefix: "intro/",
    children: [
      "history",
      "head",
      "basic",
      "link",
      "image",
      "svg",
      "media",
      "table",
      "embed",
      "format",
      "layout",
    ],
  },
  {
    text: "定义",
    icon: "info",
    collapsable: true,
    prefix: "definition/",
    children: ["uri", "url", "seo", "mime"],
  },
];
