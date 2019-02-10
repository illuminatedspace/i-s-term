import React from 'react'
import styled from 'styled-components'

import TextInput from '../TextInput'
import getResponse from './getResponse'
import { purple } from '../../styles/colors'

const TextDisplayDiv = styled.div`
  padding: 1em;
  background: ${props => props.theme.background};
`

class CommandLineIo extends React.Component {
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

  /**
   * Splits strings on \n characters and replaces them
   * wraps them in <p/> tags.
   */
  breakTextOnNewLines = array =>
    array.map(string => {
      // 'hello.\nThis is a new line.'
      // ['hello', 'This is a new line.'];
      // 'hello<br/>This is a new line.'
      // <p>hello</p><p>This is a new line</p>

      const joinedWithNewLine = array.join('\n')
      const splitString = string.split('\n')

      // return splitString.join(<br />)

      return (
        <>
          {splitString.map(line => (
            <p>{line}</p>
          ))}
        </>
      )
    })

  render() {
    // const lines = this.breakTextOnNewLines(this.state.lines)
    return (
      <>
        <TextDisplayDiv>
          <h1>Hi Twitch!</h1>
          {this.breakTextOnNewLines(this.state.lines)}
        </TextDisplayDiv>

        <TextInput parseCommand={this.parseCommand} />
      </>
    )
  }
}

export default CommandLineIo
