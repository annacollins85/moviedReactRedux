import React, { Component } from 'react';
import './App.css';

import Dashboard from './Dashboard';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
