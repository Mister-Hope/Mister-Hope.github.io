import { sidebarConfig } from "vuepress-theme-hope";

import code from "./code";
import basic from "./basic";
import github from "./github";
import language from "./language";
import dart from "./language/dart";
import js from "./language/javascript";
import markdown from "./language/markdown";
import python from "./language/python";
import typescript from "./language/typescript";
import miniApp from "./mini-app";
import vue from "./vue";
import website from "./website";
import css from "./website/css";
import html from "./website/html";
import jQuery from "./website/jquery";
import design from "./design";
import physics from "./physics";
import software from "./software";
import comsol from "./software/comsol";
import git from "./software/git";
import vscode from "./software/vscode";
import linux from "./linux";
import note from "./note";

export default {
  zh: sidebarConfig({
    "/software/vscode/": vscode,

    "/software/git/": git,

    "/software/comsol/": comsol,

    "/software/": software,

    "/physics/": physics,

    "/note/innenu/": ["README.md", "yaml.md", "tag-list.md", "get-started.md"],

    "/note/": note,

    "/linux/": linux,

    "/design/": design,

    "/code/windows/": [
      "README.md",
      "shortcut-key.md",
      "hidden-file.md",
      "add-path.md",
      "cmd.md",
      "notepad.md",
    ],

    "/code/website/jquery/": jQuery,

    "/code/website/html/": html,

    "/code/website/css/": css,

    "/code/website/": website,

    "/code/vue/": vue,

    "/code/node-js/": [
      "README.md",
      "intro.md",
      "install.md",
      "environment.md",
      "program.md",
      "module.md",
    ],

    "/code/mini-app/": miniApp,

    "/code/language/typescript/": typescript,

    "/code/language/python/": python,

    "/code/language/markdown/": markdown,

    "/code/language/js/": js,

    "/code/language/dart/": dart,

    "/code/language/": language,

    "/code/github/": github,

    "/code/basic/": basic,

    "/code/Android/": ["README.md", "intro.md", "base.md", "resource.md"],

    "/code/": code,

    "/about/": ["README.md", "site.md"],

    // fallback
    "/": [
      "README.md",
      "note/README.md",
      "code/README.md",
      "software/README.md",
      "about/README.md",
    ],
  }),

  en: sidebarConfig({
    "/en/note/": ["README.md"],

    "/en/code/": ["README.md"],

    "/en/about/": ["README.md", "site.md"],

    // fallback
    "/en/": ["README.md", "code/README.md", "about/README.md"],
  }),
};
