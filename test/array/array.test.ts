import { describe, expect, it } from 'vitest'
import { average, chunk, last, move, range, remove, rotate, shuffle } from '../../src/array/base'
import { nest as nestDate } from './targets/array'
import { arrayEqual, at, createLinkedList, nest, toArray, uniq, uniqueArray } from '@/array'
describe('test Array utils', () => {
  it('arrayEqual', () => {
    expect(arrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(true)
    expect(arrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 6])).toBe(false)
    expect(arrayEqual(['a', { name: 'aa' }], ['a', { name: 'aa' }])).toBe(false)
    expect(arrayEqual(['a'], ['a'])).toBe(true)
    expect(arrayEqual([], [])).toBe(true)
    expect(arrayEqual(1, 1)).toBe(false)
    expect(arrayEqual([Symbol(1)], [Symbol(1)])).toBe(false)
  })

  it('toArray', () => {
    expect(toArray(123)).toEqual([123])
    expect(toArray([1, 2, 412, 312])).toEqual([1, 2, 412, 312])
  })

  it('uniqueArray', () => {
    expect(uniqueArray([1, 2, 2, 412, 9, 9, 0, -1, -1])).toEqual([1, 2, 412, 9, 0, -1])
  })
  it('uniq', () => {
    expect(uniq([1, 2, 2, 412, 9, 9, 0, -1, -1])).toEqual([1, 2, 412, 9, 0, -1])
  })

  it ('at', () => {
    expect(at([1, 2, 3, 4, 5], -1)).toBe(5)
    expect(at([1, 2, 3, 4, 5], 1)).toBe(2)
    expect(at([], 1)).toBe(undefined)
  })

  it('last', () => {
    expect(last([1, 2, 3, 4, 5])).toBe(5)
    expect(last([])).toBe(undefined)
  })
  it('remove', () => {
    expect(remove([1, 2, 3, 4, 5], 5)).toBe(true)
    expect(remove([1, 2, 3, 4, 5], 0)).toBe(false)
  })

  it('range', () => {
    expect(range(0)).toEqual([])
    expect(range(5)).toEqual([0, 1, 2, 3, 4])
    expect(range(2, 6)).toEqual([2, 3, 4, 5])
    expect(range(2, 10, 2)).toEqual([2, 4, 6, 8])
  })

  it('move', () => {
    expect(move([1, 2, 3, 4], 3, 0)).toEqual([4, 1, 2, 3])
  })

  it('average', () => {
    expect(average(1, 2, 3, 4, 5)).toBe(3)
    expect(average(2, 3)).toBe(2.5)
    expect(average(...[2, 3, 4])).toBe(3)
  })

  it('shuffle', () => {
    expect(shuffle([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5])
    expect(shuffle([1, 2, 3])).toHaveLength(3)
    expect(shuffle([{ a: 1 }, { b: 2 }, { c: 3 }])).toHaveLength(3)
  })

  it('chunk', () => {
    // toMatchSnapshot() 快照测试
    expect(chunk(range(10), 4)).toMatchSnapshot()
  })

  it('nest', () => {
    nestDate.forEach(({ arr, id, pid }) => {
      expect(nest(arr, id, pid)).toMatchSnapshot()
    })
  })

  it('createLinkedList', () => {
    expect(createLinkedList([])).toBe(null)
    expect(createLinkedList([1, 2, 3, 4, 5])).toMatchSnapshot()
  })

  it('rotate', () => {
    expect(rotate([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2])
    expect(rotate([], 1)).toEqual([])
    expect(rotate(range(10), 4)).toEqual([6, 7, 8, 9, 0, 1, 2, 3, 4, 5])
  })
})
