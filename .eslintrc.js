module.exports = {
  parser: "@typescript-eslint/parser",
  extends: "next/core-web-vitals",
  plugins: ["unused-imports", "@typescript-eslint"],
  rules: {
    "unused-imports/no-unused-imports-ts": 2,
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@mui/*/*/*", "!@mui/material/test-utils/*"],
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "import/no-anonymous-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^__", args: "after-used" },
    ],
  },
};
