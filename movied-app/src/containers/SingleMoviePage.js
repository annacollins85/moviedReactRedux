import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleMoviePage extends Component {
  render() {
    return (
      <div className="SingleMoviePage">
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    movies: state.entities.movies
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMoviePage);
