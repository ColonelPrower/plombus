import React, { Component } from 'react';

class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <aside className="menu">
        <p className="menu-label">
          Inicio
        </p>
        <ul className="menu-list">
          <li><a>Hola</a></li>
          <li><a>Que es esto</a></li>
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <p className="menu-label">
          Transactions
        </p>
        <ul className="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
    );
  }
}
export default SideMenu;
