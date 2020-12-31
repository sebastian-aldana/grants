const NextPwa = require("next-pwa");

const isDev = !["STAGING", "PRODUCTION"].includes(process.env.ENVIRONMENT);

module.exports = NextPwa({
  pageExtensions: ["jsx", "js"],
  reactStrictMode: false,
  pwa: {
    disable: isDev,
    dest: "public",
  },
});
