import React from 'react'
import _ from 'lodash'
import { TextNode } from './TerminalText'
import { windowNames } from '../../_consts'

const commandNames = {
  help: 'help',
  launch: 'launch',
  launchContact: 'launch contact',
}

const commands = {
  [commandNames.help]: {
    name: commandNames.help,
    description: 'shows all commands avalible',
    flag: '-h',
  },
  [commandNames.launch]: {
    name: commandNames.launch,
    description: 'launches the given page',
    arguments: [{ name: 'page', enum: ['projects', 'about', 'contact'] }],
    flag: '-l',
  },
}

/*
  should return format for every key in commands 
  help -h
  shows all commands available
*/
const createHelpResponse = () =>
  Object.values(commands).reduce(
    (acc, { name, flag, description }) => {
      return [
        ...acc,
        <TextNode text={`${name}, ${flag}`} key={`${name}-command`} />,
        <TextNode text={description} key={`${name}-description`} />,
      ]
    },
    [
      <TextNode
        text="Here are all the commands available:"
        key={'command-available'}
      />,
    ]
  )

const createLaunchResponse = ([windowName]) => {
  console.log('MACHOP', windowName)

  const { terminal: terminalWindowName, ...launchableWindowNames } = windowNames

  if (windowName === terminalWindowName) {
    // TODO: add alternate snarky responses
    // "What, I'm not enough for you?"
    // "Maybe you didn't realize, this IS the terminal."
    // "Baby, there can only be one."
    return [
      <TextNode text="Surely you don't need two..." key="snarky-response" />,
    ]
  }

  const launchableWindowNameArray = Object.keys(launchableWindowNames)
  if (!launchableWindowNameArray.includes(windowName)) {
    return [
      <TextNode
        text="I don't recognize that window name."
        key="unrecognized-window"
      />,
      <TextNode
        text={`Here's the list of windows you can launch: ${launchableWindowNameArray.join(
          ' '
        )}`}
        key="window-names"
      />,
    ]
  }
}

const createDefaultResponse = () => [
  <TextNode text="Sorry, I did not understand that command." key="sorry" />,
  <TextNode
    text={`Type "help" to see a list of accepted commands.`}
    key="type-help"
  />,
]

/**
 * Get response for command given
 * @param {string} command
 * @returns {string} response
 */
// TODO: handle displaying arguments for help command with "launch"
// launch contact
// ['launch', 'contact']
const getResponse = (inputtedText, openWindow) => {
  const [command, ...args] = inputtedText.split(' ')
  switch (command) {
    case commands.help.flag:
    case commands.help.name:
      return createHelpResponse()

    case commands.launch.flag:
    case commands.launch.name:
      return createLaunchResponse(args, openWindow)

    default:
      return createDefaultResponse()
  }
}

export default getResponse
