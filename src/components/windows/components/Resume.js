import React from 'react'
import DraggableWindow from '../../DraggableWindow/DraggableWindow'
import { windowNames } from '../_consts'
import { StyledLink, PaddedWindowDiv } from '../../styled'

const Resume = ({ makeWindowActive }) => (
  <DraggableWindow
    makeWindowActive={makeWindowActive}
    windowName={windowNames.Resume}
    shouldScroll={true}
  >
    <PaddedWindowDiv>
      <StyledLink href="/LizPhillips_Resume 2019.11.20.pdf" target="_blank">
        Download the Resume
      </StyledLink>
    </PaddedWindowDiv>
  </DraggableWindow>
)

export default Resume
