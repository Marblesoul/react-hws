import { Component } from 'react'
import './App.css'
import NoteForm from './components/NoteForm.jsx'
import NotesList from './components/NotesList.jsx'
import { deleteNote, fetchNotes, postNote } from './lib/notes.js'

class App extends Component {
  state = {
    notes: [],
    content: '',
    loading: false,
    error: '',
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = async () => {
    this.setState({ loading: true, error: '' })

    try {
      const notes = await fetchNotes()
      this.setState({ notes })
    } catch (error) {
      this.setState({ error: error.message })
    } finally {
      this.setState({ loading: false })
    }
  }

  handleContentChange = (content) => {
    this.setState({ content })
  }

  handleAddNote = async (event) => {
    event.preventDefault()

    if (!this.state.content.trim()) {
      return
    }

    this.setState({ loading: true, error: '' })

    try {
      await postNote(this.state.content)
      this.setState({ content: '' })
      await this.loadNotes()
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  handleDeleteNote = async (id) => {
    this.setState({ loading: true, error: '' })

    try {
      await deleteNote(id)
      await this.loadNotes()
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  render() {
    return (
      <main className="page-shell">
        <section className="notes-workspace" aria-labelledby="page-title">
          <header className="notes-header">
            <h1 id="page-title">Notes</h1>
            <button
              className="refresh-button"
              type="button"
              onClick={this.loadNotes}
              disabled={this.state.loading}
              aria-label="Обновить заметки"
              title="Обновить"
            >
              ↻
            </button>
          </header>

          {this.state.error && <div className="error-message">{this.state.error}</div>}

          <NotesList notes={this.state.notes} onDeleteNote={this.handleDeleteNote} />
          <NoteForm
            content={this.state.content}
            disabled={this.state.loading}
            onContentChange={this.handleContentChange}
            onSubmit={this.handleAddNote}
          />
        </section>
      </main>
    )
  }
}

export default App
