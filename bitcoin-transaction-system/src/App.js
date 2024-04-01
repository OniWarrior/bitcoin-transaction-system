import React from "react";
import "../src/Styles/App.css";
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Components/Home';
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/Login" Component={Login}></Route>
          <Route path="/Signup" Component={Signup}></Route>
        </Routes>

      </header>
    </div>
  );
}

export default App;
