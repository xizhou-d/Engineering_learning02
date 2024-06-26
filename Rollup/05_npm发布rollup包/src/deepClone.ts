/**
 * 深拷贝
 * @param {*} obj 
 * @returns 拷贝后的新对象
 */
const deepClone = (obj: any) => {
    if (typeof obj !== obj || typeof obj !== null) {
        return obj
    }

    const result: any = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }

    return result
}

export default deepClone