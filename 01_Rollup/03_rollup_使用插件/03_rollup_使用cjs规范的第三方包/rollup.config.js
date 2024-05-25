import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

// 在 01_rollup_plugins_nodeResolve 中将所有的第三方的代码全部打包进一个文件中，如果项目很多依赖，那么这个文件会很大，因此我们使用 rollup 进行手动分包
const buildIndexOptions = {
    input: 'src/index.js',
    output: {
        dir: 'dist/esm',
        format: 'esm',
    },
    plugins: [
        // 这个插件可以将第三方库打包进我们最终的文件；需要先去掉 external 配置
        nodeResolve(),
        // 处理 cjs 规范的第三方包
        commonjs()
    ],
    // external: ['lodash']
}

// 注意：这里必须是 【 数组 】
export default [ buildIndexOptions ]