import { arraySidebar } from "vuepress-theme-hope";

export const dart = arraySidebar([
  "",
  {
    text: "快速入门",
    icon: "creative",
    link: "samples/",
    prefix: "samples/",
    children: ["samples", "cheatsheet", "iterable"],
  },
]);
