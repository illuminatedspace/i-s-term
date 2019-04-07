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
const commandPrefix = '>'

class CommandLineIo extends React.Component {
  state = {
    lines: [['hello world']],
  }

  prefixCommand = command => `${commandPrefix} ${command}`

  parseCommand = command => {
    // match command to response (switch)
    const response = getResponse(command)
    // add line for both command and response
    const prefixedCommand = this.prefixCommand(command)
    this.setState({
      lines: [...this.state.lines, [prefixedCommand], ...response],
    })
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
