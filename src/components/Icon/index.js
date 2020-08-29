import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { iconStates } from '../windows/_consts'

const IconDiv = styled.div`
  display: grid;
  width: 100px;
  margin-top: 0.25em;
`

const IconImg = styled.img`
  margin-bottom: 0;
`

const IconTitleDiv = styled.div`
  background-color: ${props => props.theme.window.background};
  color: ${props => props.theme.text.quadentiary};
  font-size: ${props => props.theme.icon.fontSize};
  text-align: center;
  padding: 0.1em 0.5em;
  font-weight: bold;
`

const Icon = ({ createLaunchWindow, windowName }) => {
  const [currentIconImage, setIconImage] = useState()

  const getIcon = async (windowName, iconState) => {
    const { default: icon } = await import(
      `../../images/${windowName.toLowerCase()}-${iconState}.png`
    )

    if (currentIconImage !== icon) {
      setIconImage(icon)
    }
  }

  useEffect(() => {
    getIcon(windowName, iconStates.inactive)
  }, [])

  return (
    <IconDiv onDoubleClick={createLaunchWindow(windowName)}>
      <IconImg
        src={currentIconImage}
        onMouseOver={() => getIcon(windowName, iconStates.active)}
        onMouseOut={() => getIcon(windowName, iconStates.inactive)}
      />
      <IconTitleDiv>{windowName}</IconTitleDiv>
    </IconDiv>
  )
}

export default Icon
