import { Component, createRef } from 'react'
import './App.css'
import MessageForm from './components/MessageForm.jsx'
import MessageList from './components/MessageList.jsx'
import {
  fetchMessages,
  getLastMessageId,
  getStoredUserId,
  postMessage,
} from './lib/messages.js'

const POLLING_DELAY = 3000

class App extends Component {
  messagesEndRef = createRef()

  state = {
    userId: getStoredUserId(),
    messages: [],
    content: '',
    error: '',
    sending: false,
  }

  componentDidMount() {
    this.loadMessages()
    this.intervalId = setInterval(this.loadMessages, POLLING_DELAY)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.messages.length !== this.state.messages.length) {
      this.scrollToLatestMessage()
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  loadMessages = async () => {
    try {
      const lastMessageId = getLastMessageId(this.state.messages)
      const nextMessages = await fetchMessages(lastMessageId)

      if (nextMessages.length === 0) {
        return
      }

      this.setState((state) => ({
        messages: [...state.messages, ...nextMessages],
        error: '',
      }))
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  scrollToLatestMessage = () => {
    this.messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  handleContentChange = (content) => {
    this.setState({ content })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    if (!this.state.content.trim()) {
      return
    }

    this.setState({ sending: true, error: '' })

    try {
      await postMessage(this.state.userId, this.state.content)
      this.setState({ content: '' })
    } catch (error) {
      this.setState({ error: error.message })
    } finally {
      this.setState({ sending: false })
    }
  }

  render() {
    return (
      <main className="page-shell">
        <section className="chat-shell" aria-labelledby="page-title">
          <header className="chat-header">
            <h1 id="page-title">Анонимный чат</h1>
            <p>Ваш ID: {this.state.userId.slice(0, 8)}</p>
          </header>

          {this.state.error && <div className="error-message">{this.state.error}</div>}

          <MessageList
            messages={this.state.messages}
            userId={this.state.userId}
            endRef={this.messagesEndRef}
          />
          <MessageForm
            content={this.state.content}
            disabled={this.state.sending}
            onContentChange={this.handleContentChange}
            onSubmit={this.handleSubmit}
          />
        </section>
      </main>
    )
  }
}

export default App
