import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

const resumeVersion = createHash('sha256')
  .update(readFileSync(path.resolve(import.meta.dirname, 'public/resume/Umit_Saha.pdf')))
  .digest('hex')
  .slice(0, 12)

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Umit-Portfolio/',
  define: {
    'import.meta.env.VITE_RESUME_VERSION': JSON.stringify(resumeVersion),
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
