import React from 'react'
import styled from 'styled-components'

const IconDiv = styled.div`
  display: grid;
  width: 100px;
`

const IconImg = styled.img`
  margin-bottom: 0;
`

const IconTitleDiv = styled.div`
  background-color: ${props => props.theme.window.background};
  color: ${props => props.theme.text.quadentiary};
  font-size: ${props => props.theme.icon.fontSize}
  text-align: center;
  padding: .1em .5em 
  font-weight: bold;
`

class Icon extends React.Component {
  state = {
    iconImage: this.props.iconImage,
  }

  getOnMouseOver = hoverImage => () => {
    this.setState({ iconImage: hoverImage })
  }

  getOnMouseOut = inActiveImage => () => {
    this.setState({ iconImage: inActiveImage })
  }

  render() {
    const { iconImage, iconImageHover, iconTitle } = this.props

    return (
      <IconDiv>
        <IconImg
          src={this.state.iconImage}
          onMouseOver={this.getOnMouseOver(iconImageHover)}
          onMouseOut={this.getOnMouseOver(iconImage)}
        />
        <IconTitleDiv>{iconTitle}</IconTitleDiv>
      </IconDiv>
    )
  }
}

// TODO:
// - [x] title underneath
// - [x] hover state
// - [] double click behavior
// - [] drag and drop behavior?

export default Icon
