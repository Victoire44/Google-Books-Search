import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Results from "./components/Results";
import Form from "./components/Form";
import Wrapper from "./components/Wrapper";

import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {
 

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" Component={Search} />
            <Route exact path="/search" Component={Search} />
            <Route exact path="/saved" Component={Saved} />
            <Route exact path="/noMatch" Component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
