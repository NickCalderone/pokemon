import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NavBar()
{
  return (
    <Nav>
      <NavInner>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/favorites">Favorites</Link>
      </NavInner>
    </Nav>
  )
}

let Nav = styled.nav`
  padding: 10px;
  background-color: #424242;
  opacity: 0.8;

`

let NavInner = styled.div`
  display: flex;
  max-width: 1010px;
  margin: 0 auto;
`
