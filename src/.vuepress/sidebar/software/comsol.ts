import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const comsol: HopeThemeSidebarArrayConfig = [
  "",
  "intro",
  "install",
  "get-started",
  {
    text: "几何",
    icon: "geometry",
    prefix: "geometry/",
    link: "geometry/",
    children: ["view", "build"],
  },
  "select",
  "material",
  "physic-field",
  {
    text: "网格",
    icon: "mesh",
    prefix: "mesh/",
    link: "mesh/",
    children: ["intro"],
  },
  "study",
  "result",
  "app",
];
