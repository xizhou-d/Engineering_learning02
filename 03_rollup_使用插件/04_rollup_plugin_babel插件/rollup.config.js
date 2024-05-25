import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'

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
        nodeResolve(),
        // 只配置插件是不会将 es6 代码转换成 es5 的代码的，babel 还需要预设
        babel({ babelHelpers: 'bundled'})
    ],
    // external: ['lodash-es']
}

// 注意：这里必须是 【 数组 】
export default [ buildIndexOptions ]


// 默认情况下 rollup 不会将 es6 的代码转换成 es5
// 如果想要转换成 es5 的代码需要使用插件 @rollup/plugin-babel

// 加入了 @babel/plugin-babel 和 babel 预设之后，可以将代码转换成 es5
// 预设只转换了语法，也就是我们看到的 箭头函数、const 等，但是对于进一步需要转换内置对象、实例方法等等 API，就显得无能为力了。这些代码需要 polyfill(垫片)。所以这个我需要 @babel/runtime 来帮我们处理。