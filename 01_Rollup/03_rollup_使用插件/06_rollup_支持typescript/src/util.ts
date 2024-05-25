export const deepClone = <T>(obj: T): T => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
    const result: any = Array.isArray(obj) ? [] : { };
    for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        result[key] = deepClone(obj[key]);
    }
  }
    return result;
};

export const randowNumber = (min: number, max: number): number => {
        let num = Math.floor(Math.random() * (min - max) + max);
    return num;
};

/**
 * ⚠️ 这种导出方式，如果在使用的 代码文件中 import util from './util' 这种方法导入的话
 * rollup 的 tree shaking 没生效
 *
 * 尽量最小化导入
 * import {randomNumber} from './util'
    */
    export default {randowNumber, deepClone};
