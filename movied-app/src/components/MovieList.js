import React, { Component } from 'react';

import MovieListItem from './MovieListItem';

class MovieList extends Component {
  render() {
    const movies = this.props.movies.map((movie, index) => {
      return <MovieListItem key={index} id={movie.id} img={movie.url}/>
    })
    return (
        <div className="MovieListContainer">
          <h2>{this.props.listType}</h2>
          <div className="MovieList">
            {movies}
          </div>
        </div>
    );
  }
}

export default MovieList;
