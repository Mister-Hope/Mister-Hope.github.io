import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  {
    text: "快速入门",
    icon: "creative",
    link: "samples/",
    prefix: "samples/",
    children: ["samples.md", "cheatsheet.md", "iterable.md"],
  },
]);
