import { describe, expect, it } from 'vitest'
import { no, noop, once } from '@/function'

describe('function test', () => {
  it('noop', () => {
    expect(noop()).toBeUndefined()
  })
  it('no', () => {
    expect(no()).toBe(false)
  })
  it ('once', () => {
    const onceFunc = once(() => 1)
    expect(onceFunc()).toBe(1)
    expect(onceFunc()).toBeUndefined()
  })
})
