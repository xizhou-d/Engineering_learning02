// Esbuild 天生支持 tsx，不需要什么配置，开箱即用
// 但是，但是，但是，不支持 ts
import React from 'react'
import ReactDOm from 'react-dom/server'

const HTitle = () => <h1>标题</h1>
console.log('s', ReactDOm.renderToString(<HTitle />))