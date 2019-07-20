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

const Window = ({ children, windowName }) => (
  <>
    <WindowBar windowName={windowName} />
    <StyledDiv>{children}</StyledDiv>
  </>
)

const DraggableWindow = props => (
  <Rnd
    default={{
      x: 20,
      y: 20,
    }}
    bounds="window"
    dragHandleClassName={dragHandleClassName(props.windowName)}
    onMouseDown={() => {
      props.makeWindowActive(props.windowName)
    }}
  >
    <Window {...props} />
  </Rnd>
)

export default DraggableWindow
