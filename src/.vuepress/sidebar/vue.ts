import { arraySidebar } from "vuepress-theme-hope";

export const vue = arraySidebar([
  {
    text: "Vue.js",
    icon: "vue",
    children: [
      "",
      "core/install",
      "core/get-started",
      "core/app",
      "core/template",
      "core/sfc",
      "compare",
    ],
  },
  {
    text: "Vue Router",
    icon: "router",
    link: "router/",
    prefix: "router/",
    children: ["", "get-started"],
  },
]);
