import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { background, purple, yellow } from '../styles/colors'

const Nav = styled.nav`
  background-color: ${purple.light};
`

const NavLi = styled.li`
  list-style-type: none;
  display: inline;
  margin: 5px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${background};

  :active {
    color: #fff;
  }

  :hover {
    color: ${yellow.medium};
  }
`

const HeaderWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
      </>
    )}
  />
)

const Header = ({ siteTitle, menuLinks }) => (
  <Nav>
    {menuLinks.map(({ link, name }) => (
      <NavLi key={name}>
        <StyledLink to={link}>{name}</StyledLink>
      </NavLi>
    ))}
  </Nav>
)

export default HeaderWrapper
