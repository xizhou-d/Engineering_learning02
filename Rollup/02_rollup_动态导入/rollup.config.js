import { defineConfig } from 'rollup'

// 多入口，每个入口文件打包成不一样的格式
const buildMainOptions = {
    input: 'src/main.js',
    output: {
        dir: 'dist/esm',
        format: 'esm',
        // 控制入口文件的输出名称，默认是 "[name].js"
        entryFileNames: '[name].[hash].js',
        // 控制文件输出的名称，默认是 "[name]-[hash].js"
        chunkFileNames: '[name].[hash].js'
    }
}

const buildIndexOptions = {
    input: 'src/index.js',
    output: {
        dir: 'dist/cjs',
        format: 'cjs'
    }
}

// 注意：这里必须是 【 数组 】
export default [ buildMainOptions, buildIndexOptions ]