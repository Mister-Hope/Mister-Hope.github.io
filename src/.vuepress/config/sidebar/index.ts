import { HopeThemeSidebarConfig } from "vuepress-theme-hope";
import { basic } from "./basic";
import { code } from "./code";
import { design } from "./design";
import { github } from "./github";
import {
  dart,
  javascript,
  language,
  markdown,
  python,
  typescript,
} from "./language";
import { linux } from "./linux";
import { miniapp } from "./mini-app";
import { note } from "./note";
import { physics } from "./physics";
import { comsol, git, software, vscode } from "./software";
import { vue } from "./vue";
import { css, html, jquery, website } from "./website";

export const zhSidebarConig: HopeThemeSidebarConfig = {
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

  "/code/website/jquery/": jquery,

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

  "/code/mini-app/": miniapp,

  "/code/language/typescript/": typescript,

  "/code/language/python/": python,

  "/code/language/markdown/": markdown,

  "/code/language/js/": javascript,

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
};

export const enSidebarConfig: HopeThemeSidebarConfig = {
  "/en/note/": ["README.md"],

  "/en/code/": ["README.md"],

  "/en/about/": ["README.md", "site.md"],

  // fallback
  "/en/": ["README.md", "code/README.md", "about/README.md"],
};
