// 读取 scss 文件
// 调用 sass 依赖提供的 compile 进行文件的编译
// 最终在 dist 目录下新生成一个 index.css (编译后的文件)

const sass = require('sass')    // 编译 scss 文件的
const path = require('path')
const fs = require('fs')

// 定义输入和输出的文件目录
const input = path.resolve(__dirname, 'index.scss')
console.log('input', input)
const output = path.resolve(__dirname, '../dist')
const cssPath = path.resolve(output, 'index.css')

// 编译
const result = sass.compile(input)
console.log('result', result)

if (!fs.existsSync(output)) {
    fs.mkdirSync(output)
}

fs.writeFileSync(cssPath, result.css)