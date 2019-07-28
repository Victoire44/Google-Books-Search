import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Results from "./components/Results";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";

import "./App.css";

class App extends Component {
  state = {
    results
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" Component={search} />
            <Route exact path="/search" Component={search} />
            <Route exact path="/saved" Component={saved} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
