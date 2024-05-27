import esbuild from 'esbuild'

esbuild.build({
    // 入口列表
    entryPoints: ['./src/index.tsx'],
    // 出口列表
    outfile: './public/dist/index.js',
    // 是否需要打包
    bundle: true,
    // 是否需要压缩
    minify: false,
    // 是否需要 sourceMap
    sourcemap: true,
    // 指定语言版本false和目标环境
    target: ['es2020', 'chrome58', 'firefox57', 'safari11'],
    // 指定 loader
    loader: {
        '.svg': 'dataurl'
    }
})