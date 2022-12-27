/**
 * @description 是否是润年
 * @param {number} year 年份
 * @returns {boolean} 是否是润年
 */
export const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

/**
 * @description 简单的延迟函数
 * @param {number} ms 毫秒数
 * @returns {Promise<void>}
 *
 */
export const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

/**
 * @description 格式化时间戳
 * @param {number} timestamp 时间戳
 * @param format 格式化字符串
 * @return string
 */
export const fromatTimestamp = (timestamp: number, format = 'yyyy-MM-dd hh:mm:ss') => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return format.replace(/yyyy/, year.toString())
    .replace(/MM/, month.toString().padStart(2, '0'))
    .replace(/dd/, day.toString().padStart(2, '0'))
    .replace(/hh/, hour.toString().padStart(2, '0'))
    .replace(/mm/, minute.toString().padStart(2, '0'))
    .replace(/ss/, second.toString().padStart(2, '0'))
}

/**
 * @description 秒数
 * @return string
 */
export const formatSeconde = (value: number) => {
  const h = (value / 3600) >> 0
  const m = ((value % 3600) / 60) >> 0
  const s = (value % 60) >> 0
  return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
}
export default {
  isLeapYear,
  sleep,
  fromatTimestamp,
  formatSeconde,
}
