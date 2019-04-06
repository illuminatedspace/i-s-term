import React from 'react'
import styled from 'styled-components'

import TextInput from '../TextInput'
import getResponse from './getResponse'
import { purple } from '../../styles/colors'

/* TODO:
[x] 1. Refactor to handle string array state.lines
[] 2. Wrap inputted text in arrays before storing in state.lines
*/

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
    lines: [
      ['hello world'],
      ['print hello'],
      ['help, -h', 'shows all commands avalible'],
    ],
  }

  /**
   * takes a line or array of lines and adds it to this.state.lines
   * @param {string|array} line line or lines to add
   * @fires setState
   */
  addLine = lines => {
    this.setState({ lines: [...this.state.lines, lines] })
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
