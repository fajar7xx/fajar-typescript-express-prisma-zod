import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.{test,spec}.ts'],
    exclude: ['node_modules', 'dist', 'docs', 'public', 'coverage'],
    pool: 'threads',

    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },

    typecheck: {
      enabled: true,
    },

    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
      exclude: [
        'node_modules/**/*',
        'dist/**/*',
        'docs/**/*',
        'public/**/*',
        'src/**/{app,server}.ts',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80,
      },
    },
    reporters: ['verbose'],
  },
});
