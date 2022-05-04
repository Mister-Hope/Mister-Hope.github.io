import { arraySidebar } from "vuepress-theme-hope";

export const language = arraySidebar([
  "learning",
  {
    text: "JavaScript",
    icon: "javascript",
    link: "js/",
    prefix: "js/",
    children: [
      "intro/",
      "guide/",
      "types/",
      "operators/",
      "function/",
      "object/",
      "browser/",
      "es6/",
    ],
  },
  {
    text: "TypeScript",
    icon: "typescript",
    link: "typescript/",
    prefix: "typescript/",
    children: ["intro/", "basics/", "advanced/"],
  },
  {
    text: "Python",
    icon: "python",
    link: "python/",
    prefix: "python/",
    children: [
      "intro/",
      "guide/",
      "function/",
      "advance/",
      "functional-programming/",
      "module/",
      "oop/",
    ],
  },
  "python/",
  "json/",
  "yaml/",
  {
    text: "Markdown",
    icon: "markdown",
    link: "markdown/",
    prefix: "markdown/",
    children: ["intro", "block", "inline", "extend", "emoji/"],
  },
  "linter/",
]);
