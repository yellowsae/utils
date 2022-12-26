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
 * @description 转换数组
 * @param {Array} arr?
 * @returns {Array}
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array || []
  if (isArray(array))
    return array
  return [array]
}

/**
 * @description 数组去重
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArray<T>(arr: Nullable<Arrayable<T>>): Array<T> {
  if (!isArray(arr))
    return []
  return [...new Set(arr)]
}

/**
 * @description 转换一个独一无二的数组
 * @param {Array} arr
 * @returns {Array}
 */
export function uniq<T>(array: readonly T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * @description 获取数组的第n个元素，负数表示倒数
 * @param {Array} arr
 * @param {Number} index
 * @returns {Any}
 */
export function at(array: readonly[], index: number): undefined
export function at<T>(array: readonly T[], index: number): T
export function at<T>(array: readonly T[], index: number): T | undefined {
  const length = array.length
  if (!length)
    return undefined
  if (index < 0)
    index += length
  return array[index]
}

/**
 * @description 获取最后一个元素
 * @param {Array} arr
 * @returns {Any}
 */
export function last(array: readonly []): undefined
export function last<T>(array: readonly T[]): T
export function last<T>(array: readonly T[]): T | undefined {
  return at(array, -1)
}

/**
 * @description 从数组中移除一个元素
 * @param {Array} arr
 * @param {Any} item
 */
export function remove<T>(array: T[], value: T) {
  if (!array)
    return false
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}

/**
 * Genrate a range array of numbers. The `stop` is exclusive.
 * @description 生成一个范围数组，包含起始值，但不包含结束值
 * @param {Number} start?
 * @param {Number} stop?
 * @param {Number} step?
 * @returns {Array} numbers
 */
export function range(stop: number): number[]
export function range(start: number, stop: number, step?: number): number[]
export function range(...args: any): number[] {
  let start: number, stop: number, step: number
  if (args.length === 1) {
    start = 0
    step = 1;
    ([stop] = args)
  }
  else {
    ([start, stop, step = 1] = args)
  }
  const arr: number[] = []
  let current = start
  while (current < stop) {
    arr.push(current)
    current += step || 1
  }
  return arr
}

/**
 * @description 移动数组中的元素
 * @param {Array} arr
 * @param {Number} from
 * @param {Number} to
 * @returns {Array}
 */
export function move<T>(array: T[], from: number, to: number): T[] {
  array.splice(to, 0, array.splice(from, 1)[0])
  return array
}

/**
 *  averaging
 * @description 求平均值
 * @param {Array} arr
 * @returns {Number}
 */
export function average(...arr: number[]): number {
  return arr.reduce((c, n) => c + n, 0) / arr.length
}

/**
 * @description 随机排序数组
 * @returns {Array}
 */
export function shuffle<T extends any[]>(arr: T): T {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--) as number
    [arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

/**
 * @description 将数组均分多个数组
 * @returns {Array[][]}
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size)
    result.push(arr.slice(i, i + size))
  return result
}

/**
 * @description 旋转数组
 * @param {Array} arr
 * @param {Number} n
 * @returns {Array}
 */

export function rotate<T>(arr: T[], n: number): T[] {
  const length = arr.length
  if (length === 0)
    return arr
  const step = Math.abs(n) % length
  return arr.slice(-step).concat(arr.slice(0, length - step))
}
/**
 * Array Map
 * @category Array
 */
export default {
  arrayEqual,
  toArray,
  uniqueArray,
  uniq,
  at,
  last,
  remove,
  range,
  move,
  average,
  shuffle,
  chunk,
  rotate,
}
