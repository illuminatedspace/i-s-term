import React from 'react'
import { Rnd } from 'react-rnd'
import styled from 'styled-components'

import WindowBar from './WindowBar'
import { dragHandleClassName } from '../../styles'

const StyledDiv = styled.div`
  border: 2px solid ${props => props.theme.accent.primary};
  font-family: ${props => props.theme.fontFamily};
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
