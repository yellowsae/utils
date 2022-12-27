import { describe, expect, it } from 'vitest'
import { formatSeconde, isLeapYear } from '@/date'
describe('date test', () => {
  it('isLeapYear', () => {
    expect(isLeapYear(2020)).toBe(true)
    expect(isLeapYear(2022)).toBe(false)
  })

  // it('sleep', async () => {
  //   const start = Date.now()
  //   await sleep(2000)
  //   const end = Date.now()
  //   expect(end - start).toBeGreaterThanOrEqual(2000)
  // })

  // it('fromatTimestamp', () => {
  // const timestamp = 1672120478027
  // expect(fromatTimestamp(timestamp)).toMatchInlineSnapshot('"2022-12-27 13:54:38"')
  // expect(fromatTimestamp(timestamp, 'yyyy-MM-dd')).toMatchInlineSnapshot('"2022-12-27"')
  // })

  it('formatSeconde', () => {
    expect(formatSeconde(60)).toMatchInlineSnapshot('"00:01:00"')
    expect(formatSeconde(120)).toMatchInlineSnapshot('"00:02:00"')
    expect(formatSeconde(54)).toMatchInlineSnapshot('"00:00:54"')
    expect(formatSeconde(2120)).toMatchInlineSnapshot('"00:35:20"')
    expect(formatSeconde(3600 * 24)).toMatchInlineSnapshot('"24:00:00"')
  })
})
