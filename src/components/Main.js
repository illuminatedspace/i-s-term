import React from 'react'
import styled from 'styled-components'

import CommandLineIo from './CommandLineIo'
import Window from './Window/Window'
import crystalBallInactive from '../images/crystal-ball-inactive.png'
import crystalBallActive from '../images/crystal-ball-active.png'
import Icon from './Icon'

const StyledDiv = styled.div`
  font-family: ${props => props.theme.fontFamily};
`

const Main = () => {
  return (
    <StyledDiv>
      <Icon
        iconImage={crystalBallInactive}
        iconImageHover={crystalBallActive}
        iconTitle="About"
      />
      <CommandLineIo />
    </StyledDiv>
  )
}

export default Main
