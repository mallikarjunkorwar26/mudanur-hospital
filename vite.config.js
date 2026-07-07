import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'mudanur-hospital'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  },
  server: {
    port: 3000,
    host: true
  }
})