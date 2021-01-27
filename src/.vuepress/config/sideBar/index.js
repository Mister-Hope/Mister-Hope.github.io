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

    "/code/language/python/": require("./language/python"),

    "/code/language/typescript/": require("./language/typescript"),

    "/code/language/js/": require("./language/javascript"),

    "/code/language/dart/": require("./language/dart"),

    "/code/language/": require("./language"),

    "/code/mini-app/": require("./mini-app"),

    "/code/basic/": require("./basic"),

    "/code/Android/": ["", "intro", "base", "resource"],

    "/code/": [
      "",
      "basic/",
      "website/",
      "language/",
      "vue/",
      "mini-app/",
      "node-js",
      "windows/",
      "Android/",
      "backEnd/",
      "Angular/",
      "react/",
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
