import { isArray } from '../is/is'
import type { Arrayable, Nullable } from '../types'

/**
 * @description 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */
export function arrayEqual<T>(arr1: Nullable<Arrayable<T>>, arr2: Nullable<Arrayable<T>>): boolean {
  if (!isArray(arr1) || !isArray(arr2))
    return false
  if (arr1 === arr2)
    return true
  if (arr1.length !== arr2.length)
    return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false
  }
  return true
}

/**
 * Array Map
 * @category Array
 */
export default {
  arrayEqual,
}
