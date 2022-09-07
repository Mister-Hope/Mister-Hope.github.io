import { arraySidebar } from "vuepress-theme-hope";
import { guide } from "./guide.js";

export const miniapp = arraySidebar([
  "",
  {
    text: "小程序教程",
    icon: "creative",
    prefix: "guide/",
    children: guide,
  },
  {
    text: "开发者工具",
    icon: "tool",
    prefix: "tools/",
    children: ["", "interface", "debug", "npm", "audit"],
  },
  {
    text: "小程序框架",
    icon: "frame",
    prefix: "framework/",
    children: ["", "simple-debug", "tag-list", "page", "demo"],
  },
  "qr-code",
]);
