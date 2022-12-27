import { describe, expect, it } from 'vitest'
import { isDate, isPromise, isRegExp } from '@/is'

describe('is test', () => {
  it('is', () => {
    const p = new Promise(() => {})
    expect(isPromise(p)).toBe(true)
    expect(isRegExp(/123/g)).toBe(true)
    expect(isDate(new Date())).toBe(true)
  })
})
