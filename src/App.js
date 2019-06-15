import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './Components/Menu';
import SideMenu from './Components/Menu/SideMenu';
import Home from './Components/Home';

//import './App.css';
import './lib/bulma/css/bulma.min.css';
import './lib/plombus.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container is-fluid">
        <Menu/>
      </div>
      <br/>
        <div className="container is-fluid columns">
          <div className="column is-2 ">
            <SideMenu/>
          </div>
          <div className="column">
              <Home/>
          </div>

        </div>
        </React.Fragment>
      //</div>
    );
  }
}

export default App;
