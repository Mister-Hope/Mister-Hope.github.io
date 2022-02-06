import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  "html/README.md",
  "css/README.md",
  {
    text: "Emmet",
    icon: "emmet",
    prefix: "emmet/",
    children: ["README.md", "html.md", "css.md"],
  },
  "js.md",
  "jQuery/README.md",
  "https.md",
]);
