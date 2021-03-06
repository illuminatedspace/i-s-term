import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useStayScrolled from 'react-stay-scrolled'

import Layout from '../../../layout'

const TextDisplayDiv = styled.div`
  grid-row-start: display;
  grid-row-end: span 1;
  padding: 1em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: ${props => props.theme.window.bar};
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.window.bar};
    border-left: 1px solid ${props => props.theme.window.bar};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.accent.secondary};
  }
`

/**
 * @typedef TerminalTextNode
 * @param {string} type enumerated from 'command' or 'response'
 * @param {string} string array of text. Each item is meant to be rendered
 * on a seperate line
 */

const TextDisplay = ({ lines }) => {
  const textDisplayDivRef = useRef(null)
  const { stayScrolled } = useStayScrolled(textDisplayDivRef)

  useLayoutEffect(() => {
    stayScrolled()
  }, [lines.length])

  return <TextDisplayDiv ref={textDisplayDivRef}>{lines}</TextDisplayDiv>
}

Layout.propTypes = {
  lines: PropTypes.array,
}

export default TextDisplay
