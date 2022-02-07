import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const github: HopeThemeSidebarArrayConfig = [
  "README.md",
  "intro.md",
  "pr.md",
  "semantic.md",
  "pages.md",
  "speedup.md",
  "token.md",
  {
    text: "Github Actions",
    icon: "actions",
    prefix: "actions/",
    children: [
      "README.md",
      "intro.md",
      "config.md",
      {
        text: "常见 Actions",
        icon: "actions",
        collapsable: true,
        children: ["checkout.md", "cache.md", "gh-pages-deploy.md"],
      },
    ],
  },
  "deploy.md",
];
