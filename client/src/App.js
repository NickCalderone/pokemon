import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    let ignore = false;
    fetch("/test")
      .then((res) => res.json())
      .then((data) => setData(data.results));

      
      return () => {
        ignore = true;
      }
  }, []);

      // console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data[0].name}</p>
      </header>
    </div>
  );
}

export default App;
