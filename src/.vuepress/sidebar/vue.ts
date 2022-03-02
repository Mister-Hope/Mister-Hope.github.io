import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const vue: HopeThemeSidebarArrayConfig = [
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
];
