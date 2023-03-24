import { arraySidebar } from "vuepress-theme-hope";

export const website = arraySidebar([
  "",
  "html/",
  "css/",
  {
    text: "Emmet",
    icon: "emmet",
    prefix: "emmet/",
    children: ["", "html", "css"],
  },
  "js",
  "jQuery/",
]);
