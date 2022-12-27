import { toTypeString } from '../shared'

/**
 * @descriptions 判断是否是window 对象
 * @param {any}  any  object
 * @return {boolean} turn/false
 */
// @ts-expect-error-next-line
export const isWindow = (v: any): boolean => typeof window !== 'undefined' && toTypeString(v) === '[object Window]'

/**
 * @description 判断是否在浏览器中
 * @return {boolean} true/false
 */
// @ts-expect-error-next-line
export const inBrowser = typeof window !== 'undefined'

/**
 * @description 判断是否在微信浏览器中
 * @returns {boolean} true/false
 */
// @ts-expect-error-next-line
export const isWeChatBrowser = (): boolean => (navigator?.userAgent.toLowerCase() as string).includes('micromessenger')

/**
 * @description navigator.userAgent
 */
// @ts-expect-error-next-line
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()

/**
 * @description 判断是否是IE
 */
export const isIE = UA && /msie|trident/.test(UA)

/**
 * isIE9
 *
 * @category Is
 */
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0

/**
 * isEdge
 */

export const isEdge = UA && UA.indexOf('edge/') > 0

/**
 * isChrome
 */
export const isChrmoe = UA && /chrome\/\d+/.test(UA) && !isEdge

/**
 * isPhantomJS
 *
 * @category Is
 */
export const isPhantomJS = UA && /phantomjs/.test(UA)

/**
 * isFF
 *
 * @category Is
 */
export const isFF = UA && UA.match(/firefox\/(\d+)/)

export default {
  isWindow,
  inBrowser,
  isWeChatBrowser,
  isIE,
  isIE9,
  isEdge,
  isChrmoe,
  isPhantomJS,
  isFF,
}
