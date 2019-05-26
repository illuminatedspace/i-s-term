import React from 'react'
import styled from 'styled-components'

import CommandLineIo from './CommandLineIo'
import Window from './Window/Window'
import crystalBallInactive from '../images/crystal-ball-inactive.png'
import Icon from './Icon'

const StyledDiv = styled.div`
  font-family: ${props => props.theme.fontFamily};
`

const Main = () => {
  return (
    <StyledDiv>
      <Icon iconImage={crystalBallInactive} />
      <CommandLineIo />
      <Window windowName="test">Hello</Window>
    </StyledDiv>
  )
}

export default Main
