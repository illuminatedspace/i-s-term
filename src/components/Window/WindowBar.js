import React from 'react'
import styled from 'styled-components'

import { dragHandleClassName } from '../../styles'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.accent.primary};
  padding: 0.25em 0 0.25em 1em;
  font-weight: bold;
  letter-spacing: 0.12em;
`

const WindowBar = ({ windowName }) => {
  return (
    <StyledDiv className={dragHandleClassName(windowName)}>
      {windowName.toUpperCase()}
    </StyledDiv>
  )
}

export default WindowBar
