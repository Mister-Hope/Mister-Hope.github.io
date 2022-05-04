import { arraySidebar } from "vuepress-theme-hope";

export const markdown = arraySidebar([
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
]);
