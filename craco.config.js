// craco.config.js
const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@extra": path.resolve(__dirname, "src/extra/"),
      "@images": path.resolve(__dirname, "src/images/"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@css": path.resolve(__dirname, "src/css"),
      "@provider": path.resolve(__dirname, "src/provider"),
      "@requests": path.resolve(__dirname, "src/requests"),
      "@template": path.resolve(__dirname, "src/template"),
      "@lang": path.resolve(__dirname, "src/lang"),
    },
  },
};
