import React from 'react'
import styled from 'styled-components'

// list all commands in a formatted way
// format all commands and responses with different colors
// every "text block" needs to have new lines and margin bottom

const getMarginBottomDiv = textType => styled.div`
  margin-bottom: 1em;
  // color: ${props => props.theme.text[textType]};
`

const MarginBottomDiv = styled.div`
  margin-bottom: 1em;
`

const getDivByTextNodeType = textNodeType => {
  const textType = textNodeType === 'command' ? 'quadentiary' : 'secondary'

  return getMarginBottomDiv(textType)
}

const NoMarginBottomParagraph = styled.p`
  margin-bottom: 0;
`

export const TextNode = ({ text }) => (
  <NoMarginBottomParagraph>{text}</NoMarginBottomParagraph>
)

export const TextNodeCollection = ({ children }) => (
  <MarginBottomDiv>{children}</MarginBottomDiv>
)
