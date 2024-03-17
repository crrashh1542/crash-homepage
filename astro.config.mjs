import { defineConfig } from 'astro/config'
import { fileURLToPath, URL } from 'node:url'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    // 引入 CSS 处理器
    integrations: [tailwind()],

    // 引入 alias
    vite: {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            }
        }
    }
})