import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import { existsSync, statSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { sep } from 'node:path'

export default defineConfig(({ command }) => ({
  appType: 'mpa',

  plugins: [dev404()],
  base: command === 'build' ? '/Saurus/' : '/',
  server: {
    watch: {
        usePolling: true
    }
  },
  input: {
    main: resolve(import.meta.dirname, 'index.html'),
    studio: resolve(import.meta.dirname, 'studio/index.html'),
    projekti: resolve(import.meta.dirname, 'projekti/index.html'),
    projekat: resolve(import.meta.dirname, 'projekat/index.html'),
    vesti: resolve(import.meta.dirname, 'vesti/index.html'),
    vest: resolve(import.meta.dirname, 'vest/index.html'),
    notFound: resolve(import.meta.dirname, '404.html')
  },
}))

function dev404() {
  return {
    name: 'dev-custom-404',
    apply: 'serve',

    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (
          req.method !== 'GET' ||
          !req.url ||
          !req.headers.accept?.includes('text/html')
        ) {
          return next()
        }

        const pathname = new URL(req.url, 'http://localhost').pathname
        const root = resolve(import.meta.dirname)

        let decoded

        try {
          decoded = decodeURIComponent(pathname)
        } catch {
          return next()
        }

        const target = resolve(root, `.${decoded}`)

        if (target !== root && !target.startsWith(root + sep)) {
          return next()
        }

        const isFile =
          existsSync(target) && statSync(target).isFile()

        const hasIndex =
          existsSync(target) &&
          statSync(target).isDirectory() &&
          existsSync(resolve(target, 'index.html'))

        if (isFile || hasIndex) {
          return next()
        }

        const source = await readFile(
          resolve(root, '404.html'),
          'utf8'
        )

        const html = await server.transformIndexHtml(
          req.url,
          source
        )

        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(html)
      })
    }
  }
}