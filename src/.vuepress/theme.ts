import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, zhNavbarConfig } from "./navbar";
import { enSidebarConfig, zhSidebarConig } from "./sidebar";

export default hopeTheme({
  hostname: "https://mrhope.site",

  author: {
    name: "Mr.Hope",
    url: "https://mrhope.site",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://github.com/Mister-Hope/Mister-Hope.github.io",

  repoDisplay: false,

  docsDir: "src",

  locales: {
    "/": {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConig,

      blog: {
        description: "VuePress 项目成员，前端开发者，理论物理硕士在读",
        intro: "/about/",
        medias: {
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

    "/en/": {
      navbar: enNavbarConfig,
      sidebar: enSidebarConfig,

      blog: {
        description:
          "VuePress project member, front-end developer, studying for a master's degree in theoretical physics",
        intro: "/en/about/",
        medias: {
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
    blog: true,

    comment: {
      provider: "Waline",
      serverURL: "https://mister-hope-blog-comment.vercel.app",
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
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
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "white",
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
});
