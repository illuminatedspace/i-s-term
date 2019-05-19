import React from 'react'
import styled from 'styled-components'

import { dragHandleClassName } from '../../styles'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.window.bar};
  padding: 0.25em 0 0.25em 1em;
  font-weight: bold;
  letter-spacing: 0.12em;
  color: ${props => props.theme.window.barText};
  height: ${props => props.theme.window.barHeight};
`

const WindowBar = ({ windowName }) => {
  return (
    <StyledDiv className={dragHandleClassName(windowName)}>
      {windowName.toUpperCase()}
    </StyledDiv>
  )
}

export default WindowBar
