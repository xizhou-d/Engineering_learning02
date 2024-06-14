import { RollupOptions } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import replace from '@rollup/plugin-replace'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import clear from 'rollup-plugin-clear'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'
import alias from '@rollup/plugin-alias'
// 用来在 ESM 环境下处理绝对路径问题
import { fileURLToPath } from 'node:url'

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const config: RollupOptions = {
    input: './src/index.tsx',
    output: {
        dir: './public/dist',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            include: 'src/**',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.tsx', '.ts']
        }),
        typescript(),
        replace({
            // 需要将字符串做一下替换，不然会报错: process is not defined
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true
        }),
        serve('public/dist'),
        livereload('src'),
        // pnpm run build的时候会删除 public/dist 文件夹下的内容重新生成
        clear({
            targets: ['public/dist']
        }),
        // css 支持
        postcss({
            extensions: ['.css'],   // 将 scss 解析成 css
            extract: true,          // 将 css 提取到 dist 目录下
            modules: true           // 增加 css 的模块化支持 
        }),
        // 处理图片插件
        image(),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: fileURLToPath(new URL('src', import.meta.url))
                }
            ]
        }),
        // 这个插件一定要放到底部，不然样式可能不会生效，不会在 html 中插入 css 代码
        htmlTemplate({
            template: './public/index.html',
            target: './public/dist/index.html',
            attrs: ['type="module"']
        })
    ]
}

export default config