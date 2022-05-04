import { arraySidebar } from "vuepress-theme-hope";

export const github = arraySidebar([
  "",
  "intro",
  "pr",
  "semantic",
  "pages",
  "speedup",
  "token",
  {
    text: "Github Actions",
    icon: "actions",
    prefix: "actions/",
    children: [
      "",
      "intro",
      "config",
      {
        text: "常见 Actions",
        icon: "actions",
        collapsable: true,
        children: ["checkout", "cache", "gh-pages-deploy"],
      },
    ],
  },
  "deploy",
]);
