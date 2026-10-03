// import { resolve } from 'node:path'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   input: {
//     main: resolve(import.meta.dirname, 'index.html'),
//     nested: resolve(import.meta.dirname, 'studio/index.html'),
//     nested: resolve(import.meta.dirname, 'projekti/index.html'),
//   },
// })

import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Saurus/' : '/',

  input: {
    main: resolve(import.meta.dirname, 'index.html'),
    studio: resolve(import.meta.dirname, 'studio/index.html'),
    projekti: resolve(import.meta.dirname, 'projekti/index.html'),
  },
}))