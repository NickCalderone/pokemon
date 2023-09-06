import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Content from './shared/content'
import Fuse from 'fuse.js';
import { useState } from 'react';

export default function NavBar({ pokemonLinks })
{

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
    console.log(results)
  }

  let searchResults = results.map((result, index) => <p style={{ backgroundColor: "white", color: "black", padding: "10px" }} key={index}>{result.item.name}</p>);


  return (
    <Nav>
      <Content>
        <NavInner>
          <Links>
            <LinkStyled to="/" activeClassName="active">Home</LinkStyled>
            <LinkStyled to="/about" activeClassName="active">About</LinkStyled>
            <LinkStyled to="/favorites" activeClassName="active">Favorites</LinkStyled>
          </Links>
          <SearchWrapper>
            <SearchInput type="search" placeholder="Pikachu" value={search} onChange={handleSearch} />
            <p style={{ color: "white" }}>{search}</p>
            <div>
              {searchResults}
            </div>
          </SearchWrapper>
        </NavInner>
      </Content>
    </Nav>
  )
}

let Nav = styled.nav`
  background-color: #424242;
  padding-left: 40px;
  padding-right: 40px;
  opacity: 0.8;
  border-top: 2px solid var(--charcoal);
  border-bottom: 2px solid var(--charcoal);
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
`

let SearchInput = styled.input`
  width: 200px;
  height: 35px;
  padding-left: 10px;
  border-radius: 5px;
  border: none;
`

let SearchButton = styled.button`
  height: 35px;
  color: var(--charcoal);); 
  border: none; 
  border-radius: 5px; 
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
`