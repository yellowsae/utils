import { describe, expect, it } from 'vitest'
import { formatNum } from '@/number'

describe('number test', () => {
  it ('format number', () => {
    expect(formatNum(123456789)).toBe('123,456,789')
    expect(formatNum(123456789, 2)).toBe('123,456,789.00')
    expect(formatNum(123456789, 2, '￥')).toBe('123,456,789.00￥')
    expect(formatNum(123456789, 2, '元', '￥')).toBe('￥123,456,789.00元')
  })
})
