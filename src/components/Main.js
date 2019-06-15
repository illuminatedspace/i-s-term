import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import CommandLineIo from './CommandLineIo'
import crystalBallInactive from '../images/crystal-ball-inactive.png'
import crystalBallActive from '../images/crystal-ball-active.png'
import Icon from './Icon'

const StyledDiv = styled.div`
  font-family: ${props => props.theme.fontFamily};
`

// make static query
// log component names
const withStaticQuery = WrappedComponent => props => (
  <StaticQuery
    query={graphql`
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
    `}
    render={queryData => {
      const {
        allFile: { nodes: windows },
      } = queryData
      return (
        <WrappedComponent displayName="hello" windows={windows} {...props} />
      )
    }}
  />
)

class Main extends React.Component {
  state = { windows: [] }

  componentDidMount() {
    this.setState({ windows: [...this.state.windows, CommandLineIo] })
  }

  launchWindow() {
    // TODO: Write this!
  }

  render() {
    console.log('MACHOP', this.props.windows)
    return (
      <StyledDiv>
        <Icon
          iconImage={crystalBallInactive}
          iconImageHover={crystalBallActive}
          iconTitle="About"
        />
        {this.state.windows.map(Window => (
          <Window key={Window.name} />
        ))}
      </StyledDiv>
    )
  }
}

export default withStaticQuery(Main)
