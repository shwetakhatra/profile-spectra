import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { alias } from './aliases'

export default defineConfig({
    resolve: { alias },
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'happy-dom'
    },
})