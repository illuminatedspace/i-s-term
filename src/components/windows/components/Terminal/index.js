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

const startingLine = (
  <TextNodeCollection>
    <TextNode text="hello world" />
  </TextNodeCollection>
)

const Terminal = ({ makeWindowActive }) => {
  const [lines, setLines] = useState([startingLine])

  const prefixCommand = command => `${commandPrefix} ${command}`

  const parseCommand = command => {
    // match command to response (switch)
    const response = getResponse(command)
    // add line for both command and response
    const prefixedCommand = prefixCommand(command)
    setLines(prevState => ({
      lines: [
        ...prevState.lines,
        { type: textNodeType.command, stringArray: [prefixedCommand] },
        { type: textNodeType.response, stringArray: response },
      ],
    }))
  }

  return (
    <Window
      startingPosition={{ x: 175, y: 20, width: 500, height: 300 }}
      makeWindowActive={makeWindowActive}
      windowName={windowNames.terminal}
    >
      <GridWrapperDiv>
        <TextDisplay lines={lines} />
        <TextInput parseCommand={parseCommand} />
      </GridWrapperDiv>
    </Window>
  )
}

export default Terminal
