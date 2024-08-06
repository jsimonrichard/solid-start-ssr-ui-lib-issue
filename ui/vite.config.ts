import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [solid(), dts({ exclude: ['src'] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.tsx'),
      formats: ['es'],
    },
    copyPublicDir: false,
  }
})
