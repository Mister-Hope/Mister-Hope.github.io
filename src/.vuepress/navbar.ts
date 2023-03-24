import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "代码笔记",
    icon: "code",
    children: [
      {
        text: "代码笔记",
        icon: "code",
        link: "/code/",
        activeMatch: "^/code/$",
      },
      {
        text: "产品设计",
        children: ["/design/"],
      },
      {
        text: "后端运维",
        children: ["/linux/"],
      },
    ],
  },
  {
    text: "随笔",
    icon: "note",
    prefix: "/note/",
    children: [
      { text: "随笔", link: "", icon: "note", activeMatch: "^/note/$" },
      {
        text: "诗集: 四季",
        children: ["spring/", "summer/", "fall/", "winter/"],
      },
      {
        text: "其他作品",
        children: ["life/", "poem/"],
      },
      "node-js/",
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
        link: "",
        activeMatch: "^/software/$",
      },
      "vscode/",
      "git/",
      "comsol/",
    ],
  },
]);

export const enNavbarConfig = navbar([
  "/en/",
  "/en/note/",
  "/en/code/",
  "/en/software/",
]);
