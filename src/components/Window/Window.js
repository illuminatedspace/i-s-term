import React from 'react'
import { Rnd } from 'react-rnd'
import styled from 'styled-components'

import WindowBar from './WindowBar'
import { dragHandleClassName } from '../../styles'

const StyledDiv = styled.div`
  border: ${props => props.theme.window.border};
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.window.background};
  color: ${props => props.theme.window.text};
  height: calc(100% - 35px);
  width: 100%;
`

const Window = ({ children, windowName }) => {
  return (
    <Rnd
      default={{
        x: 20,
        y: 20,
        width: 320,
        height: 200,
      }}
      bounds="window"
      dragHandleClassName={dragHandleClassName(windowName)}
    >
      <WindowBar windowName={windowName} />
      <StyledDiv>{children}</StyledDiv>
    </Rnd>
  )
}

export default Window
