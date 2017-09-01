import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDiscoverMovies, addCategoryMovies, seenMovie } from '../actions'
import MovieList from '../components/MovieList';
import SearchList from '../components/SearchMovieList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.fetchDiscoverMovies()
    this.fetchCategoryMovies(28)
  }

  fetchDiscoverMovies (id) {
    fetch(`https://movied.herokuapp.com/discover`)
    .then(data => data.json())
    .then(data => {
      data = data.map(film => (
        {
          seen: false,
          id: film.id,
          url: `https://image.tmdb.org/t/p/w300${film.poster_path}`,
          overview: film.overview
        }
      ))
      this.props.addDiscoverMovies(data);
    })
  }

  fetchCategoryMovies (id) {
    fetch(`https://movied.herokuapp.com/categories/${id}`)
    .then(data => data.json())
    .then(data => {
      data = data.map(film => (
        {
          seen: false,
          id: film.id,
          categorieId: id,
          url: `https://image.tmdb.org/t/p/w300${film.poster_path}`,
          overview: film.overview
        }
      ))
      this.props.addCategoryMovies(data);
    });
  }

  mapMovies = (movieIdArr) => {
    return movieIdArr.map(id => {
      return this.props.movies[id]
    })
  }

  seenMovie = (id) => {
    this.props.seenMovie(id);
  }

  createSearchList = () => {
    if (this.props.searchedList.length < 2) return null;
    return <SearchList
    listType="SEARCH RESULTS"
    movies={this.props.searchedList}
    />;
  }

  render() {
    const searchResults = this.createSearchList();
    console.log(searchResults);
    return (
      <div className="Dashboard">
        {searchResults}
        <MovieList
          listType="BOX OFFICE"
          list={this.props.boxOfficeList}
          movies={this.mapMovies(this.props.boxOfficeList)}
          onSeen={this.seenMovie}
          />
        <MovieList
          listType="ACTION MOVIES"
          list={this.props.actionList}
          movies={this.mapMovies(this.props.actionList)}
          onSeen={this.seenMovie}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    movies: state.entities.movies,
    boxOfficeList: state.pages.dashboard.boxOfficeList,
    actionList: state.pages.dashboard.actionList,
    searchedList: state.pages.dashboard.searchedList,
});

const mapDispatchToProps = (dispatch) => ({
  addDiscoverMovies: (data) => dispatch(addDiscoverMovies(data)),
  addCategoryMovies: (data) => dispatch(addCategoryMovies(data)),
  seenMovie: (id) => dispatch(seenMovie(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
