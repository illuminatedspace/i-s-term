import React from 'react'
import styled from 'styled-components'

import TextInput from './TextInput'
import getResponse from './getResponse'
import TextDisplay from './TextDisplay'
import Window from '../Window/Window'
import { textNodeType } from './const'

const commandPrefix = '>'

const windowName = 'terminal'

const GridWrapperDiv = styled.div`
  display: grid;
  grid-template-rows: auto 2em;
  grid-template-areas: 'display' 'input';
  grid-auto-flow: row;
  grid-row-gap: 0;
  height: 100%;
`

class CommandLineIo extends React.Component {
  state = {
    lines: [{ type: textNodeType.response, stringArray: ['hello world'] }],
  }

  prefixCommand = command => `${commandPrefix} ${command}`

  parseCommand = command => {
    // match command to response (switch)
    const response = getResponse(command)
    // add line for both command and response
    const prefixedCommand = this.prefixCommand(command)
    this.setState(prevState => ({
      lines: [
        ...prevState.lines,
        { type: textNodeType.command, stringArray: [prefixedCommand] },
        { type: textNodeType.response, stringArray: response },
      ],
    }))
  }

  render() {
    return (
      <Window windowName={windowName}>
        <GridWrapperDiv>
          <TextDisplay lines={this.state.lines} />
          <TextInput parseCommand={this.parseCommand} />
        </GridWrapperDiv>
      </Window>
    )
  }
}

export default CommandLineIo
