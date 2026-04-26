export const NOTES_URL = 'http://localhost:7070/notes'

export function createNotePayload(content) {
  return {
    id: 0,
    content: content.trim(),
  }
}

export function normalizeNotes(notes) {
  if (!Array.isArray(notes)) {
    return []
  }

  return notes.filter(
    (note) => Number.isFinite(Number(note.id)) && typeof note.content === 'string' && note.content.trim(),
  )
}

export async function fetchNotes() {
  const response = await fetch(NOTES_URL)

  if (!response.ok) {
    throw new Error('Не удалось загрузить заметки')
  }

  return normalizeNotes(await response.json())
}

export async function postNote(content) {
  const response = await fetch(NOTES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(createNotePayload(content)),
  })

  if (!response.ok) {
    throw new Error('Не удалось добавить заметку')
  }
}

export async function deleteNote(id) {
  const response = await fetch(`${NOTES_URL}/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Не удалось удалить заметку')
  }
}
