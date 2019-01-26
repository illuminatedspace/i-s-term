import React from 'react'
import styled from 'styled-components'

import TextInput from '../TextInput'
import getResponse from './getResponse'
import { purple } from '../../styles/colors'

const TextDisplayDiv = styled.div`
  padding: 1em;
`

class CommandLine extends React.Component {
  state = {
    lines: ['hello world', 'print hello', ''],
  }

  /**
   * takes a line or array of lines and adds it to this.state.lines
   * @param {string|array} line line or lines to add
   * @fires setState
   */
  addLine = line => {
    this.setState({ lines: this.state.lines.concat(line) })
  }

  parseCommand = command => {
    // match command to response (switch)
    const response = getResponse(command)
    // add line for both command and response
    this.addLine([command, response])
  }

  render() {
    return (
      <>
        <TextDisplayDiv>
          <h1>Hi Twitch!</h1>
          {this.state.lines.map((line, index) => (
            <p key={index}>{`> ${line}`}</p>
          ))}
        </TextDisplayDiv>

        <TextInput parseCommand={this.parseCommand} />
      </>
    )
  }
}

export default CommandLine
