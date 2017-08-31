import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <h2>Movied</h2>
        <input className="search" type="text" placeholder="Search..."/>
      </div>
    );
  }
}

export default NavBar;
