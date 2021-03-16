module.exports = {
  zh: {
    "/software/vscode/": require("./software/vscode"),

    "/software/git/": require("./software/git"),

    "/software/comsol/": require("./software/comsol"),

    "/software/": require("./software"),

    "/physics/": require("./physics"),

    "/note/": require("./note"),

    "/linux/": require("./linux"),

    "/design/": require("./design"),

    "/code/windows/": [
      "",
      "shortcut-key",
      "hidden-file",
      "add-path",
      "cmd",
      "notepad",
    ],

    "/code/website/jquery/": require("./website/jquery"),

    "/code/website/html/": require("./website/html"),

    "/code/website/css/": require("./website/css"),

    "/code/website/": require("./website"),

    "/code/vue/": require("./vue"),

    "/code/node-js/": [
      "",
      "intro",
      "install",
      "environment",
      "program",
      "module",
    ],

    "/code/mini-app/": require("./mini-app"),

    "/code/language/python/": require("./language/python"),

    "/code/language/typescript/": require("./language/typescript"),

    "/code/language/markdown/": require("./language/markdown"),

    "/code/language/js/": require("./language/javascript"),

    "/code/language/dart/": require("./language/dart"),

    "/code/language/": require("./language"),

    "/code/github/": require("./github"),

    "/code/basic/": require("./basic"),

    "/code/Android/": ["", "intro", "base", "resource"],

    "/code/": [
      "",
      {
        title: "基础介绍",
        icon: "module",
        collapsable: false,
        children: ["basic/", "windows/", "github/"],
      },
      {
        title: "前端开发",
        icon: "code",
        collapsable: false,
        children: [
          "website/",
          "node-js/",
          "vue/",
          "Angular/",
          "react/",
          "mini-app/",
        ],
      },
      {
        title: "语言",
        icon: "language",
        prefix: "language/",
        link: "language/",
        collapsable: false,
        children: [
          "learning",
          "js/",
          "typescript/",
          "python/",
          "json/",
          "yaml/",
          "linter/",
        ],
      },
      "Android/",
      "backEnd/",
    ],

    "/about/": ["", "site"],

    // fallback
    "/": ["", "note/", "code/", "software/", "about/"],
  },

  en: {
    "/en/note/": [""],

    "/en/code/": [""],

    "/en/about/": ["", "site"],

    // fallback
    "/en/": ["", "code/", "about/"],
  },
};
