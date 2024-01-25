export default {
  config: {
    default: true,
    MD003: {
      style: "atx",
    },
    MD004: {
      style: "dash",
    },
    MD013: false,
    MD024: {
      allow_different_nesting: true,
    },
    MD033: {
      allowed_elements: ["br", "AutoCatalog", "Badge"],
    },
    MD035: {
      style: "---",
    },
    MD040: false,
    MD046: false,
    MD049: false,
  },
  ignores: ["**/node_modules/**"],
};
