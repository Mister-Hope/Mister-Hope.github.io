module.exports = {
  zh: {
    "/physics/": require("./physics"),

    "/note/": require("./note"),

    "/software/": require("./software"),

    "/linux/": require("./linux"),

    "/design/": require("./design"),

    "/code/windows/": [
      "",
      "shortcutKey",
      "hidden-file",
      "add-path",
      "cmd",
      "notepad",
    ],

    "/code/website/": require("./website"),

    "/code/vue/": require("./vue"),

    "/code/nodeJS/": [
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

    "/code/miniProgram/": require("./miniProgram"),

    "/code/basic/": require("./basic"),

    "/code/Android/": ["", "intro", "base", "resource"],

    "/code/": [
      "",
      "basic/",
      "website/",
      "language/",
      "vue/",
      "miniProgram/",
      "windows/",
      "backEnd/",
      "Android/",
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
