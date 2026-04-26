import { Component } from 'react'

class ClockForm extends Component {
  state = {
    name: '',
    timezoneOffset: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onAddClock(this.state)
    this.setState({
      name: '',
      timezoneOffset: '',
    })
  }

  render() {
    return (
      <form className="clock-form" onSubmit={this.handleSubmit}>
        <label className="field">
          <span>Название</span>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Moscow"
          />
        </label>

        <label className="field">
          <span>Временная зона</span>
          <input
            name="timezoneOffset"
            value={this.state.timezoneOffset}
            onChange={this.handleChange}
            placeholder="3"
            type="number"
            step="0.5"
          />
        </label>

        <button className="primary-button" type="submit">
          Добавить
        </button>
      </form>
    )
  }
}

export default ClockForm
