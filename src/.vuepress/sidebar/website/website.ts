import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const website: HopeThemeSidebarArrayConfig = [
  "",
  "html/",
  "css/",
  {
    text: "Emmet",
    icon: "emmet",
    prefix: "emmet/",
    children: ["", "html", "css"],
  },
  "js",
  "jQuery/",
  "https",
];
