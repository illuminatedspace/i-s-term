import React, { useState } from 'react'
import styled from 'styled-components'

import TextInput from './TextInput'
import getResponse from './getResponse'
import TextDisplay from './TextDisplay'
import Window from '../../../Window/Window'
import { textNodeType } from './const'
import { windowNames } from '../../_consts'
import { TextNodeCollection, TextNode } from './TerminalText'

const commandPrefix = '>'

const GridWrapperDiv = styled.div`
  display: grid;
  grid-template-rows: auto 2em;
  grid-template-areas: 'display' 'input';
  grid-auto-flow: row;
  grid-row-gap: 0;
  height: 100%;
`

const startingLine = key => (
  <TextNodeCollection key={key}>
    <TextNode text="hello world" />
  </TextNodeCollection>
)

const Terminal = ({ makeWindowActive, openWindow }) => {
  const [lines, setLines] = useState([startingLine(0)])

  const prefixCommand = command => `${commandPrefix} ${command}`

  const buildLine = ({ command, index, type }) => (
    <TextNodeCollection key={index} type={type}>
      {command}
    </TextNodeCollection>
  )

  const parseCommand = command => {
    const commandIndex = lines.length
    const commandLine = buildLine({
      command: prefixCommand(command),
      index: commandIndex,
      type: textNodeType.command,
    })
    const response = getResponse(command)
    const responseLine = buildLine({
      command: response,
      index: commandIndex + 1,
      type: textNodeType.response,
    })
    setLines(prevLines => [...prevLines, commandLine, responseLine])
  }

  return (
    <Window
      startingPosition={{ x: 175, y: 20, width: 500, height: 300 }}
      makeWindowActive={makeWindowActive}
      windowName={windowNames.Terminal}
    >
      <GridWrapperDiv>
        <TextDisplay lines={lines} />
        <TextInput parseCommand={parseCommand} />
      </GridWrapperDiv>
    </Window>
  )
}

export default Terminal
