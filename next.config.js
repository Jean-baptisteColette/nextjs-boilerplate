const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
  i18n,
  webpack: (config) => {
    return config;
  },
};
