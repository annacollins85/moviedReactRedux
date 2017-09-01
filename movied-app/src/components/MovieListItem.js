import React, { Component } from 'react';

class MovieListItem extends Component {
  render() {
    return (
      <div className="MovieListItem">
       <img src={this.props.img}/>
      </div>
    );
  }
}

export default MovieListItem;
