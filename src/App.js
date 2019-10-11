import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/index';
import AboutUs from './components/about-us';
import Pricing from './components/pricing';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
       <Router>
          <Switch>
            <Route exact path='/'>
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
            </Route>
            <Route exact path='/about-us' component={AboutUs}></Route>
            <Route exact path='/pricing' component={Pricing}></Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
