module.exports = {
  "*.css": ["stylelint --fix", "git add --force"],
  "*.{js,jsx}": [
    // Extend rule set of .eslintrc.js with 'no-console' and 'no-unused-vars'
    "eslint --fix --rule 'no-console: [error, { allow: [warn, error] }]' --rule 'no-unused-vars: error'",
    "git add --force",
  ],
  "*.{ts,tsx}": [
    // Extend rule set of .eslintrc.js with 'no-console' and '@typescript-eslint/no-unused-vars'
    "eslint --fix --rule 'no-console: [error, { allow: [warn, error] }]' --rule '@typescript-eslint/no-unused-vars: [error, { argsIgnorePattern: ^_, caughtErrorsIgnorePattern: ^_, varsIgnorePattern: ^_, }]'",
    "git add --force",
  ],
  "*.json": ["prettier --write", "git add --force"],
};
