// lodash 是 cjs 规范的，但是
import { chunk } from 'lodash'

const r = chunk([1, 2, 3, 4, 5, 6, 7, 8], 2)
console.log('r', r)