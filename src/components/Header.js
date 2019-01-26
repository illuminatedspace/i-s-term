import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Nav = styled.nav`
  background-color: ${props => props.theme.accent.primary};
`

const NavLi = styled.li`
  list-style-type: none;
  display: inline;
  margin: 5px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.background};

  :active {
    color: #fff;
  }

  :hover {
    color: ${props => props.theme.highlight};
  }
`

const Header = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MenuLinksQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { menuLinks },
      },
    }) => (
      <Nav>
        {menuLinks.map(({ link, name }) => (
          <NavLi key={name}>
            <StyledLink to={link}>{name}</StyledLink>
          </NavLi>
        ))}
      </Nav>
    )}
  />
)

export default Header
