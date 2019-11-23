import React from 'react'
import styled from 'styled-components'

import Window from '../../Window/Window'
import { windowNames } from '../_consts'

const AboutDiv = styled.div`
  padding: 1em;
`

const About = ({ makeWindowActive }) => (
  <Window
    makeWindowActive={makeWindowActive}
    windowName={windowNames.About}
    shouldScroll={true}
  >
    <AboutDiv>
      <p>
        Liz was born and raised in Las Vegas, NV as the oldest but not at all
        tallest sibling. She currently resides in the bustling metropolis of New
        York City, NY. In May of 2016 she graduated from Temple University with
        her M.F.A., which keeps her B.F.A. in Production Design from SCAD warm.
        She enjoys strong coffee, old literature, acrylic paints, fiction of the
        science variety, and rainy days.
      </p>
      <p>
        Her video game knowledge is extensive, and on a good weekend you can
        find her reading programming books in the sun.
      </p>
      <p>
        She does not enjoy snow or talking about herself in the third person but
        both can be tolerated.
      </p>
      <p>
        Connect with her on: LinkedIn - /lizkristinaphillips Twitter -
        @ampsvoltswatts
      </p>
    </AboutDiv>
  </Window>
)

export default About
