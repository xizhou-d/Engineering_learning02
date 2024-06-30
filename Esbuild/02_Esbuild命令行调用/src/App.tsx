// Esbuild 天生支持 tsx，不需要什么配置，开箱即用
import React from 'react'
import ReactDOm from 'react-dom/server'
// 将 svg 当作模块引入会报错，我们没哟做任何配置，因此需要在 types.d.ts 中声明一下，svg 作为模块导出（告诉 vscode 可以让 vscode 识别）
import CheckedSvg from './assets/radio-button-checked-svgrepo-com.svg'

// 
const HTitle = () => (
    <div>
        <h1>标题</h1>
        <img src={CheckedSvg} alt="" />
    </div>
)
console.log('s', ReactDOm.renderToString(<HTitle />))