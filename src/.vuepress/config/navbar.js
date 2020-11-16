module.exports = {
  zh: [
    { text: "主页", link: "/", icon: "home" },
    {
      text: "随笔",
      icon: "note",
      prefix: "/note/",
      items: [
        { text: "随笔", link: "", icon: "note" },
        {
          text: "诗集: 四季",
          items: [
            { text: "春之诗", link: "spring/", icon: "flower" },
            { text: "夏之歌", link: "summer/", icon: "leaf" },
            { text: "秋之思", link: "fall/", icon: "autumn" },
            { text: "冬之语", link: "winter/", icon: "snow" },
          ],
        },
        {
          text: "其他作品",
          items: [
            { text: "笑谈人生", link: "life/", icon: "form" },
            { text: "轻言细语", link: "poem/", icon: "like" },
          ],
        },
        { text: "Node.js", link: "nodeJS/", icon: "nodeJS" },
      ],
    },
    {
      text: "代码笔记",
      icon: "code",
      items: [
        { text: "代码笔记", link: "/code/", icon: "code" },
        {
          text: "语言教程",
          prefix: "/code/language/",
          items: [
            { text: "JavaScript 教程", link: "js/", icon: "javascript" },
            {
              text: "Typescript 教程",
              link: "typescript/",
              icon: "typescript",
            },
            {
              text: "Python 教程",
              link: "python/",
              icon: "python",
            },
          ],
        },
        {
          text: "前端开发",
          prefix: "/code/",
          items: [
            { text: "网页教程", link: "website/", icon: "network" },
            { text: "HTML 教程", link: "website/html/", icon: "html" },
            { text: "CSS 教程", link: "website/css/", icon: "css" },
            { text: "Vue 教程", link: "vue/", icon: "vue" },
            {
              text: "小程序教程",
              link: "mini-app/",
              icon: "mini-app",
            },
          ],
        },
        {
          text: "产品设计",
          items: [{ text: "设计教程", link: "/design/", icon: "skin" }],
        },
        {
          text: "后端运维",
          items: [{ text: "Linux 教程", link: "/linux/", icon: "linux" }],
        },
      ],
    },
    {
      text: "软件教程",
      icon: "software",
      prefix: "/software/",
      items: [
        { text: "软件教程", link: "", icon: "software" },
        {
          text: "",
          items: [
            { text: "VS Code", link: "vscode/", icon: "vscode" },
            { text: "Git", link: "git/", icon: "git" },
            { text: "COMSOL", link: "comsol/", icon: "app" },
          ],
        },
      ],
    },
  ],
  en: [
    { text: "Home", link: "/en/", icon: "home" },
    { text: "Note", link: "/en/note/", icon: "note" },
    {
      text: "Code Note",
      icon: "code",
      items: [
        { text: "Code Note", link: "/en/code/", icon: "code" },
        { text: "Website", link: "/code/website/", icon: "html" },
        { text: "Code Learning", link: "/code/language/", icon: "code" },
        { text: "Vue", link: "/code/vue/", icon: "vue" },
        {
          text: "MiniProgram",
          link: "/code/mini-app/",
          icon: "mini-app",
        },
        { text: "Linux", link: "/en/code/linux/", icon: "linux" },
        { text: "Windows", link: "/code/windows/", icon: "windows" },
        { text: "BackEnd", link: "/code/backEnd/", icon: "back-stage" },
      ],
    },
    {
      text: "Software",
      icon: "software",
      link: "/en/software/",
    },
  ],
};
