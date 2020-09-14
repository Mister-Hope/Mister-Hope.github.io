module.exports = [
  "",
  {
    title: "小程序教程",
    icon: "creative",
    collapsable: false,
    prefix: "guide/",
    children: require("./guide"),
  },
  {
    title: "开发者工具",
    icon: "tool",
    collapsable: false,
    prefix: "tools/",
    children: ["", "interface", "debug", "npm", "audit"],
  },
  {
    title: "小程序框架",
    icon: "frame",
    collapsable: false,
    prefix: "framework/",
    children: [
      "",
      "simpleDebug",
      "tagList",
      "corporationDebug",
      "setPage",
      "demo",
    ],
  },
  "QRCode",
];
