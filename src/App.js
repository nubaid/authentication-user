import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
