import React, { Component } from 'react';

class Card extends Component {
  render() {
    return(
      <div className="card">
        <div className="card-image">
          <img alt="Title" src="https://materializecss.com/images/sample-1.jpg"/>
          <span className="card-title">{this.props.title}</span>
          <a href={this.props.link} className="btn-floating halfway-fab waves-effect waves-light blue-gray"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
export default Card;