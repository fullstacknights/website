module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: `react-app`,
  rules: {
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false }
    ]
  }
};
