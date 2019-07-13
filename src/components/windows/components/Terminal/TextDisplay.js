import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useStayScrolled from 'react-stay-scrolled'

import Layout from '../../../layout'

const getMarginBottomDiv = textType => styled.div`
  margin-bottom: 1em;
  color: ${props => props.theme.text[textType]};
`

const getDivByTextNodeType = textNodeType => {
  const textType = textNodeType === 'command' ? 'quadentiary' : 'secondary'

  return getMarginBottomDiv(textType)
}

const NoMarginBottomParagraph = styled.p`
  margin-bottom: 0;
`

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

/**
 * Renders blocks of texts from an array of string arrays
 * @param {TerminalTextNode[]} linesArray
 */
const breakTextOnNewLines = linesArray =>
  linesArray.map(({ type, stringArray }, index) => {
    const textBlockArray = stringArray.map((string, index) => (
      <NoMarginBottomParagraph key={index}>{string}</NoMarginBottomParagraph>
    ))

    const MarginBottomDiv = getDivByTextNodeType(type)

    return <MarginBottomDiv key={index}>{textBlockArray}</MarginBottomDiv>
  })

const TextDisplay = ({ lines }) => {
  const textDisplayDivRef = useRef(null)
  const { stayScrolled } = useStayScrolled(textDisplayDivRef)

  useLayoutEffect(() => {
    stayScrolled()
  }, [lines])

  if (lines) {
    return (
      <TextDisplayDiv ref={textDisplayDivRef}>
        <h1>Hi Twitch!</h1>
        {breakTextOnNewLines(lines)}
      </TextDisplayDiv>
    )
  }
}

Layout.propTypes = {
  lines: PropTypes.array.isRequired,
}

export default TextDisplay
