import React from 'react'
import Window from '../../Window/Window'
import { windowNames } from '../_consts'

const About = ({ makeWindowActive }) => (
  <Window makeWindowActive={makeWindowActive} windowName={windowNames.about}>
    {"Hi, I'm Liz"}
  </Window>
)

export default About
