import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './bulma/css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="column">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>        
        </div>
        
      </div>
    );
  }
}

export default App;
