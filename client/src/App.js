import { React, useState } from "react";
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import Pokemon from './pages/Pokemon'
import styled from "styled-components";
import container_bg from './assets/container_bg.png';
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

  return (
    <>
      <Navbar />
      <Content bg={container_bg}>
      <Routes>
        <Route index element={<Home favorites={favorites} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favorites" element={<Favorites favorites={favorites}/>}></Route>
        <Route path="/pokemon/:pokemon" element={<Pokemon favorites={favorites} handleFavorites={handleFavorites} />}></Route>
      </Routes>
      </Content>
    </>
  );
}

let Content = styled.div`
  background: #fff url(${(props=> props.bg)});
`



export default App;
