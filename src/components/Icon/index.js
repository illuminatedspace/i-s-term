import React from 'react'
import styled from 'styled-components'

const IconDiv = styled.div`
  // background-image: url('/src/images/crystal-ball-inactive.png');
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
