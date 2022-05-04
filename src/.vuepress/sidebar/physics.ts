import { arraySidebar } from "vuepress-theme-hope";

export const physics = arraySidebar([
  "",
  {
    text: "电磁学",
    prefix: "electromagnetism/",
    children: ["charpter1", "charpter2"],
  },
  {
    text: "光学",
    prefix: "optism/",
    children: ["charpter1"],
  },
  {
    text: "量子力学",
    prefix: "quatum/",
    children: ["charpter1"],
  },
  {
    text: "热学",
    prefix: "tsp/",
    children: ["charpter1", "charpter2", "charpter3"],
  },
]);
