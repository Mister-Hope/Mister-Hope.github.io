import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const markdown: HopeThemeSidebarArrayConfig = [
  "",
  "intro",
  "block",
  "inline",
  "extend",
  "demo",
  {
    text: "Emoji",
    icon: "emoji",
    link: "emoji/",
    prefix: "emoji/",
    children: ["people", "nature", "object", "place", "symbol"],
  },
];
