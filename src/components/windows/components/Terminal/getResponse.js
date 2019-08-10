import React from 'react'
import { TextNode } from './TerminalText'

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
    case commands.help.name: {
      /*
        should return format for every key in commands 
        help -h
        shows all commands available
      */
      return Object.values(commands).reduce(
        (acc, { name, flag, description }) => {
          return [
            ...acc,
            <TextNode text={`${name}, ${flag}`} />,
            <TextNode text={description} />,
          ]
        },
        [<TextNode text="Here are all the commands available:" />]
      )
    }
    default:
      return [
        [
          'Sorry, I did not understand that command.',
          'Type "help" to see a list of accepted commands.',
        ],
      ]
  }
}

export default getResponse
