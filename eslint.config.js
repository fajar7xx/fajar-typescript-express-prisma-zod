import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  // 1. Global ignores: mencegah eslint memeriksa file build & node_modules
  {
    ignores: [
      'build/**',
      'node_modules/**',
      'dist/**',
      'docs/**',
      'public/**',
      'coverage/**',
      '.husky/**',
    ],
  },

  // 2. global plugins & extends
  // memasukkan aturan bawaan typescript
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  // 3. js & ts configuration for BE specific rules
  {
    // Fokus pemindaian ketat berbasis type-aware linting pada folder kode aplikasi
    files: ['src/**/*.{js,mjs,cjs,ts,mts,cts}', 'tests/**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },

    rules: {
      /* --- PENGETATAN TIPE DATA TYPESCRIPT 6 --- */
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',

      // memaksa penggunaan 'import type' secara konsisten demi efisiensi kompilasi
      // Sinkronisasi wajib dengan verbatimModuleSyntax di tsconfig.json
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      /* --- PENANGANAN MIDDLEWARE & VARIABEL UNUSED EXPRESSJS --- */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          args: 'after-used',
        },
      ],

      /* --- MANAJEMEN FUNGSI & DOCUMENTATION --- */
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],

      /* --- KUALITAS KODE MODERN --- */
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error', 'info'],
        },
      ], // mengizinkan console.log untuk logging di server
      'no-return-await': 'error', // memasatikan fungsi async selalu mengembalikan promise dengan aman
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
    },
  },

  // 4. integrasi dengan prettier
  eslintConfigPrettier,
]);
