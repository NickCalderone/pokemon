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

  const [data, setData] = React.useState(null);

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

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Collection />
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
