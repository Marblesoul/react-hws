import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createNotePayload, normalizeNotes } from './notes.js'

describe('note helpers', () => {
  it('creates the backend payload for a new note', () => {
    assert.deepEqual(createNotePayload('  Test note  '), {
      id: 0,
      content: 'Test note',
    })
  })

  it('drops notes without useful content', () => {
    assert.deepEqual(
      normalizeNotes([
        { id: 1, content: 'First' },
        { id: 2, content: '' },
        { id: 3 },
      ]),
      [{ id: 1, content: 'First' }],
    )
  })
})
