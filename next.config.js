const withTM = require("next-transpile-modules")(["@gravity-ui/uikit"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
