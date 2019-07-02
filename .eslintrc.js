module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier", "import"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": "off"
  }
};
