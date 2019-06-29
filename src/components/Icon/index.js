import React, { useState } from 'react'
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
/*
TODO:
- [x] convert to hooks
- [] Make the import work
- [] add graphql satic query
- [] profit 🎉
*/

const Icon = ({ onDoubleClick, iconImage, iconImageHover, windowName }) => {
  const [currentIconImage, setIconImage] = useState([iconImage])

  const getOnMouseOver = hoverImage => () => setIconImage(hoverImage)

  const getOnMouseOut = inActiveImage => () => setIconImage(inActiveImage)

  return (
    <IconDiv onDoubleClick={() => onDoubleClick(windowName)}>
      <IconImg
        src={currentIconImage}
        onMouseOver={getOnMouseOver(iconImageHover)}
        onMouseOut={getOnMouseOut(iconImage)}
      />
      <IconTitleDiv>{windowName}</IconTitleDiv>
    </IconDiv>
  )
}

/*
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

  getIconFileName = (iconName, iconState) => `${iconName}-${iconState}.png`

  // crystal-ball-active
  getIcons = async windowName => {
    // const iconName = windowToIconMap[windowName]
    // const [active, inactive] = await Promise.all([
    //   import(this.getIconFileName(iconName, iconStates.active)),
    //   import(this.getIconFileName(iconName, iconStates.inactive)),
    // ])
    // return {
    //   active: ,
    //   inactive: ,
    // }
  }

  getIcon = async path => import('../../images/crystal-ball-active.png')

  render() {
    const { iconImage, iconImageHover, windowName, onDoubleClick } = this.props

    const hoverImage = this.getIcon()
    console.log('HITMONCHAN', hoverImage)

    return (
      <IconDiv onDoubleClick={() => onDoubleClick(windowName)}>
        <IconImg
          src={this.state.iconImage}
          onMouseOver={this.getOnMouseOver(iconImageHover)}
          onMouseOut={this.getOnMouseOut(iconImage)}
        />
        <IconTitleDiv>{windowName}</IconTitleDiv>
      </IconDiv>
    )
  }
}
*/

export default Icon
