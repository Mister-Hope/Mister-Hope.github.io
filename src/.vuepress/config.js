const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navbar");
const sideBarConfig = require("./config/sideBar");

module.exports = config({
  title: "Mr.Hope",
  description: "Where there is light, there is hope.",

  head: [
    // 百度站点验证
    ["meta", { name: "baidu-site-verification", content: "nGf5yi0Gec" }],
    ["meta", { name: "baidu-site-verification", content: "4H7tszevS8" }],

    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  shouldPrefetch: (filename) => !filename.includes("page-"),

  dest: "dist",

  locales: {
    "/": { lang: "zh-CN" },
    "/en/": {
      title: "My name is Mr.Hope",
      description: "Mr.Hope personal blog",
    },
  },

  themeConfig: {
    logo: "/logo.png",
    author: "Mr.Hope",

    repo: "https://github.com/Mister-Hope/Mister-Hope.github.io",
    repoDisplay: false,
    docsDir: "src",
    docsBranch: "main",

    nav: navBarConfig.zh,
    sidebar: sideBarConfig.zh,

    locales: {
      /** 英文设置 */
      "/en/": {
        nav: navBarConfig.en,
        sidebar: sideBarConfig.en,
      },
    },

    blog: {
      intro: "/about/",
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
      align: true,
      demo: true,
      flowchart: true,
      footnote: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
    },

    comment: {
      type: "waline",
      serverURL: "https://mister-hope-blog-comment.vercel.app/",
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

    algoliaType: "full",

    git: {
      timezone: "Asia/Shanghai",
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cacheHTML: false,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
    },
  },
});
