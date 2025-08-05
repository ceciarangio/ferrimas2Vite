//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()],
//})




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👈 importante para rutas relativas
  build: {
    outDir: 'dist' // 👈 por si acaso, aunque es el valor por defecto
  },
  plugins: [react()]
})

