import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  "intro.md",
  "block.md",
  "inline.md",
  "extend.md",
  "demo.md",
  {
    title: "Emoji",
    icon: "emoji",
    path: "emoji/",
    prefix: "emoji/",
    children: ["people.md", "nature.md", "object.md", "place.md", "symbol"],
  },
]);
