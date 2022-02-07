import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const physics: HopeThemeSidebarArrayConfig = [
  "README.md",
  {
    text: "电磁学",
    prefix: "electromagnetism/",
    children: ["charpter1.md", "charpter2.md"],
  },
  {
    text: "光学",
    prefix: "optism/",
    children: ["charpter1.md"],
  },
  {
    text: "量子力学",
    prefix: "quatum/",
    children: ["charpter1.md"],
  },
  {
    text: "热学",
    prefix: "tsp/",
    children: ["charpter1.md", "charpter2.md", "charpter3.md"],
  },
];
