import { sidebar } from "vuepress-theme-hope";
import { code } from "./code.js";
import { design } from "./design.js";
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
import { jquery, website } from "./website/index.js";

export const zhSidebarConfig = sidebar({
  "/software/vscode/": vscode,

  "/software/git/": "structure",

  "/software/comsol/": comsol,

  "/software/": software,

  "/physics/": physics,

  "/note/innenu/": ["", "yaml", "tag-list", "get-started"],

  "/note/": note,

  "/linux/": linux,

  "/design/": design,

  "/code/windows/": "structure",

  "/code/website/jquery/": jquery,

  "/code/website/html/": "structure",

  "/code/website/css/": "structure",

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

  "/code/github/": "structure",

  "/code/basic/": "structure",

  "/code/android/": "structure",

  "/code/": code,

  "/about/": "structure",

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
