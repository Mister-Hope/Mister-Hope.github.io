import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "",
  "html/",
  "css/",
  {
    title: "Emmet",
    icon: "emmet",
    collapsable: false,
    prefix: "emmet/",
    children: ["", "html", "css"],
  },
  "js",
  "jQuery/",
  "https",
]);
