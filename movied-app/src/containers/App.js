import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Dashboard from './Dashboard';
import NavBar from './NavBar';
import SingleMoviePage from './SingleMoviePage';

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CC7B19',
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <NavBar/>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/:id" component={SingleMoviePage}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
