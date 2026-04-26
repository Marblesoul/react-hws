import { Component } from 'react'
import './App.css'
import ClockForm from './components/ClockForm.jsx'
import ClockList from './components/ClockList.jsx'
import { normalizeTimezoneOffset } from './lib/time.js'

class App extends Component {
  state = {
    clocks: [],
  }

  handleAddClock = ({ name, timezoneOffset }) => {
    const title = name.trim()
    const offset = normalizeTimezoneOffset(timezoneOffset)

    if (!title || offset === null) {
      return
    }

    this.setState((state) => ({
      clocks: [
        ...state.clocks,
        {
          id: crypto.randomUUID(),
          name: title,
          timezoneOffset: offset,
        },
      ],
    }))
  }

  handleRemoveClock = (id) => {
    this.setState((state) => ({
      clocks: state.clocks.filter((clock) => clock.id !== id),
    }))
  }

  render() {
    return (
      <main className="page-shell">
        <section className="watches-panel" aria-labelledby="page-title">
          <div className="page-heading">
            <p className="eyebrow">Lifecycle</p>
            <h1 id="page-title">Мировые часы</h1>
          </div>

          <ClockForm onAddClock={this.handleAddClock} />
          <ClockList clocks={this.state.clocks} onRemoveClock={this.handleRemoveClock} />
        </section>
      </main>
    )
  }
}

export default App
