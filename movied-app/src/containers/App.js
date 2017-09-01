import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Dashboard from './Dashboard';
import NavBar from './NavBar';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CC7B19',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <NavBar/>
          <Dashboard/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
