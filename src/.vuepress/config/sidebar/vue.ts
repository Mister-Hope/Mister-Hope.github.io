import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const vue: HopeThemeSidebarArrayConfig = [
  {
    text: "Vue.js",
    icon: "vue",
    children: [
      "README.md",
      "install.md",
      "get-started.md",
      "vue.md",
      "ts-decorator.md",
      "ts-demo.md",
      "component.md",
      "compare.md",
    ],
  },
  {
    text: "Vue Router",
    icon: "router",
    link: "router/",
    prefix: "router/",
    children: ["get-started.md", "demo.md"],
  },
  {
    text: "Vue Cli",
    icon: "vue",
    link: "cli/",
    prefix: "cli/",
    children: ["intro.md", "quick-dev.md", "create.md", "file.md"],
  },
  {
    text: "Vuex",
    icon: "state",
    link: "vuex/",
    prefix: "vuex/",
    children: ["get-started.md", "demo.md"],
  },
];
