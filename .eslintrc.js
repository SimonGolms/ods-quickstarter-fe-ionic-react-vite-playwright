module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    worker: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:playwright/playwright-test',
    'plugin:sonarjs/recommended',
    'plugin:typescript-sort-keys/recommended',
    // HINT: prettier must be the last extension to work
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['build', 'docker', 'node_modules', 'openshift', 'public'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
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
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    camelcase: 'warn',
    curly: 'error',
    'import/no-unused-modules': [
      'error',
      {
        ignoreExports: [
          'playwright/index.ts',
          'src/index.tsx',
          'src/**/*.d.ts',
          'src/**/*.{spec,test}.{ts,tsx}',
          '*.{js,ts}', // mostly configuration files
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
    'no-type-assertion/no-type-assertion': 'error',
    'prettier/prettier': 'error',
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
    'react/prop-types': 'off', // do not overeager and inferred the type
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
    react: {
      version: 'detect',
    },
  },
};
