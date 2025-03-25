import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,  tailwindcss(),],
  resolve: {
    alias: {
      '@home': path.resolve(__dirname, 'src/features/home'),
      '@aboutMe': path.resolve(__dirname, 'src/features/about_me'),
      '@getInTouch': path.resolve(__dirname, 'src/features/get_in_touch'),
      '@skills': path.resolve(__dirname, 'src/features/skills'),
      '@projects': path.resolve(__dirname, 'src/features/projects'),
      '@routing': path.resolve(__dirname, 'src/features/routing')
    },
  },
})
