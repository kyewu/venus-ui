import { fileURLToPath } from 'node:url'
import {  defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
// import type { UserConfig } from 'vite'


// const viteConfig = await import('./vite.config.js') as UserConfig

export default defineConfig({
  plugins: [vue()],
  test: {
    // globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'cypress/**'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: 'coverage',
    },
    setupFiles: ['scripts/setupTest.ts'],
  }
})
