import React from 'react'
import styled from 'styled-components'

export const textNodeType = {
  command: 'command',
  response: 'response',
}

const getMarginBottomDiv = textType => styled.div`
  margin-bottom: 1em;
  color: ${props => props.theme.text[textType]};
`

const getTextTypeByNodeType = textNodeType => {
  const textType = textNodeType === 'command' ? 'quadentiary' : 'secondary'

  return getMarginBottomDiv(textType)
}

const NoMarginBottomParagraph = styled.p`
  margin-bottom: 0;
`

export const TextNode = ({ children }) => (
  <NoMarginBottomParagraph>{children}</NoMarginBottomParagraph>
)

export const TextNodeCollection = ({ children, type }) => {
  const StyledDiv = getTextTypeByNodeType(type)

  return <StyledDiv>{children}</StyledDiv>
}
