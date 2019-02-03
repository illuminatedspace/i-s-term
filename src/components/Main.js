import React from 'react'
import styled from 'styled-components'
import { Rnd } from 'react-rnd'

import CommandLineIo from './CommandLineIo'
import { purple } from '../styles/colors'
import Header from './Header'
import { dragHandleClassName } from '../styles'

const StyledDiv = styled.div`
  border: 1px solid ${purple.light};
  font-family: ${props => props.theme.fontFamily};
`

const Main = () => {
  return (
    <Rnd
      default={{
        x: 20,
        y: 20,
        width: '80%',
        height: '80%',
      }}
      minWidth={500}
      minHeight={300}
      bounds="window"
      dragHandleClassName={dragHandleClassName}
    >
      <StyledDiv>
        <Header />
        <CommandLineIo />
      </StyledDiv>
    </Rnd>
  )
}

export default Main
