// node 环境中导入可以使用 bare import(node 默认支持)
// import { debounce } from 'lodash-es'

// 浏览器中必须写全路径
import debounce from 'lodash-es/debounce.js'

import text2 from './text2.js'
debounce(() => { console.log('text1')}, 1000)()
text2()