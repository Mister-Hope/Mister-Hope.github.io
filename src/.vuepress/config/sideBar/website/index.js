module.exports = [
  "",
  {
    title: "HTML",
    icon: "html",
    collapsable: false,
    prefix: "html/",
    children: require("./html"),
  },
  {
    title: "CSS",
    icon: "css",
    collapsable: false,
    prefix: "css/",
    children: require("./css"),
  },
  "js",
  {
    title: "jQuery",
    icon: "jQuery",
    collapsable: false,
    path: "jQuery/",
    prefix: "jQuery/",
    children: require("./jquery"),
  },
  "https",
];
