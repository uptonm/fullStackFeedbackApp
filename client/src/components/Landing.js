import React, { Component } from 'react';
import Splash from './Splash';
import Card from './Card';
class Landing extends Component {
  render() {
    return ( 
      <div>
        <Splash />
        <div className='section'>
          <div className='container center-block'>
            <div className='row'>
              <div className='col s4'>
                <Card title="Title" content="Sample Content" link="/"/>
              </div>
              <div className='col s4'>
                <Card title="Title" content="Sample Content" link="/"/>
              </div>
              <div className='col s4 hide-on-med-and-down'>
                <Card title="Title" content="Sample Content" link="/"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;