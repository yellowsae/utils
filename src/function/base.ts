/**
 * @description: 空函数
 * @return {*}
 */
export const noop = () => {}

/**
 * @description: 永远返回 false
 * @return {boolean}
 */

export const no = () => false

/**
 * @description: 只调用一次的函数
 * @param fn (...args: any) => void
 * @return Function
 */

export function once(fn: (...args: any) => void): Function {
  let called = false
  return function (...args: any) {
    if (!called) {
      called = true
      return fn(...args)
    }
  }
}

export default {
  noop,
  no,
  once,
}
