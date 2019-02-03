import React from 'react'
import styled from 'styled-components'
import { purple, yellow, black } from '../styles/colors'

const StyledInput = styled.input`
  background: ${purple.light};
  border: none;
  color: ${black};
  width: 100%;
  padding: 0 1em;
  font-weight: bold;

  // Not working
  ::placeholder: {
    color: white;
  }
`

const StyledForm = styled.form`
  margin-bottom: 0;
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
      <>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            type="text"
            id="command-line"
            placeholder="> what would you like to do?"
            onChange={this.handleChange}
          />
        </StyledForm>
      </>
    )
  }
}

export default TextInput
