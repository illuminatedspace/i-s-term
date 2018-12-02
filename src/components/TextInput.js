import React from 'react'

class TextInput extends React.Component {
  state = {
    textInput: '',
  }

  handleChange = event => {
    console.log('EVEE')
    this.setState({ textInput: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addLine(this.textInput)
  }

  render() {
    console.log('ONYX', this.state.textInput)
    return (
      <div>
        <form onSubmit={event => this.handleSubmit}>
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

// props = {
//   addLine: addLinefunction
//   handleSubmit: handleSubmitFunction
// }

export default TextInput
