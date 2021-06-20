const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  "intro",
  "install",
  "get-started",
  {
    title: "几何",
    icon: "geometry",
    collapsable: true,
    prefix: "geometry/",
    path: "geometry/",
    children: ["view", "build"],
  },
  "select",
  "material",
  "physic-field",
  {
    title: "网格",
    icon: "mesh",
    collapsable: true,
    prefix: "mesh/",
    path: "mesh/",
    children: ["intro"],
  },
  "study",
  "result",
  "app",
]);
