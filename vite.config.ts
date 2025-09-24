import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./test/setup.ts'],
        coverage: {
          provider: 'v8',
          reporter: ['text', 'json', 'html'],
          include: ['components/**/*.{ts,tsx}', 'hooks/**/*.{ts,tsx}'],
          exclude: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', 'node_modules/**'],
        },
      }
    };
});
