import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import CommandLineIo from './CommandLineIo'
import aboutInactive from '../images/about-inactive.png'
import aboutActive from '../images/about-active.png'
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

  const openWindow = async key => {
    const { relativePath } = queryData.allFile.nodes
      .filter(node => node.name === key)
      .pop()

    // Chop off the word 'components' from the realtivePath.
    const componentModule = await import('.' + relativePath.slice(10))

    const component = componentModule.default

    setWindows([...windows, component])
  }

  const [windows, setWindows] = useState([CommandLineIo])

  return (
    <StyledDiv>
      <Icon
        iconImage={aboutInactive}
        iconImageHover={aboutActive}
        windowName={windowNames.about}
        onDoubleClick={windowName => {
          openWindow(windowName)
        }}
      />
      {windows.map(Window => (
        <Window key={Window.name} />
      ))}
    </StyledDiv>
  )
}

export default Main
