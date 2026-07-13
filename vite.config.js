import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index:        resolve(__dirname, 'index.html'),
        about:        resolve(__dirname, 'about.html'),
        research:     resolve(__dirname, 'research.html'),
        publications: resolve(__dirname, 'publications.html'),
        projects:     resolve(__dirname, 'projects.html'),
        teaching:     resolve(__dirname, 'teaching.html'),
        awards:       resolve(__dirname, 'awards.html'),
        cv:           resolve(__dirname, 'cv.html'),
        gallery:      resolve(__dirname, 'gallery.html'),
        blog:         resolve(__dirname, 'blog.html'),
        contact:      resolve(__dirname, 'contact.html'),
      }
    }
  }
})
