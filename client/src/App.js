import { React, useState } from "react";
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Pokemon from './pages/Pokemon'
import styled from "styled-components";
import container_bg from './assets/container_bg.png';
import { useFetchPokemon } from './utility/utility';
import './App.css';

function App()
{
  let [favorites, setFavorites] = useState([]);

  function handleFavorites(value)
  {
    if (!favorites.includes(value))
    {
      setFavorites([...favorites, value])
    } else setFavorites(favorites.filter(poke => poke !== value))
  }
  

  // loading
  let [pokemonLinksLoading, setPokemonLinksLoading] = useState(true);
  // data
  let [pokemonLinks, setPokemonLinks] = useState([]);
  useFetchPokemon(setPokemonLinksLoading, setPokemonLinks);

  return (
    <>
      <Wrapper bg={container_bg}>
      <Navbar pokemonLinks={pokemonLinks} />
      <Main>
      <Routes>
        <Route index element={<Home loading={pokemonLinksLoading} pokemonLinks={pokemonLinks} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favorites" element={<Favorites favorites={favorites} handleFavorites={handleFavorites}/>}></Route>
        <Route path="/pokemon/:pokemon" element={<Pokemon favorites={favorites} handleFavorites={handleFavorites} />}></Route>
      </Routes>
      </Main>
      <Footer />
      </Wrapper>
    </>
  );
}

let Wrapper = styled.div`
  background: #fff url(${(props=> props.bg)});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

let Main = styled.main`
  padding: 40px;
  flex-grow: 1;
`

export default App;
