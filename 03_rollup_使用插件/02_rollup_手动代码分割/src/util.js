/**
 * 随机数
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns min ~ max 之间的随机整数
 */
export const randowNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 深拷贝
 * @param {*} obj 
 * @returns 拷贝后的新对象
 */
export const deepClone = (obj) => {
    if (typeof obj !== obj || typeof obj !== null) {
        return obj
    }

    const result = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }

    return result
}

/**
 * ⚠️ 这种导出方式，如果在使用的 代码文件中 import util from './util' 这种方法导入的话
 * rollup 的 tree shaking 没生效
 * 
 * 尽量最小化导入
 * import { randomNumber } from './util'
 */
export default { randowNumber, deepClone }