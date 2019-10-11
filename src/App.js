import React, { Component } from 'react';

import './App.css';

class App extends Component {

  render() {
    return (
      <header className="top">
        <div className="wrapper">
          <input id="checkbox" type="checkbox" checked disabled/>
          <label htmlFor="checkbox">Laundry day, done.</label>
        </div>
      </header>
    );
  }
}

export default App;
