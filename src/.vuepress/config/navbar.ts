import type { HopeThemeNavbarConfig } from "vuepress-theme-hope";

export const zhNavbarConfig: HopeThemeNavbarConfig = [
  "/README.md",
  {
    text: "随笔",
    icon: "note",
    prefix: "/note/",
    children: [
      { text: "随笔", link: "README.md", icon: "note" },
      {
        text: "诗集: 四季",
        children: [
          { text: "春之诗", link: "spring/README.md", icon: "flower" },
          { text: "夏之歌", link: "summer/README.md", icon: "leaf" },
          { text: "秋之思", link: "fall/README.md", icon: "autumn" },
          { text: "冬之语", link: "winter/README.md", icon: "snow" },
        ],
      },
      {
        text: "其他作品",
        children: [
          { text: "笑谈人生", link: "life/README.md", icon: "form" },
          { text: "轻言细语", link: "poem/README.md", icon: "like" },
        ],
      },
      "node-js/README.md",
    ],
  },
  {
    text: "代码笔记",
    icon: "code",
    children: [
      "/code/README.md",
      {
        text: "产品设计",
        children: [
          { text: "设计教程", icon: "skin", link: "/design/README.md" },
        ],
      },
      {
        text: "后端运维",
        children: [
          { text: "Linux 教程", icon: "linux", link: "/linux/README.md" },
        ],
      },
    ],
  },
  {
    text: "软件教程",
    icon: "software",
    prefix: "/software/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "README.md",
        children: ["vscode/README.md", "git/README.md", "comsol/README.md"],
      },
    ],
  },
];

export const enNavbarConfig: HopeThemeNavbarConfig = [
  { text: "Home", link: "/en/README.md", icon: "home" },
  { text: "Note", link: "/en/note/README.md", icon: "note" },
  {
    text: "Code Note",
    icon: "code",
    children: [{ text: "Code Note", icon: "code", link: "/en/code/README.md" }],
  },
  {
    text: "Software",
    icon: "software",
    link: "/en/software/README.md",
  },
];
