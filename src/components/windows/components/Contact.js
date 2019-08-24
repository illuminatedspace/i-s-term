import React from 'react'
import Window from '../../Window/Window'
import { windowNames } from '../_consts'

const Contact = ({ makeWindowActive }) => (
  <Window makeWindowActive={makeWindowActive} windowName={windowNames.Contact}>
    {'Contact me: liz@liz.liz'}
  </Window>
)

export default Contact
