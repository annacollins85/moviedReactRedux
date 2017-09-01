import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// Routing
import { Link } from 'react-router-dom';

class MovieListItem extends Component {

  renderButton () {
    if (this.props.seen) return null;
    return <RaisedButton onClick={this.handleClickOnSeen} label="SEEN" primary />;
  }

  handleClickOnSeen = (e) => {
    this.props.onSeen(this.props.id)
  }

  goToSinglePlage = (e) => {
    const id = Number(e.target.id);
  }

  render() {
    let style = {'opacity': '1'};
    if (this.props.seen) style = {'opacity': '0.5'};
    console.log(this.props.img);
    return (
      <div className="MovieListItem">
        <Link to={`/movie/${this.props.id}`}><img onClick={this.goToSinglePlage} style={style} src={this.props.img} id={this.props.id}/></Link>
        {this.renderButton()}
      </div>
    );
  }
}



export default MovieListItem;
