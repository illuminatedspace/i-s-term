import React from 'react'

import TextInput from './TextInput'

const commands = {
  help: {
    name: 'help',
    description: 'shows all commands avalible',
    flag: '-h',
  },
  command2: {
    name: 'command2',
    description: 'another command!',
    flag: '-c',
  },
}

/**
 * Get response for command given
 * @param {string} command
 * @returns {string} response
 */
const getResponse = command => {
  switch (command) {
    case commands.help.flag:
    case commands.help.name:
      /*
        should return format for every key in commands 
        help -h
        shows all commands available
      */
      const helpText = Object.values(commands).reduce(
        (acc, { name, flag, description }) => {
          const commandEntry = [`${name}, ${flag}`, description]
          return acc.concat(commandEntry)
        },
        ['Here are all the commands available:']
      )

      return helpText.join('\n')

    default:
      return 'Sorry. I did not understand that command.\nType "help" to see a list of accepted commands'
  }
}

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
      <div>
        {this.state.lines.map((line, index) => (
          <p key={index}>{`> ${line}`}</p>
        ))}
        <TextInput parseCommand={this.parseCommand} />
      </div>
    )
  }
}

export default CommandLine
