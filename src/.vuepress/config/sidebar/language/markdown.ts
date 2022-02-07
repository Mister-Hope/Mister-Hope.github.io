import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const markdown: HopeThemeSidebarArrayConfig = [
  "README.md",
  "intro.md",
  "block.md",
  "inline.md",
  "extend.md",
  "demo.md",
  {
    text: "Emoji",
    icon: "emoji",
    link: "emoji/",
    prefix: "emoji/",
    children: ["people.md", "nature.md", "object.md", "place.md", "symbol"],
  },
];
