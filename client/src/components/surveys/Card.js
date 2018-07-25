import React, { Component } from 'react';

class Card extends Component {
  render() {
    return(
      <div className={`card ${this.props.className}`}>
        <div className="card-image">
          <img alt="" src={this.props.src} />
          <span className="card-title">{this.props.title}</span>
          {this.props.link &&
          <a href={this.props.link} className="btn-floating halfway-fab waves-effect waves-light blue-gray"><i className="material-icons">{this.props.btn}</i></a> }
        </div>
        <div className="card-content">
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
export default Card;