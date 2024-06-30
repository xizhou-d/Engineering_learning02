import { nodeResolve } from '@rollup/plugin-node-resolve'

const buildIndexOptions = {
    input: 'src/index.js',
    output: {
        dir: 'dist/esm',
        format: 'esm',
        // 控制入口文件的输出名称，默认是 "[name].js"
        entryFileNames: '[name].[hash].js',
        // 控制文件输出的名称，默认是 "[name]-[hash].js"
        chunkFileNames: '[name].[hash].js'
    },
    plugins: [
        // 这个插件可以将第三方库打包进我们最终的文件；需要先去掉 external 配置
        nodeResolve()
    ],
    // external: ['lodash-es']
}

// 注意：这里必须是 【 数组 】
export default [ buildIndexOptions ]