import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  createMessagePayload,
  getMessageErrorText,
  getLastMessageId,
  getStoredUserId,
  normalizeMessages,
} from './messages.js'

describe('message helpers', () => {
  it('keeps the same user id in storage', () => {
    const storage = new Map()
    const adapter = {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
    }

    const first = getStoredUserId(adapter)
    const second = getStoredUserId(adapter)

    assert.equal(first, second)
  })

  it('creates the backend payload for a new message', () => {
    assert.deepEqual(createMessagePayload('user-1', '  Hello  '), {
      id: 0,
      userId: 'user-1',
      content: 'Hello',
    })
  })

  it('normalizes messages and finds the last id', () => {
    const messages = normalizeMessages([
      { id: 3, userId: 'a', content: 'Hi' },
      { id: 5, userId: 'b', content: 'There' },
      { id: 6, userId: 'c', content: '' },
    ])

    assert.deepEqual(messages, [
      { id: 3, userId: 'a', content: 'Hi' },
      { id: 5, userId: 'b', content: 'There' },
    ])
    assert.equal(getLastMessageId(messages), 5)
  })

  it('shows a useful message when the backend is unavailable', () => {
    assert.equal(
      getMessageErrorText(new TypeError('Failed to fetch')),
      'Сервер чата недоступен. Запустите backend на http://localhost:7070.',
    )
  })
})
