import React, { Component } from 'react';

import MovieListItem from './MovieListItem';

class MovieList extends Component {
  render() {
    return (
        <div className="MovieListContainer">
          <h2>BOX OFFICE</h2>
          <div className="MovieList">
            <MovieListItem/>
          </div>
        </div>
    );
  }
}

export default MovieList;
