// 下面这种方法写的时候没有提示，因此可以使用注释的方式
/**
 * @type { import('rollup').RollupOptions}
 */
export default {
    input: 'src/index.js',
    // output: {
    //     file: 'dist/bundle.js',
    //     format: 'esm',
    // }

    // umd 需要加一个 name 属性
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'bundle'
    }
}