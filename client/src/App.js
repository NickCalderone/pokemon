import { React, useState } from "react";
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Pokemon from './pages/Pokemon'
import './App.css';

function App()
{

  let [favorites, setFavorites] = useState([]);

  function handleFavorites(value)
  {
    if (!favorites.includes(value)){
      setFavorites([...favorites, value])
    } else setFavorites(favorites.filter(poke => poke !== value))
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home favorites={favorites} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pokemon/:pokemon" element={<Pokemon favorites={favorites} handleFavorites={handleFavorites} />}></Route>
      </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>{!data ? "Loading..." : data[0].name}</p>

    //   </header>
    // </div>
  );
}


export default App;
