const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  {
    title: "Vue.js",
    icon: "vue",
    collapsable: false,
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
    title: "Vue Router",
    icon: "router",
    path: "router/",
    prefix: "router/",
    collapsable: false,
    children: ["get-started", "demo"],
  },
  {
    title: "Vue Cli",
    icon: "vue",
    path: "cli/",
    prefix: "cli/",
    collapsable: false,
    children: ["intro", "quick-dev", "create", "file"],
  },
  {
    title: "Vuex",
    icon: "state",
    path: "vuex/",
    prefix: "vuex/",
    collapsable: false,
    children: ["get-started", "demo"],
  },
]);
