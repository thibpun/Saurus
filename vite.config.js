import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Saurus/',
  input: {
    main: resolve(import.meta.dirname, 'index.html'),
    nested: resolve(import.meta.dirname, 'studio/index.html'),
    nested: resolve(import.meta.dirname, 'projekti/index.html'),
  },
})