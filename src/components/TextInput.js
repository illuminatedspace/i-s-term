import React from 'react'

class TextInput extends React.Component {
  state = {
    textInput: '',
  }

  handleChange = event => {
    this.setState({ textInput: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.parseCommand(this.state.textInput)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="command-line"
            placeholder="what would you like to do?"
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default TextInput
