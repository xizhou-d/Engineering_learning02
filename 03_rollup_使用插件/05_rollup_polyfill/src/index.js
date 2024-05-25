import { randowNumber, deepClone } from './util.js'

const r = randowNumber(1, 10)
console.log('r', r)


const obj = {
    a: 1,
    b: {
        c: 1,
        d: 3
    }
}

const newObj = deepClone(obj)
newObj.b.e = 4
console.log('obj', obj)
console.log('newObj', newObj)


const arr = [1, 2, 3, 4].map(item => item * item)

console.log('arr', arr)

Promise.resolve(1).then(res => console.log('res', res))