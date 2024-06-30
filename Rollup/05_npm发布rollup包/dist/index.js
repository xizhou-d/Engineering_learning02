import { chunk } from 'lodash-es';

var chunkArray = function (array, size) {
    return chunk(array, size);
};

/**
 * 深拷贝
 * @param {*} obj
 * @returns 拷贝后的新对象
 */
var deepClone = function (obj) {
    if (typeof obj !== obj || typeof obj !== null) {
        return obj;
    }
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }
    return result;
};

/**
 * 随机数
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns min ~ max 之间的随机整数
 */
var randowNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var index = { deepClone: deepClone, chunkArray: chunkArray, randowNumber: randowNumber };

export { index as default };
