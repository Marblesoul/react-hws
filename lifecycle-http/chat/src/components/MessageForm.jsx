function MessageForm({ content, disabled, onContentChange, onSubmit }) {
  return (
    <form className="message-form" onSubmit={onSubmit}>
      <textarea
        value={content}
        onChange={({ target }) => onContentChange(target.value)}
        placeholder="Введите сообщение"
        rows="2"
      />
      <button type="submit" disabled={disabled || !content.trim()} aria-label="Отправить">
        ➤
      </button>
    </form>
  )
}

export default MessageForm
