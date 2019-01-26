import React from 'react'
import styled from 'styled-components'

import CommandLine from './CommandLine'
import { purple } from '../styles/colors'
import Header from './Header'

const StyledDiv = styled.div`
  border: 1px solid ${purple.light};
  // margin: 0;
  // padding: 0;
`

const Main = () => {
  return (
    <StyledDiv>
      <Header />
      <CommandLine />
    </StyledDiv>
  )
}

export default Main
