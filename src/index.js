import { randowNumber, deepClone } from './util'

const r = randowNumber(1, 10)
console.log('r', r)

const obj = {
    name: 'xizhou',
    age: 18
}
// const result = deepClone(obj)