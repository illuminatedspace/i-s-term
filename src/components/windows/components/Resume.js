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
      <StyledLink href="/LizPhillips_Resume 2019.11.20.pdf" target="_blank">
        Download the Resume
      </StyledLink>
    </PaddedWindowDiv>
  </Window>
)

export default Resume
