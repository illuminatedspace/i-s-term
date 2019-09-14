import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Terminal from './windows/components/Terminal'
import Icon from './Icon'
import { windowNames } from './windows/_consts'

const StyledDiv = styled.div`
  font-family: ${props => props.theme.fontFamily};
`

const Main = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { glob: "components/windows/components/*" } }
      ) {
        nodes {
          name
          relativePath
          sourceInstanceName
        }
      }
    }
  `)

  const isWindowLaunched = windowName =>
    windows.some(({ name }) => name === windowName)

  const createLaunchWindow = windowName => async () => {
    if (!isWindowLaunched(windowName)) {
      const { relativePath } = queryData.allFile.nodes
        .filter(node => node.name === windowName)
        .pop()

      // Chop off the word 'components' from the realtivePath.
      const componentModule = await import('.' + relativePath.slice(10))

      const component = componentModule.default

      setWindows([...windows, component])
    }
  }

  const makeWindowActive = windowName => {
    const activeWindow = windows.find(window => window.name === windowName)
    const windowsWithActiveAsLast = windows
      .filter(window => window.name !== windowName)
      .concat([activeWindow])

    setWindows(windowsWithActiveAsLast)
  }

  const [windows, setWindows] = useState([Terminal])

  return (
    <StyledDiv>
      <Icon
        windowName={windowNames.About}
        createLaunchWindow={createLaunchWindow}
      />
      <Icon
        windowName={windowNames.Projects}
        createLaunchWindow={createLaunchWindow}
      />
      <Icon
        windowName={windowNames.Contact}
        createLaunchWindow={createLaunchWindow}
      />
      {windows.map(Window => (
        <Window
          key={Window.name}
          makeWindowActive={makeWindowActive}
          createLaunchWindow={createLaunchWindow}
        />
      ))}
    </StyledDiv>
  )
}

export default Main
