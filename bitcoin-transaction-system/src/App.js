import React from "react";
import "../src/Styles/App.css";
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" Component={Home}></Route>
        </Routes>

      </header>
    </div>
  );
}

export default App;
