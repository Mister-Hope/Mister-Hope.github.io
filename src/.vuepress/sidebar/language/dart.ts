import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const dart: HopeThemeSidebarArrayConfig = [
  "",
  {
    text: "快速入门",
    icon: "creative",
    link: "samples/",
    prefix: "samples/",
    children: ["samples", "cheatsheet", "iterable"],
  },
];
