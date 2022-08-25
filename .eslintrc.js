module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:typescript-sort-keys/recommended',
    // HINT: prettier must be the last extension to work
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['build', 'docker', 'node_modules', 'openshift', 'public'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    // 'jest',
    'jsx-a11y',
    'react-hooks',
    'react',
    'sonarjs',
    'sort-keys-fix',
    'typescript-sort-keys',
    'no-type-assertion',
    // HINT: prettier must be the last plugin to work
    'prettier',
  ],
  rules: {
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    camelcase: 'warn',
    curly: 'error',
    'import/no-unused-modules': [
      'error',
      {
        ignoreExports: [
          'src/index.tsx',
          'src/setupTests.ts',
          'src/**/*.d.ts',
          'src/**/*.test.ts',
          'src/**/*.test.tsx',
          '*.ts', // mostly configuration files
          '*.js', // mostly configuration files
        ],
        missingExports: true,
        src: ['.'],
        unusedExports: true,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
    'no-type-assertion/no-type-assertion': 'error',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    // Required to fix sort-keys automatically, since this is not done by default.
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
