import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { iconStates } from '../windows/_consts'

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
- [xx] Make the import work
- [] add graphql satic query
- [] profit 🎉
*/

const Icon = ({ onDoubleClick, windowName }) => {
  const [currentIconImage, setIconImage] = useState()

  const getIcon = async (windowName, iconState) => {
    const { default: icon } = await import(
      `../../images/${windowName}-${iconState}.png`
    )

    if (currentIconImage !== icon) {
      setIconImage(icon)
    }
  }

  const lowerCaseWindowName = windowName.toLowerCase()

  useEffect(() => {
    getIcon(lowerCaseWindowName, iconStates.inactive)
  }, [])

  return (
    <IconDiv onDoubleClick={() => onDoubleClick(windowName)}>
      <IconImg
        src={currentIconImage}
        onMouseOver={() => getIcon(lowerCaseWindowName, iconStates.active)}
        onMouseOut={() => getIcon(lowerCaseWindowName, iconStates.inactive)}
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
