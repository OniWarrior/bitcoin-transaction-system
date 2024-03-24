import React from "react";
import "../src/Styles/App.css";
import { Switch, Route } from "react-router-dom";
import Home from '../src/Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;
