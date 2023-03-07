module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    worker: true,
  },
  extends: [
    "@boehringer-ingelheim/eslint-config/base/strict",
    "@boehringer-ingelheim/eslint-config/react",
    "@boehringer-ingelheim/eslint-config/playwright",
    // HINT: prettier must be the last extension to work
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["build", "dev-dist", "dist", "docker", "node_modules", "openshift", "public"],
  plugins: [
    // HINT: prettier must be the last plugin to work
    "prettier",
  ],
};
