import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const html: HopeThemeSidebarArrayConfig = [
  "README.md",
  {
    text: "快速上手",
    icon: "creative",
    prefix: "guide/",
    children: ["README.md", "tag.md"],
  },
  {
    text: "介绍",
    icon: "info",
    prefix: "intro/",
    children: [
      "history.md",
      "head.md",
      "basic.md",
      "link.md",
      "image.md",
      "svg.md",
      "media.md",
      "table.md",
      "embed.md",
      "format.md",
      "layout.md",
    ],
  },
  {
    text: "定义",
    icon: "info",
    collapsable: true,
    prefix: "definition/",
    children: ["uri.md", "url.md", "seo.md", "mime.md"],
  },
];
