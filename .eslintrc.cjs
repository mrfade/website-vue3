/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  plugins: ["vue"],
  env: {
    "vue/setup-compiler-macros": true,
    semi: [2, "never"],
    quotes: [2, "double", "avoid-escape"],
    "vue/multi-word-component-names": "off",
    "comma-dangle": "off",
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "prettier/prettier": ["error", { semi: false }],
  },
}
