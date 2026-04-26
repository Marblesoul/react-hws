function MessageList({ messages, userId, endRef }) {
  return (
    <div className="message-list">
      {messages.length === 0 && <p className="empty-state">Сообщений пока нет.</p>}

      {messages.map((message) => {
        const isOwn = message.userId === userId

        return (
          <article className={`message ${isOwn ? 'own-message' : 'other-message'}`} key={message.id}>
            <p>{message.content}</p>
          </article>
        )
      })}

      <div ref={endRef} />
    </div>
  )
}

export default MessageList
