module.exports = {
  extends: ["airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["react"],
  rules: {
    "import/no-unresolved": "off",
  },
};
