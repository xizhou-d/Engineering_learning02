import { defineConfig } from 'rollup'

// 使用 defineConfig 也可以自动获取代码提示
export default defineConfig({
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    }
})