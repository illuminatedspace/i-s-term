import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #a89bf7;
`

const NavLi = styled.li`
  list-style-type: none;
  display: inline;
  margin: 5px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
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
