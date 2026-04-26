import WorldClock from './WorldClock.jsx'

function ClockList({ clocks, onRemoveClock }) {
  if (clocks.length === 0) {
    return <p className="empty-state">Добавьте первые часы.</p>
  }

  return (
    <div className="clock-grid">
      {clocks.map((clock) => (
        <WorldClock key={clock.id} clock={clock} onRemoveClock={onRemoveClock} />
      ))}
    </div>
  )
}

export default ClockList
