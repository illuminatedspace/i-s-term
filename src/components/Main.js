import React from 'react'
import styled from 'styled-components'

import CommandLineIo from './CommandLineIo'
import Window from './Window/Window'

const StyledDiv = styled.div`
  font-family: ${props => props.theme.fontFamily};
`

const Main = () => {
  return (
    <StyledDiv>
      <CommandLineIo />
      <Window windowName="test">Hello</Window>
    </StyledDiv>
  )
}

export default Main
