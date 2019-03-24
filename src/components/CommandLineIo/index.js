import React from 'react'
import styled from 'styled-components'

import TextInput from '../TextInput'
import getResponse from './getResponse'
import { purple } from '../../styles/colors'

const TextDisplayDiv = styled.div`
  padding: 1em;
  background: ${props => props.theme.background};
`

const MarginBottomDiv = styled.div`
  margin-bottom: 1em;
`

const NoMarginBottomParagraph = styled.p`
  margin-bottom: 0;
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
   * Renders blocks of texts from an array of string arrays
   */
  breakTextOnNewLines = linesArray =>
    linesArray.map((stringArray, index) => {
      const textBlockArray = stringArray.map((string, index) => (
        <NoMarginBottomParagraph key={index}>{string}</NoMarginBottomParagraph>
      ))

      return <MarginBottomDiv key={index}>{textBlockArray}</MarginBottomDiv>
    })

  render() {
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
