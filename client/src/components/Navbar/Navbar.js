import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Content from '../shared/content'
import Search from '../../features/search/Search';

export default function NavBar({ children })
{

  return (
    <Nav>
      <Content>
        <NavInner>
          {children} 
        </NavInner>
      </Content>
    </Nav>
  )
}

let Nav = styled.nav`
  background-color: var(--charcoal);
  padding-left: 40px;
  padding-right: 40px;
  border-top: 2px solid var(--charcoal-border);
  border-bottom: 2px solid var(--charcoal-border);
`

let NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
