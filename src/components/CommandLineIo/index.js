import React from 'react'

import TextInput from '../TextInput'
import getResponse from './getResponse'
import TextDisplay from './TextDisplay'
import Window from '../Window/Window'

const commandPrefix = '>'

const windowName = 'terminal'

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

  render() {
    return (
      <Window windowName={windowName}>
        <TextDisplay lines={this.state.lines} />
        <TextInput parseCommand={this.parseCommand} />
      </Window>
    )
  }
}

export default CommandLineIo
