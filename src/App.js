import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";

import './App.css';
import Navbar from './components/navbar/index';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <HashRouter basename='/'>
          <header className="top">
            <Navbar 
              navbarState={this.state.navbarOpen} 
              handleNavbar={this.handleNavbar}
            />
            <div className="wrapper">
              <input id="checkbox" type="checkbox" checked disabled/>
              <label htmlFor="checkbox">Laundry day, done.</label>
            </div>
          </header>
      </HashRouter>
    );
  }
}

export default App;
