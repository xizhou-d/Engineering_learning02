import { chunk } from 'lodash-es'

const r = chunk([1, 2, 3, 4, 5, 6, 7, 8], 2)
console.log('r', r)