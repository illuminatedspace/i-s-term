import React from 'react'
import { Rnd } from 'react-rnd'
import styled from 'styled-components'

import WindowBar from './WindowBar'
import { dragHandleClassName } from '../../styles'

const createStyledDiv = shouldScroll =>
  shouldScroll ? ScrollingStyledDiv : StyledDiv

const StyledDiv = styled.div`
  border: ${props => props.theme.window.border};
  background-color: ${props => props.theme.window.background};
  color: ${props => props.theme.window.text};
  height: calc(100% - 35px);
  width: 100%;
`

const ScrollingStyledDiv = styled(StyledDiv)`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: ${props => props.theme.window.bar};
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.window.bar};
    border-left: 1px solid ${props => props.theme.window.bar};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.accent.secondary};
  }
`

const WindowContent = ({ children, windowName, shouldScroll }) => {
  const DivComponent = createStyledDiv(shouldScroll)
  return (
    <>
      <WindowBar windowName="hello" />
      <DivComponent>{children}</DivComponent>
    </>
  )
}

const defaultStartingPosition = {
  x: 250,
  y: 100,
  width: 500,
  height: 500,
}

const DraggableWindow = ({
  startingPosition = defaultStartingPosition,
  ...props
}) => (
  <Rnd
    default={{ ...startingPosition }}
    bounds="window"
    dragHandleClassName={dragHandleClassName(props.windowName)}
    onMouseDown={() => {
      props.makeWindowActive(props.windowName)
    }}
    aria-label={`${props.windowName} window`}
    aria-live="polite"
  >
    <WindowContent {...props} />
  </Rnd>
)

export default DraggableWindow
