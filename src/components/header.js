import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
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

const Header = ({ siteTitle, menuLinks }) => (
  <Nav>
    {menuLinks.map(({ link, name }) => (
      <NavLi key={name}>
        <StyledLink to={link}>{name}</StyledLink>
      </NavLi>
    ))}
  </Nav>
)

export default Header
