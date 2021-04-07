const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "电磁学",
    collapsable: false,
    prefix: "electromagnetism/",
    children: ["charpter1", "charpter2"],
  },
  {
    title: "光学",
    collapsable: false,
    prefix: "optism/",
    children: ["charpter1"],
  },
  {
    title: "量子力学",
    collapsable: false,
    prefix: "quatum/",
    children: ["charpter1"],
  },
  {
    title: "热学",
    collapsable: false,
    prefix: "tsp/",
    children: ["charpter1", "charpter2", "charpter3"],
  },
]);
