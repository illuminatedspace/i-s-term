import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useStayScrolled from 'react-stay-scrolled'

import Layout from '../layout'

const MarginBottomDiv = styled.div`
  margin-bottom: 1em;
`

const NoMarginBottomParagraph = styled.p`
  margin-bottom: 0;
`

const TextDisplayDiv = styled.div`
  padding: 1em;
  overflow-y: scroll;
  height: 10em;
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
 * Renders blocks of texts from an array of string arrays
 */
const breakTextOnNewLines = linesArray =>
  linesArray.map((stringArray, index) => {
    const textBlockArray = stringArray.map((string, index) => (
      <NoMarginBottomParagraph key={index}>{string}</NoMarginBottomParagraph>
    ))

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
