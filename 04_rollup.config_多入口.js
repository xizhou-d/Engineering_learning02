import { defineConfig } from 'rollup'

export default defineConfig({
    input: ['src/index.js', 'src/main.js'],
    output: {
        // 如果是多入口的话，这里不能使用 file, 需要使用 dir 并且只能是一个目录
        dir: 'dist/',
        format: 'esm',
        name: 'bundle'
    }
})