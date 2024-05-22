import { defineConfig } from 'rollup'

export default defineConfig({
    input: 'src/index.js',
    // output 是数组，会遍历数组，将每种格式都打包一次，输出多种格式的 bundle
    output: [
        {
            file: 'dist/bundle-esm.js',
            format: 'esm'
        },
        {
            file: 'dist/bundle-iife.js',
            format: 'iife'
        },
        {
            file: 'dist/bundle-cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/bundle-umd.js',
            format: 'umd',
            name: 'bundle'
        }
    ]
})