function run() {
    /**
     * 动态导入
     * 打包之后会多出来一个文件，就是动态导入的文件
     */
    import('./util').then(chunk => {
        console.log('chunk', chunk)
        const r = chunk.randowNumber(1, 20)
        console.log('r', r)
    })
}

run()