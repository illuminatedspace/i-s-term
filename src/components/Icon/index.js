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

const Icon = ({ iconImage }) => {
  return (
    <IconDiv>
      <img src={iconImage} />
    </IconDiv>
  )
}

// TODO:
// - double click behavior
// - drag and drop behavior?
// - title underneath
// - hover state

export default Icon
