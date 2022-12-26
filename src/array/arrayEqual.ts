/**
 * @description 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */

export function arrayEqual(arr1: any[], arr2: any[]): boolean {
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
