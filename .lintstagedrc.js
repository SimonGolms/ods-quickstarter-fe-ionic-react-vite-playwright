module.exports = {
  '*.css': ['stylelint --fix', 'git add --force'],
  '*.{js,jsx,ts,tsx}': [
    // Extend rule levels based on .eslintrc.js
    "eslint --fix --rule '@typescript-eslint/no-unused-vars: error' --rule 'no-console: error'",
    'git add --force',
  ],
  '*.json': ['prettier --write', 'git add --force'],
};
