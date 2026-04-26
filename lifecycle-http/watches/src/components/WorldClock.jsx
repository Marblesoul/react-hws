import { Component } from 'react'
import { formatTimeForTimezone } from '../lib/time.js'

class WorldClock extends Component {
  state = {
    now: new Date(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ now: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { clock, onRemoveClock } = this.props

    return (
      <article className="clock-card">
        <button
          className="remove-button"
          type="button"
          aria-label={`Удалить ${clock.name}`}
          onClick={() => onRemoveClock(clock.id)}
        >
          ×
        </button>
        <h2>{clock.name}</h2>
        <div className="time-display">
          {formatTimeForTimezone(clock.timezoneOffset, this.state.now)}
        </div>
        <p className="timezone-label">UTC{clock.timezoneOffset >= 0 ? '+' : ''}{clock.timezoneOffset}</p>
      </article>
    )
  }
}

export default WorldClock
