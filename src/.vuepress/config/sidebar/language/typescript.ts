import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "README.md",
  {
    text: "TS 介绍",
    icon: "typescript",
    link: "intro/",
    prefix: "intro/",
    children: [
      "what-is-typescript.md",
      "get-typescript.md",
      "hello-typescript.md",
    ],
  },
  {
    text: "TS 基础教程",
    icon: "typescript",
    link: "basics/",
    prefix: "basics/",
    children: [
      "primitive-data-types.md",
      "any.md",
      "type-inference.md",
      "union-types.md",
      "type-of-object-interfaces.md",
      "type-of-array.md",
      "type-assertion.md",
      "declaration-files.md",
      "built-in-objects.md",
    ],
  },
  {
    text: "TS 进阶教程",
    icon: "typescript",
    collapsable: true,
    prefix: "advanced/",
    children: [
      "README.md",
      "type-aliases.md",
      "string-literal-types.md",
      "tuple.md",
      "enum.md",
      "class.md",
      "class-and-interfaces.md",
      "generics.md",
      "declaration-merging.md",
      "further-reading.md",
    ],
  },
  {
    text: "TS 工程",
    icon: "typescript",
    collapsable: true,
    prefix: "engineering/",
    children: ["README.md", "lint.md"],
  },
]);
