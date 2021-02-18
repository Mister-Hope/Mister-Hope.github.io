module.exports = [
  "",
  "intro",
  "pr",
  "semantic",
  "speedup",
  "token",
  {
    title: "Github Actions",
    icon: "actions",
    collapsable: false,
    prefix: "actions/",
    children: [
      "",
      "intro",
      "config",
      {
        title: "常见 Actions",
        icon: "actions",
        children: ["checkout"],
      },
    ],
  },
  "deploy",
];
