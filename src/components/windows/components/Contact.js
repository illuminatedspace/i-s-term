import React from 'react'
import Window from '../../Window/Window'
import { windowNames } from '../_consts'
import { StyledLink, PaddedWindowDiv } from '../../styled'

const Contact = ({ makeWindowActive }) => (
  <Window
    makeWindowActive={makeWindowActive}
    windowName={windowNames.Contact}
    shouldScroll={true}
  >
    <PaddedWindowDiv>
      <p>
        The best way to reach me is through my email address:
        LizKristinaPhillips [at] gmail [dot] com.
      </p>

      <p>
        Click the link below to start a new email to me in your default mail
        client if you have it enabled on your device.
      </p>

      <StyledLink
        href="mailto:lizkristinaphillips@gmail.com"
        target="blank"
        rel="noopener noreferrer"
      >
        Send Me an Email
      </StyledLink>
    </PaddedWindowDiv>
  </Window>
)

export default Contact
