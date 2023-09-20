import styled from "styled-components"
import { NavLink } from "react-router-dom"

export default function NavLinks(){
	return (
		<Links>
			<LinkStyled to="/">Home</LinkStyled>
			<LinkStyled to="/about">About</LinkStyled>
			<LinkStyled to="/favorites">Favorites</LinkStyled>
		</Links>
	)
}

let Links = styled.div`
  display: flex;
`

let LinkStyled = styled(NavLink)`
  padding: 5px 30px;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;

  &.active {
    background-color: white;
    color: var(--charcoal);
  }
`