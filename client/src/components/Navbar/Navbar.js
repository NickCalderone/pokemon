import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Content from '../shared/content'
import Fuse from 'fuse.js';
import { useState } from 'react';
import Results from './Results';

export default function NavBar({ pokemonLinks })
{

  // let myBody = document.querySelector("body");

  function handleClick(e)
  {
    setResults([]);
    setSearch("");
  }

  // myBody.addEventListener("click", handleClick);


  let Fuze = new Fuse(pokemonLinks, {
    threshold: 0.0,
    keys: ["name"]
  })

  let [search, setSearch] = useState("");

  let [results, setResults] = useState([]);

  function handleSearch(e)
  {
    setSearch(e.target.value);

    setResults(Fuze.search(e.target.value));
  }

  return (
    <Nav>
      <Content>
        <NavInner>
          <Links>
            <LinkStyled to="/" activeClassName="active">Home</LinkStyled>
            <LinkStyled to="/about" activeClassName="active">About</LinkStyled>
            <LinkStyled to="/favorites" activeClassName="active">Favorites</LinkStyled>
          </Links>
          <SearchWrapper id="search">
            <SearchInput type="search" placeholder="(ex: Pikachu)" value={search} onChange={handleSearch} />
            <div className="test">
              {(!results.length > 0) || <Results results={results} />}
            </div>
          </SearchWrapper>
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

let SearchWrapper = styled.div`
  position: relative;
`

let SearchInput = styled.input`
  width: 200px;
  height: 35px;
  padding-left: 10px;
  border-radius: 5px;
  border: none;
`