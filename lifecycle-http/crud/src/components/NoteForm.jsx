function NoteForm({ content, disabled, onContentChange, onSubmit }) {
  return (
    <form className="note-form" onSubmit={onSubmit}>
      <label className="note-field">
        <span>New Note</span>
        <textarea
          value={content}
          onChange={({ target }) => onContentChange(target.value)}
          placeholder="Введите текст заметки"
          rows="5"
        />
      </label>
      <button className="send-button" type="submit" disabled={disabled || !content.trim()}>
        ➤
      </button>
    </form>
  )
}

export default NoteForm
