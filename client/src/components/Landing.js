import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return ( 
      <div className='section'>
        <div className='card container center-block'>
          <div className='container'>
            <br />
            <br />
            <br />
            <h2 id='title' className='header center'>Landing Page</h2>
            <div id='subtitle' className='row center'>
              <h5 className='head col s12 light'>This is filler text, we should probably replace this!</h5>
            </div>
            <div id='subtitle-btn' className='row center'>
              <a href="/auth/google" className="btn-large waves-effect waves-light blue-gray">
              Get Started</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;