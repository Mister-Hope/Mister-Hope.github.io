import { arraySidebar } from "vuepress-theme-hope";

export const vue = arraySidebar([
  {
    text: "Vue.js",
    icon: "vue",
    children: ["", "install", "get-started", "vue", "component", "compare"],
  },
  {
    text: "Vue Router",
    icon: "router",
    link: "router/",
    prefix: "router/",
    children: ["get-started", "demo"],
  },
  {
    text: "Vue Cli",
    icon: "vue",
    link: "cli/",
    prefix: "cli/",
    children: ["intro", "quick-dev", "create", "file"],
  },
  {
    text: "Vuex",
    icon: "state",
    link: "vuex/",
    prefix: "vuex/",
    children: ["get-started", "demo"],
  },
]);
