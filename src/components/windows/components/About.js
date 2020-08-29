import React from 'react'
import styled from 'styled-components'

import DragabbleWindow from '../../DraggableWindow/DraggableWindow'
import { windowNames } from '../_consts'
import { StyledLink, PaddedWindowDiv } from '../../styled'
import aboutMePic from '../../../images/aboutMePic.jpg'

const StyledImg = styled.img`
  width: 200px;
  text-align: center;
  float: left;
  margin-right: 1em;
  margin-bottom: 0;
`

const ContactLi = styled.li`
  margin-bottom: 0;
`

const ContactUl = styled.ul`
  list-style: none;
`

const About = ({ makeWindowActive }) => (
  <DragabbleWindow
    makeWindowActive={makeWindowActive}
    windowName={windowNames.About}
    shouldScroll={true}
  >
    <PaddedWindowDiv>
      <StyledImg
        src={aboutMePic}
        alt="A fierce picture of me with purple lipstick"
      />
      <p>
        Liz was born and raised in Las Vegas, NV as the oldest but not at all
        tallest sibling. She currently resides in the bustling metropolis of New
        York City, NY. In April 2017 she graduated from the Grace Hopper Program
        at Fullstack Academy with a certificate in Full Stack Engineering, which
        keeps her M.F.A. in Theater-Design from Temple University, and her
        B.F.A. in Production Design from SCAD warm. She enjoys strong coffee,
        old literature, acrylic paints, fiction of the science variety, and warm
        sunny days.
      </p>
      <p>
        Her video game knowledge is extensive, and on a good weekend you can
        find her skating in the sun.
      </p>
      <p>
        She does not enjoy snow or talking about herself in the third person but
        both can be tolerated.
      </p>
      <p>Connect with her on:</p>
      <ContactUl>
        <ContactLi>
          LinkedIn -{' '}
          <StyledLink href="https://www.linkedin.com/in/lizkristinaphillips">
            in/lizkristinaphillips
          </StyledLink>
        </ContactLi>
        <ContactLi>
          Twitter -{' '}
          <StyledLink href="https://twitter.com/lizcodes">@LizCodes</StyledLink>
        </ContactLi>
        <ContactLi>
          GitHub -{' '}
          <StyledLink href="https://github.com/illuminatedspace">
            IlluminatedSpace
          </StyledLink>
        </ContactLi>
        <ContactLi>
          Twitch -{' '}
          <StyledLink href="https://www.twitch.tv/illuminatedspace">
            IlluminatedSpace
          </StyledLink>
        </ContactLi>
      </ContactUl>
    </PaddedWindowDiv>
  </DragabbleWindow>
)

export default About
