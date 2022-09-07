import { sidebar } from "vuepress-theme-hope";
import { basic } from "./basic.js";
import { code } from "./code.js";
import { design } from "./design.js";
import { github } from "./github.js";
import {
  dart,
  javascript,
  language,
  markdown,
  python,
  typescript,
} from "./language/index.js";
import { linux } from "./linux.js";
import { miniapp } from "./mini-app/index.js";
import { note } from "./note.js";
import { physics } from "./physics.js";
import { comsol, software, vscode } from "./software/index.js";
import { vue } from "./vue.js";
import { css, html, jquery, website } from "./website/index.js";

export const zhSidebarConig = sidebar({
  "/software/vscode/": vscode,

  "/software/git/": "structure",

  "/software/comsol/": comsol,

  "/software/": software,

  "/physics/": physics,

  "/note/innenu/": ["", "yaml", "tag-list", "get-started"],

  "/note/": note,

  "/linux/": linux,

  "/design/": design,

  "/code/windows/": [
    "",
    "shortcut-key",
    "hidden-file",
    "add-path",
    "cmd",
    "notepad",
  ],

  "/code/website/jquery/": jquery,

  "/code/website/html/": html,

  "/code/website/css/": css,

  "/code/website/": website,

  "/code/vue/": vue,

  "/code/node-js/": "structure",

  "/code/mini-app/": miniapp,

  "/code/language/typescript/": typescript,

  "/code/language/python/": python,

  "/code/language/markdown/": markdown,

  "/code/language/js/": javascript,

  "/code/language/dart/": dart,

  "/code/language/": language,

  "/code/github/": github,

  "/code/basic/": basic,

  "/code/Android/": ["", "intro", "base", "resource"],

  "/code/": code,

  "/about/": ["", "site"],

  // fallback
  "/": ["", "note/", "code/", "software/", "about/"],
});

export const enSidebarConfig = sidebar({
  "/en/note/": [""],

  "/en/code/": [""],

  "/en/about/": ["", "site"],

  // fallback
  "/en/": ["", "code/", "about/"],
});
