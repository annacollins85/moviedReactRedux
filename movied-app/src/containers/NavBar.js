import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToSearchedList } from '../actions';

class NavBar extends Component {

  findSearchedMovies = (e) => {
    if(e.target.value.length >= 2) {
      fetch(`https://movied.herokuapp.com/search?q=${e.target.value}`)
      .then(data => data.json())
      .then(data => {
        return data.map(film => {
          if (film.poster_path !== null) {
            return {
              id: film.id,
              url: `https://image.tmdb.org/t/p/w300${film.poster_path}`,
              overview: film.overview
            }
          } else {
            return {
              id: film.id,
              url: `/Users/annacollins1/Documents/Code/week-5/React/Redux/moviedReactRedux/movied-app/src/public/noposter.jpg`,
              overview: film.overview
            }
          }
        })
      })
      .then(arr => {
        this.props.addToSearchedList(arr)
      })
    }
    else {
      this.props.addToSearchedList([])
    }
  }

  render() {
    return (
      <div className="NavBar">
        <h2>Movied</h2>
        <input className="search" onKeyUp={this.findSearchedMovies} type="text" placeholder="Search..."/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addToSearchedList: (arr) => dispatch(addToSearchedList(arr))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
