import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const comsol: HopeThemeSidebarArrayConfig = [
  "README.md",
  "intro.md",
  "install.md",
  "get-started.md",
  {
    text: "几何",
    icon: "geometry",
    prefix: "geometry/",
    link: "geometry/",
    children: ["view.md", "build.md"],
  },
  "select.md",
  "material.md",
  "physic-field.md",
  {
    text: "网格",
    icon: "mesh",
    prefix: "mesh/",
    link: "mesh/",
    children: ["intro.md"],
  },
  "study.md",
  "result.md",
  "app.md",
];
