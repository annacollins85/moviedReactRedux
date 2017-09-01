import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleMoviePage extends Component {

  constructor(props) {
    super(props);
    // localStorage.set('movieInfo', this.props.movies[props.match.params.id])
    this.state = {
     movieInfo: this.props.movies[props.match.params.id]
    }

  }
  render() {
    return (
      <div className="movieInfo">
      <img src={this.state.movieInfo.url}/>
        <div className="movieTexts">
          <h1>DUMMY TITLE MOZAFUKA</h1>
          <p>{this.state.movieInfo.overview}</p>
        </div>
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
