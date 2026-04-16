import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  return {
    plugins: [react(), ...(isLib ? [cssInjectedByJsPlugin()] : [])],
    optimizeDeps: {
      include: ['react-katex', 'prop-types'],
    },
    build: isLib
      ? {
          lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'DsmLabs',
            formats: ['es'],
            fileName: () => 'dsm-labs.js',
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
          },
          outDir: 'dist',
          emptyOutDir: true,
          sourcemap: true,
        }
      : undefined,
  }
})
