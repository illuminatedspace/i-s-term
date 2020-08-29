import React from 'react'
import DraggableWindow from '../../DraggableWindow/DraggableWindow'
import { windowNames } from '../_consts'

const Projects = ({ makeWindowActive }) => (
  <DraggableWindow
    makeWindowActive={makeWindowActive}
    windowName={windowNames.Projects}
  >
    {'These are projects.'}
  </DraggableWindow>
)

export default Projects
