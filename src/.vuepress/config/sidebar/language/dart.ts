import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  {
    title: "快速入门",
    icon: "creative",
    path: "samples/",
    prefix: "samples/",
    children: ["samples.md", "cheatsheet.md", "iterable.md"],
  },
]);
