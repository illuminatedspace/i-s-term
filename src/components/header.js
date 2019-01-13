import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLi = styled.li`
  list-style-type: none;
  display: inline;
  margin: 5px;
`

const Header = ({ siteTitle, menuLinks }) => (
  <nav>
    {menuLinks.map(({ link, name }) => (
      <NavLi key={name}>
        <Link to={link}>{name}</Link>
      </NavLi>
    ))}
  </nav>
)

export default Header
