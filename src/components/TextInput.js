import React from 'react'
import styled from 'styled-components'
import { purple, yellow } from '../styles/colors'

const StyledInput = styled.input`
  background: ${purple.light};
  border: none;
  color: #fff;
  width: 100%;
  padding: 0 1%;
`

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
          <StyledInput
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
