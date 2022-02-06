import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  {
    text: "Vue.js",
    icon: "vue",
    children: [
      "",
      "install",
      "get-started",
      "vue",
      "ts-decorator",
      "ts-demo",
      "component",
      "compare",
    ],
  },
  {
    text: "Vue Router",
    icon: "router",
    path: "router/",
    prefix: "router/",
    children: ["get-started", "demo"],
  },
  {
    text: "Vue Cli",
    icon: "vue",
    path: "cli/",
    prefix: "cli/",
    children: ["intro", "quick-dev", "create", "file"],
  },
  {
    text: "Vuex",
    icon: "state",
    path: "vuex/",
    prefix: "vuex/",
    children: ["get-started", "demo"],
  },
]);
