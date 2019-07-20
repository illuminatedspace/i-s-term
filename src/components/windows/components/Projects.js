import React from 'react'
import Window from '../../Window/Window'
import { windowNames } from '../_consts'

const Projects = ({ makeWindowActive }) => (
  <Window makeWindowActive={makeWindowActive} windowName={windowNames.projects}>
    {'These are projects.'}
  </Window>
)

export default Projects
