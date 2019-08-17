import React, { useState } from 'react'
import styled from 'styled-components'

const FlexWrapperDiv = styled.div`
  display: flex;
  border-top: ${props => props.theme.window.border};
  grid-row-start: input;
  grid-row-end: span 1;
  align-self: center;
  height: 100%;
`

const InputPrefixDiv = styled.div`
  flex-grow: 0.02;
  padding: 0.25em 0 0 1em;
  box-sizing: border-box;
  color: ${props => props.theme.text.quadentiary};
`

const TextInputWrapperDiv = styled.div`
  flex-grow: 1;
`

const StyledInput = styled.input`
  background: rgba(0, 0, 0, 0);
  border: none;
  color: ${props => props.theme.text.primary}
  width: 100%;
  height: 100%;
`

const StyledForm = styled.form`
  margin-bottom: 0;
  height: 100%;
`

const defaultState = ''

const TextInput = ({ parseCommand }) => {
  const [textInput, setTextInput] = useState(defaultState)

  const handleChange = event => {
    setTextInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    parseCommand(textInput)
    setTextInput(defaultState)
  }

  return (
    <FlexWrapperDiv>
      <InputPrefixDiv>{'>'}</InputPrefixDiv>
      <TextInputWrapperDiv>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            id="command-line"
            placeholder="what would you like to do?"
            onChange={handleChange}
            value={textInput}
          />
        </StyledForm>
      </TextInputWrapperDiv>
    </FlexWrapperDiv>
  )
}

export default TextInput
