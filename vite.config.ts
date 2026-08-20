import { defineConfig } from 'vite'
// import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
// import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  base: '/dev_assesment_Roy_Bustillo/',
  resolve: {
    // alias: {
    //   '@': path.resolve(import.meta.dirname, './src'),
    // },
    tsconfigPaths: true
  },
  plugins: [
    tailwindcss(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    // tsconfigPaths(),
  ],
})
