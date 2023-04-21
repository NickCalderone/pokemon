import React from "react";
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Collection from './components/Collection'
import './App.css';

function App()
{

  const [data, setData] = React.useState([]);

  React.useEffect(() =>
  {
    let ignore = false;
    fetch("/api/pokemon-links")
      .then((res) => res.json())
      .then((data) => setData(data.results.results));

    return () =>
    {
      ignore = true;
    }
  }, []);

	let myCollection = data.map((pokemon) =>
	{
		return (

			<div>
				<p>Name: {pokemon.name}</p>
				<p>Height: {pokemon.url}</p>
			</div>
		)
	})

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      Working
      {myCollection}
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