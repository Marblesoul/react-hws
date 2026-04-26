export const MESSAGES_URL = 'http://localhost:7070/messages'
export const USER_ID_KEY = 'anonymous-chat-user-id'

function createFallbackId() {
  return `user-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function getStoredUserId(storage = window.localStorage) {
  const storedId = storage.getItem(USER_ID_KEY)

  if (storedId) {
    return storedId
  }

  const userId = globalThis.crypto?.randomUUID?.() ?? createFallbackId()
  storage.setItem(USER_ID_KEY, userId)

  return userId
}

export function createMessagePayload(userId, content) {
  return {
    id: 0,
    userId,
    content: content.trim(),
  }
}

export function normalizeMessages(messages) {
  if (!Array.isArray(messages)) {
    return []
  }

  return messages.filter(
    (message) =>
      Number.isFinite(Number(message.id)) &&
      typeof message.userId === 'string' &&
      message.userId.trim() &&
      typeof message.content === 'string' &&
      message.content.trim(),
  )
}

export function getLastMessageId(messages) {
  return messages.reduce((lastId, message) => Math.max(lastId, Number(message.id)), 0)
}

export function getMessageErrorText(error) {
  if (error instanceof TypeError) {
    return 'Сервер чата недоступен. Запустите backend на http://localhost:7070.'
  }

  return error.message
}

export async function fetchMessages(from) {
  let response

  try {
    response = await fetch(`${MESSAGES_URL}?from=${from}`)
  } catch (error) {
    throw new Error(getMessageErrorText(error))
  }

  if (!response.ok) {
    throw new Error('Не удалось загрузить сообщения')
  }

  return normalizeMessages(await response.json())
}

export async function postMessage(userId, content) {
  let response

  try {
    response = await fetch(MESSAGES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createMessagePayload(userId, content)),
    })
  } catch (error) {
    throw new Error(getMessageErrorText(error))
  }

  if (!response.ok) {
    throw new Error('Не удалось отправить сообщение')
  }
}
