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
// 代码压缩
import terser from '@rollup/plugin-terser'
// 打包分析
import { visualizer } from 'rollup-plugin-visualizer'

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const config: RollupOptions = {
    input: './src/index.tsx',
    output: {
        dir: './public/dist',
        format: 'esm',
        sourcemap: true,
        entryFileNames: '[name]-[hash].js',
        // 动态加载分包
        chunkFileNames: 'chunk/chunk-[name].[hash].js',
        // 手动分包，把 react 相关的全部打包到一个文件中去
        // manualChunks: {
        //     react: ['react', 'react-dom'] 
        // },
        // terser 插件可以放在 output 配置里面，也可以放在 plugins 的配置中
        plugins: [
            terser()
        ],
        // 如果排除一些包不打包到最终的结果中，可以在打包最终的 html 中加入 CDN 链接
        /**
         * 目的: globals 字段用于指定模块在全局作用域中的变量名。
         * 作用: 当 Rollup 打包时，如果发现代码中引用了 react 或 react-dom 模块，它将使用指定的全局变量名 React 和 ReactDOM 替代这些模块的导入。
         * 示例应用: 假设你在项目中使用 import React from 'react';，在打包时 Rollup 将会把这个语句转换为使用全局变量 React，而不是生成一个本地的 React 变量。
         */
        globals: {
            "react": "React", 
            "react-dom": "ReactDOM"
        },
        /**
         * 目的: paths 字段用于配置模块的路径映射。
         * 作用: 当 Rollup 在打包时遇到 react 或 react-dom 的引用时，它将会根据这些映射将实际的模块路径替换为指定的 URL 地址。
         * 示例应用: 这里的配置表明，当 Rollup 遇到 import React from 'react'; 或 import ReactDOM from 'react-dom'; 时，
         * 它将从 https://cdn.jsdelivr.net/npm/react@18.3.1/+esm 和 https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm 
         * 这两个 URL 地址加载对应的模块，而不是从本地文件系统或其他默认位置加载。
         */
        paths: {
            "react": "https://cdn.jsdelivr.net/npm/react@18.3.1/+esm",
            "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm"
        }
    },
    // 指定不需要打包的文件, 如果有这个配置那么必须关闭 output 中的 manualChunks 配置
    external: ['react', 'react-dom'],
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
        }),
        // 会在根目录生成一个 stats.html 文件
        visualizer()
    ]
}

export default config