const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "TS 介绍",
    icon: "typescript",
    path: "intro/",
    collapsable: false,
    prefix: "intro/",
    children: ["what-is-typescript", "get-typescript", "hello-typescript"],
  },
  {
    title: "TS 基础教程",
    icon: "typescript",
    path: "basics/",
    collapsable: false,
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
    title: "TS 进阶教程",
    icon: "typescript",
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
    title: "TS 工程",
    icon: "typescript",
    prefix: "engineering/",
    children: ["", "lint"],
  },
]);
