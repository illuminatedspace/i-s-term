import React from 'react'
import styled from 'styled-components'

import TextInput from '../TextInput'
import getResponse from './getResponse'
import { purple } from '../../styles/colors'
import TextDisplay from './TextDisplay'

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

  render() {
    return (
      <>
        <TextDisplay lines={this.state.lines} />
        <TextInput parseCommand={this.parseCommand} />
      </>
    )
  }
}

export default CommandLineIo
