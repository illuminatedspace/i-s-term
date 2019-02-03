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
  padding: 0 1em;
  border: 0.1em solid rgba(0, 0, 0, 0);

  :hover {
    background: ${props => props.theme.background};
    border: 0.1em inset ${props => props.theme.accent.secondary};

    a {
      color: ${props => props.theme.highlight};
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.background};

  // This isn't working
  :active {
    color: #fff;
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
