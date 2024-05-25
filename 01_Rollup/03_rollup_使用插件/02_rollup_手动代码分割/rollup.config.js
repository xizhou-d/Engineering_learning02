import { nodeResolve } from '@rollup/plugin-node-resolve'

// 在 01_rollup_plugins_nodeResolve 中将所有的第三方的代码全部打包进一个文件中，如果项目很多依赖，那么这个文件会很大，因此我们使用 rollup 进行手动分包
const buildIndexOptions = {
    input: 'src/index.js',
    output: {
        dir: 'dist/esm',
        format: 'esm',
        // 控制入口文件的输出名称，默认是 "[name].js"
        entryFileNames: '[name].[hash].js',
        // 控制文件输出的名称，默认是 "[name]-[hash].js"
        chunkFileNames: 'chunk-[name].[hash].js',
        // manualChunks: {
        //     'lodash-es': ["lodash-es"]
        // }  
        
        // 手动分割可以写成函数
        manualChunks(id) {
            if (id.includes('lodash-es')) {
                return 'lodash-es'
            }
        }
        // entryFileNames，chunkFileNames 这两个属性是可以影响手动分包的包名称的
    },
    plugins: [
        // 这个插件可以将第三方库打包进我们最终的文件；需要先去掉 external 配置
        nodeResolve()
    ],
    // external: ['lodash-es']
}

// 注意：这里必须是 【 数组 】
export default [ buildIndexOptions ]