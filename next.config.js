const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SITE_URI: process.env.SITE_URI,
    ENVIRONMENT: process.env.ENVIRONMENT,
    NEXT_PUBLIC_BRANCH_TAG: process.env.NEXT_PUBLIC_BRANCH_TAG,
    NEXT_PUBLIC_BRANCH_NAME: process.env.NEXT_PUBLIC_BRANCH_NAME,
    NEXT_PUBLIC_RUNTIME_ENVIRONMENT_CODE:
      process.env.NEXT_PUBLIC_RUNTIME_ENVIRONMENT_CODE,
  },
  i18n,
  webpack: (config) => {
    return config;
  },
};
