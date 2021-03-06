import React, { Component } from 'react';
import { connect } from 'react-redux';

class Splash extends Component {
  getLink() {
    switch(this.props.auth) {
      case null:
        return '/';
      case false:
        return '/auth/google';
      default:
        return '/surveys';
    }
  }
  render() {
    return (
      <div className='section' style={{marginTop:'30px'}}>
        <div className='card container center-block splash' style={{margin:'0 auto', width:'70%'}}>
          <div className='container'>
            <br />
            <br />
            <br />
            <h2 id='title' className='header center'>Landing Page</h2>
            <div id='subtitle' className='row center'>
              <h5 className='head col s12 light'>This is filler text, we should probably replace this!</h5>
            </div>
            <div id='subtitle-btn' className='row center'>
              <a href={this.getLink()} className="btn-large waves-effect waves-light blue-gray">
              Get Started</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Splash);