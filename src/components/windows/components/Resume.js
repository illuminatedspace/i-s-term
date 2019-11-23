import React from 'react'
import Window from '../../Window/Window'
import { windowNames } from '../_consts'
import { StyledLink, PaddedWindowDiv } from '../../styled'

const Resume = ({ makeWindowActive }) => (
  <Window
    makeWindowActive={makeWindowActive}
    windowName={windowNames.Resume}
    shouldScroll={true}
  >
    <PaddedWindowDiv>
      <StyledLink href="" target="blank" rel="noopener noreferrer">
        Download Resume
      </StyledLink>
    </PaddedWindowDiv>
  </Window>
)

export default Resume
