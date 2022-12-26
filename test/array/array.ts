import { describe, expect, it } from 'vitest'
import { arrayEqual } from '../../src/array'

describe('test Array utils', () => {
  describe('#arrayEqual', () => {
    it('正常情况', () => {
      expect(arrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(true)
      expect(arrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 6])).toBe(false)
      expect(arrayEqual(['a', { name: 'aa' }], ['a', { name: 'aa' }])).toBe(false)
      expect(arrayEqual(['a'], ['a'])).toBe(true)
    })

    it('边缘情况', () => {
      expect(arrayEqual([], [])).toBe(true)
      expect(arrayEqual(1, 1)).toBe(false)
      expect(arrayEqual([Symbol(1)], [Symbol(1)])).toBe(false)
    })
  })
})
