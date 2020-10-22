const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navBarConfig");
const sideBarConfig = require("./config/sideBar");

module.exports = config({
  title: "我是 Mr.Hope",
  description: "Where there is light, there is hope.",

  headOption: {
    icon: "/favicon.ico",
    pwa: {
      manifest: "/manifest.json",
      themeColor: "#5c92d1",
      appleStatusBarColor: "black",
      appleIcon: "/assets/icon/apple-icon-152.png",
      msTileImage: "/assets/icon/ms-icon-144.png",
      msTileColor: "#ffffff",
    },
  },

  head: [
    // 百度站点验证
    ["meta", { name: "baidu-site-verification", content: "nGf5yi0Gec" }],

    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  dest: "dist",

  locales: {
    "/en/": {
      title: "My name is Mr.Hope",
      description: "Mr.Hope personal blog",
    },
  },

  extraWatchFiles: [
    ".vuepress/config/navBarConfig.js",
    ".vuepress/config/sideBar/basic.js",
    ".vuepress/config/sideBar/index.js",
    ".vuepress/config/sideBar/language/dart.js",
    ".vuepress/config/sideBar/language/index.js",
    ".vuepress/config/sideBar/language/javascript.js",
    ".vuepress/config/sideBar/language/python.js",
    ".vuepress/config/sideBar/language/typescript.js",
    ".vuepress/config/sideBar/linux.js",
    ".vuepress/config/sideBar/miniProgram/guide.js",
    ".vuepress/config/sideBar/miniProgram/index.js",
    ".vuepress/config/sideBar/note.js",
    ".vuepress/config/sideBar/software.js",
    ".vuepress/config/sideBar/vue.js",
    ".vuepress/config/sideBar/website.js",
    ".vuepress/config/navBarConfig.js",
  ],

  themeConfig: {
    baseLang: "zh-CN",
    logo: "/logo.png",
    nav: navBarConfig.zh,
    sidebar: sideBarConfig.zh,
    author: "Mr.Hope",

    locales: {
      /** 英文设置 */
      "/en/": {
        nav: navBarConfig.en,
        sidebar: sideBarConfig.en,
      },
    },

    blog: {
      intro: "/about/index.html",
      sidebarDisplay: "mobile",
      links: {
        QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
        Qzone: "https://1178522294.qzone.qq.com/",
        Gmail: "mailto:zhangbowang1998@gmail.com",
        Zhihu: "https://www.zhihu.com/people/mister-hope",
        Steam: "https://steamcommunity.com/id/Mr-Hope/",
        Weibo: "https://weibo.com/misterhope",
      },
    },

    copyright: {
      status: "global",
    },

    mdEnhance: {
      enableAll: true,
    },

    comment: {
      type: "valine",
      appId: "yV3IQ4Rz02liuTTm51spbQHV-gzGzoHsz",
      appKey: "yr29K98irAzyUzY1ppfMbr5L",
    },

    footer: {
      copyright: "Copyright © 2019-present Mr.Hope",
      display: true,
    },

    hostname: "https://mrhope.site",

    algolia: {
      apiKey: "064a2d15d1a0f7b69df3ef1458d1a510",
      indexName: "mrhope",
    },

    pwa: {
      manifest: {
        name: "Mr.Hope 的个人博客",
        short_name: "Mr.Hope Blog",
        description: "Mr.Hope 的个人博客",
        theme_color: "#5c92d1",
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
      },
      cacheHTML: false,
      cacheMaxSize: 1512,
    },

    repo: "https://github.com/Mister-Hope/blog",
    repoDisplay: false,
    repoLabel: "Github",
    docsDir: "src",
  },
});
