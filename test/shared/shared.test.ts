import { describe, expect, it } from 'vitest'
import { getRandom, hash, toTypeString } from '@/shared'

describe('shared test', () => {
  it('toTypeString', () => {
    expect(toTypeString('string')).toBe('[object String]')
    expect(toTypeString([])).toBe('[object Array]')
    expect(toTypeString({})).toBe('[object Object]')
    expect(toTypeString(Date)).toBe('[object Function]')
    expect(toTypeString(null)).toBe('[object Null]')
    expect(toTypeString(undefined)).toBe('[object Undefined]')
  })

  it('getRandom', () => {
    expect(getRandom(1, 10)).toBeGreaterThanOrEqual(1)
    expect(getRandom(1, 3)).toBeGreaterThanOrEqual(1)
  })

  it('hash', () => {
    expect(hash('string')).toBe('6labeg')
  })
})
