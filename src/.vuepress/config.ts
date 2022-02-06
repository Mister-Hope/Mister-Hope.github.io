import { defineUserConfig } from "@vuepress/cli";
import navBarConfig from "./config/navbar";
import sideBarConfig from "./config/sideBar";

import type { HopeThemeOptions } from "vuepress-theme-hope";

export default defineUserConfig<HopeThemeOptions>({
  dest: "dist",

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

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr.Hope",
      description: "Where there is light, there is hope.",
    },

    "/en/": {
      title: "My name is Mr.Hope",
      description: "Mr.Hope personal blog",
    },
  },

  theme: "hope",

  themeConfig: {
    hostname: "https://mrhope.site",

    author: {
      name: "Mr.Hope",
      url: "https://mrhope.site",
    },

    iconPrefix: "iconfont icon-",

    logo: "/logo.png",

    repo: "https://github.com/Mister-Hope/Mister-Hope.github.io",

    repoDisplay: false,

    docsDir: "src",

    locales: {
      "/": {
        navbar: navBarConfig.zh,
        sidebar: sideBarConfig.zh,

        blog: {
          intro: "/about/",
          sidebarDisplay: "mobile",
          links: {
            QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
            Qzone: "https://1178522294.qzone.qq.com/",
            Gmail: "mailto:mister-hope@outlook.com",
            Zhihu: "https://www.zhihu.com/people/mister-hope",
            Steam: "https://steamcommunity.com/id/Mr-Hope/",
            Weibo: "https://weibo.com/misterhope",
            GitHub: "https://github.com/Mister-Hope",
            Gitee: "https://gitee.com/Mister-Hope",
          },
        },
      },
      /** 英文设置 */
      "/en/": {
        navbar: navBarConfig.en,
        sidebar: sideBarConfig.en,

        blog: {
          intro: "/about/",
          sidebarDisplay: "mobile",
          links: {
            Gmail: "mailto:mister-hope@outlook.com",
            Steam: "https://steamcommunity.com/id/Mr-Hope/",
            GitHub: "https://github.com/Mister-Hope",
          },
        },
      },
    },

    displayFooter: true,
    copyright: "Copyright © 2019-present Mr.Hope",

    algolia: {
      apiKey: "064a2d15d1a0f7b69df3ef1458d1a510",
      indexName: "mrhope",
    },

    algoliaType: "full",

    plugins: {
      comment: {
        type: "waline",
        serverURL: "https://mister-hope-blog-comment.vercel.app/",
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

      pwa: {
        favicon: "/favicon.ico",
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
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
  },
});
