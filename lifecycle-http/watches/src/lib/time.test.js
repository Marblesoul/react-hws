import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { formatTimeForTimezone, normalizeTimezoneOffset } from './time.js'

describe('time helpers', () => {
  it('formats UTC time with a positive timezone offset', () => {
    const date = new Date('2026-04-26T10:05:09.000Z')

    assert.equal(formatTimeForTimezone(3, date), '13:05:09')
  })

  it('formats UTC time with a negative timezone offset', () => {
    const date = new Date('2026-04-26T01:02:03.000Z')

    assert.equal(formatTimeForTimezone(-5, date), '20:02:03')
  })

  it('normalizes user input into a numeric timezone offset', () => {
    assert.equal(normalizeTimezoneOffset(' 4 '), 4)
    assert.equal(normalizeTimezoneOffset('bad'), null)
  })
})
