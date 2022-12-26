import { describe, expect, it } from 'vitest'
import { arrayEqual } from '../../src/array/arrayEqual'

describe('#arrayEqual', () => {
  it('正常情况', () => {
    const arr1 = [1, 2, 3, 4, 5]
    const arr2 = [1, 2, 3, 4, 5]
    const res = arrayEqual(arr1, arr2)
    expect(res).toBe(true)
  })
})
