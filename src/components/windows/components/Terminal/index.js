import React, { useState } from 'react'
import styled from 'styled-components'

import TextInput from './TextInput'
import getResponse from './getResponse'
import TextDisplay from './TextDisplay'
import DraggableWindow from '../../../DraggableWindow/DraggableWindow'
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
    <TextNode>
      Hello. Welcome to my site. Feel free to click on the icons to the left to
      launch windows, or type &quot;help&quot; to see commands in the terminal.
    </TextNode>
  </TextNodeCollection>
)

const Terminal = ({ makeWindowActive, createLaunchWindow }) => {
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
    const response = getResponse(command, createLaunchWindow)
    const responseLine = buildLine({
      command: response,
      index: commandIndex + 1,
      type: textNodeType.response,
    })
    setLines(prevLines => [...prevLines, commandLine, responseLine])
  }

  return (
    <DraggableWindow
      startingPosition={{ x: 175, y: 20, width: 500, height: 300 }}
      makeWindowActive={makeWindowActive}
      windowName={windowNames.Terminal}
    >
      <GridWrapperDiv>
        <TextDisplay lines={lines} />
        <TextInput parseCommand={parseCommand} />
      </GridWrapperDiv>
    </DraggableWindow>
  )
}

export default Terminal
