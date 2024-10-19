// eslint.config.js
import { ESLint } from 'eslint';
import prettier from 'eslint-plugin-prettier';
import typescript from '@typescript-eslint/eslint-plugin';

export default [
  {
    parser: '@typescript-eslint/parser',
    plugins: {
      '@typescript-eslint': typescript,
      prettier: prettier,
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
