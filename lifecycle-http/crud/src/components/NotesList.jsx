function NotesList({ notes, onDeleteNote }) {
  if (notes.length === 0) {
    return <p className="empty-state">Заметок пока нет.</p>
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <article className="note-card" key={note.id}>
          <button
            className="delete-button"
            type="button"
            aria-label="Удалить заметку"
            onClick={() => onDeleteNote(note.id)}
          >
            ×
          </button>
          <p>{note.content}</p>
        </article>
      ))}
    </div>
  )
}

export default NotesList
