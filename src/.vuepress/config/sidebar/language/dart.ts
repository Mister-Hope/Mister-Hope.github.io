import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const dart: HopeThemeSidebarArrayConfig = [
  "README.md",
  {
    text: "快速入门",
    icon: "creative",
    link: "samples/",
    prefix: "samples/",
    children: ["samples.md", "cheatsheet.md", "iterable.md"],
  },
];
