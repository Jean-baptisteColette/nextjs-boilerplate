const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../src/components/stories/*.stories.mdx",
    "../src/components/**/*.story.tsx",
    "../src/modules/**/*.story.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
    "storybook-react-i18next",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
        plugins: [new TsconfigPathsPlugin()],
      },
    };
  },
};
