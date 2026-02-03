import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    plugins: [react()],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
    },
    build: {
      outDir: 'build',
      minify: isProd,
      sourcemap: !isProd,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    server: {
      port: 3002,
      open: true,
    },
    publicDir: 'public',
    assetsInclude: ['**/*.svg'],
  }
})
