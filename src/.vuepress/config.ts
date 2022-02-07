import { defineUserConfig } from "@vuepress/cli";
import { enNavbarConfig, zhNavbarConfig } from "./config/navbar";
import { enSidebarConfig, zhSidebarConig } from "./config/sideBar";

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
        navbar: zhNavbarConfig,
        sidebar: zhSidebarConig,

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
        navbar: enNavbarConfig,
        sidebar: enSidebarConfig,

        blog: {
          intro: "/en/about/",
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
        vpre: true,
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
          shortcuts: [
            {
              name: "分类",
              short_name: "分类",
              icons: [
                {
                  src: "/assets/icon/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/assets/icon/category-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
              url: "/category/",
              description: "文章分类分组",
            },
            {
              name: "标签",
              short_name: "标签",
              icons: [
                {
                  src: "/assets/icon/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/assets/icon/tag-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
              url: "/tag/",
              description: "文章标签分组",
            },
            {
              name: "时间线",
              short_name: "时间线",
              icons: [
                {
                  src: "/assets/icon/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/assets/icon/timeline-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
              url: "/timeline/",
              description: "时间线文章列表",
            },
            {
              name: "个人介绍",
              short_name: "个人介绍",
              icons: [
                {
                  src: "/assets/icon/about-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/assets/icon/about-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
              url: "/about/",
              description: "个人介绍",
            },
          ],
        },
      },
    },
  },

  plugins: [
    [
      "@vuepress/docsearch",
      {
        apiKey: "5c3a7145aeba231c3b85b742d24fc24f",
        indexName: "LDBQGQC8Q9",
      },
    ],
  ],
});
