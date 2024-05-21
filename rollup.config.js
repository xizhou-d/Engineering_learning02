import { defineConfig } from 'rollup'

// 多入口，每个入口文件打包成不一样的格式
const buildMainOptions = {
    input: 'src/main.js',
    output: {
        dir: 'dist/cjs',
        format: 'cjs'
    }
}

const buildIndexOptions = {
    input: 'src/index.js',
    output: {
        dir: 'dist/esm',
        format: 'esm'
    }
}

// 注意：这里必须是 【 数组 】
export default [ buildMainOptions, buildIndexOptions ]