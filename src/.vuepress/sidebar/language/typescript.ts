import { arraySidebar } from "vuepress-theme-hope";

export const typescript = arraySidebar([
  "",
  {
    text: "TS 介绍",
    icon: "typescript",
    link: "intro/",
    prefix: "intro/",
    children: ["what-is-typescript", "get-typescript", "hello-typescript"],
  },
  {
    text: "TS 基础教程",
    icon: "typescript",
    link: "basics/",
    prefix: "basics/",
    children: [
      "primitive-data-types",
      "any",
      "type-inference",
      "union-types",
      "type-of-object-interfaces",
      "type-of-array",
      "type-assertion",
      "declaration-files",
      "built-in-objects",
    ],
  },
  {
    text: "TS 进阶教程",
    icon: "typescript",
    collapsible: true,
    prefix: "advanced/",
    children: [
      "",
      "type-aliases",
      "string-literal-types",
      "tuple",
      "enum",
      "class",
      "class-and-interfaces",
      "generics",
      "declaration-merging",
      "further-reading",
    ],
  },
  {
    text: "TS 工程",
    icon: "typescript",
    collapsible: true,
    prefix: "engineering/",
    children: ["", "lint"],
  },
]);
