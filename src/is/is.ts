/**
 * @category Is
 */
export const isArray = Array.isArray

/**
 * @category Is
 */
export const isValue = (val: any): val is boolean => val !== undefined && val !== null

export default {
  isArray,
  isValue,
}
