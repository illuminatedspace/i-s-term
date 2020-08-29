import React, { useState } from 'react'
import styled from 'styled-components'

import Terminal from './windows/components/Terminal'
import About from './windows/components/About'
import Contact from './windows/components/Contact'
import Resume from './windows/components/Resume'
import Icon from './Icon'
import { windowNames } from './windows/_consts'

const StyledDiv = styled.div`
  font-family: ${props => props.theme.fontFamily};
`

const windowNameToComponent = {
  [windowNames.Terminal]: Terminal,
  [windowNames.About]: About,
  [windowNames.Contact]: Contact,
  [windowNames.Resume]: Resume,
}

const Main = () => {
  const isWindowLaunched = windowName =>
    windows.some(name => name === windowName)

  const createLaunchWindow = windowName => () => {
    if (!isWindowLaunched(windowName)) {
      setWindows([...windows, windowName])
    }
  }

  const makeWindowActive = windowName => {
    const filteredWindows = windows.filter(
      desktopWindow => desktopWindow !== windowName
    )
    const windowsWithActiveAsLast = filteredWindows.concat([windowName])

    setWindows(windowsWithActiveAsLast)
  }

  const [windows, setWindows] = useState([windowNames.Terminal])

  return (
    <StyledDiv>
      <Icon
        windowName={windowNames.About}
        createLaunchWindow={createLaunchWindow}
      />
      <Icon
        windowName={windowNames.Resume}
        createLaunchWindow={createLaunchWindow}
      />
      <Icon
        windowName={windowNames.Contact}
        createLaunchWindow={createLaunchWindow}
      />
      {windows.map(windowName => {
        const WindowComponent = windowNameToComponent[windowName]
        return (
          <WindowComponent
            key={windowName}
            makeWindowActive={makeWindowActive}
            createLaunchWindow={createLaunchWindow}
          />
        )
      })}
    </StyledDiv>
  )
}

export default Main
