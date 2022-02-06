import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  {
    text: "基础介绍",
    icon: "module",
    children: ["basic/README.md", "windows/README.md", "github/README.md"],
  },
  {
    text: "前端开发",
    icon: "code",
    children: [
      "website/README.md",
      "node-js/README.md",
      "vue/README.md",
      "Angular/README.md",
      "react/README.md",
      "mini-app/README.md",
    ],
  },
  {
    text: "语言",
    icon: "language",
    prefix: "language/",
    link: "language/",
    children: [
      "learning.md",
      "js/README.md",
      "typescript/README.md",
      "python/README.md",
      "json/README.md",
      "yaml/README.md",
      "linter/README.md",
    ],
  },
  "Android/README.md",
  "backEnd/README.md",
]);
