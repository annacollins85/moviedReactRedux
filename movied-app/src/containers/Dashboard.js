import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDiscoverMovies, addCategoryMovies } from '../actions'
import MovieList from '../components/MovieList';

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

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    console.log(this.props.boxOfficeList);
    return (
      <div className="Dashboard">
        <MovieList/>
        <MovieList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    movies: state.entities.movies,
    boxOfficeList: state.pages.dashboard.boxOfficeList,
    // list2: state.movieLists.list2,
    // searched: state.movieLists.searched,
    // selectedMovie: state.selectedMovie,
});

const mapDispatchToProps = (dispatch) => ({
  addDiscoverMovies: (data) => dispatch(addDiscoverMovies(data)),
  addCategoryMovies: (data) => dispatch(addCategoryMovies(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
