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
        <TextNode key={`${name}-command`}>{`${name}, ${flag}`}</TextNode>,
        <TextNode key={`${name}-description`}>{description}</TextNode>,
      ]
    },
    [
      <TextNode key={'command-available'}>
        Here are all the commands available:
      </TextNode>,
    ]
  )

const createLaunchResponse = ([unsanitizedWindowName], createLaunchWindow) => {
  const windowName = _.startCase(unsanitizedWindowName)

  const { Terminal: terminalWindowName, ...launchableWindowNames } = windowNames

  if (windowName === terminalWindowName) {
    // TODO: add alternate snarky responses
    // "What, I'm not enough for you?"
    // "Maybe you didn't realize, this IS the terminal."
    // "Baby, there can only be one."
    return [
      <TextNode key="snarky-response">
        Surely you don&apos;t need two...
      </TextNode>,
    ]
  }

  const launchableWindowNameArray = Object.keys(launchableWindowNames)
  if (!launchableWindowNameArray.includes(windowName)) {
    return [
      <TextNode key="unrecognized-window">
        "I don't recognize that window name."
      </TextNode>,
      <TextNode key="window-names">{`Here's the list of windows you can launch: ${launchableWindowNameArray.join(
        ' '
      )}`}</TextNode>,
    ]
  }

  createLaunchWindow(windowName)()

  return [<TextNode key="launched-window">{`launch ${windowName}`}</TextNode>]
}

const createDefaultResponse = () => [
  <TextNode key="sorry">"Sorry, I did not understand that command."</TextNode>,
  <TextNode key="type-help">{`Type "help" to see a list of accepted commands.`}</TextNode>,
]

/**
 * Get response for command given
 * @param {string} command
 * @returns {string} response
 */
// TODO: handle displaying arguments for help command with "launch"
// launch contact
// ['launch', 'contact']
const getResponse = async (inputtedText, createLaunchWindow) => {
  const [command, ...args] = inputtedText.split(' ')
  switch (command) {
    case commands.help.flag:
    case commands.help.name:
      return createHelpResponse()

    case commands.launch.flag:
    case commands.launch.name:
      return await createLaunchResponse(args, createLaunchWindow)

    default:
      return createDefaultResponse()
  }
}

export default getResponse
