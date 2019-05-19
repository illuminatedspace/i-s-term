import React from 'react'
import styled from 'styled-components'
import { yellow } from '../styles/color'

const FlexWrapperDiv = styled.div`
  display: flex;
  border-top: ${props => props.theme.window.border};
  grid-row-start: input;
  grid-row-end: span 1;
  align-self: center;
`

const InputPrefixDiv = styled.div`
  flex-grow: 0.02;
  padding: 0 0 0 1em;
  box-sizing: border-box;
`
const TextInputWrapperDiv = styled.div`
  flex-grow: 1;
`

const StyledInput = styled.input`
  background: rgba(0, 0, 0, 0);
  border: none;
  color: ${yellow.medium};
  width: 100%;
`

const StyledForm = styled.form`
  margin-bottom: 0;
`

const defaultState = ''

class TextInput extends React.Component {
  state = {
    textInput: defaultState,
  }

  handleChange = event => {
    this.setState({ textInput: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.parseCommand(this.state.textInput)
    this.setState({ textInput: defaultState })
  }

  render() {
    return (
      <FlexWrapperDiv>
        <InputPrefixDiv>{'>'}</InputPrefixDiv>
        <TextInputWrapperDiv>
          <StyledForm onSubmit={this.handleSubmit}>
            <StyledInput
              type="text"
              id="command-line"
              placeholder="what would you like to do?"
              onChange={this.handleChange}
              value={this.state.textInput}
            />
          </StyledForm>
        </TextInputWrapperDiv>
      </FlexWrapperDiv>
    )
  }
}

export default TextInput
