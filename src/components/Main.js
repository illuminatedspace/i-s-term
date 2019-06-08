import React from 'react'
import styled from 'styled-components'

import CommandLineIo from './CommandLineIo'
import crystalBallInactive from '../images/crystal-ball-inactive.png'
import crystalBallActive from '../images/crystal-ball-active.png'
import Icon from './Icon'

const StyledDiv = styled.div`
  font-family: ${props => props.theme.fontFamily};
`

class Main extends React.Component {
  state = { windows: [] }

  componentDidMount() {
    this.setState({ windows: [...this.state.windows, CommandLineIo] })
  }

  render() {
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

export default Main
