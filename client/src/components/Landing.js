import React, { Component } from 'react';
import Splash from './Splash';
import Card from './surveys/Card';
class Landing extends Component {
  render() {
    return ( 
      <div>
        <Splash />
        <div className='section'>
          <div className='container center-block'>
            <div className='row'>
              <div className='col s4'>
                <Card 
                  title="Title" 
                  content="Sample Content" 
                  link="/" 
                  src="https://materializecss.com/images/sample-1.jpg" 
                  btn='add'
                />
              </div>
              <div className='col s4'>
                <Card 
                  title="Title" 
                  content="Sample Content" 
                  link="/" 
                  src="https://materializecss.com/images/sample-1.jpg" 
                  btn='add'
                />
              </div>
              <div className='col s4 hide-on-med-and-down'>
                <Card 
                  title="Title" 
                  content="Sample Content" 
                  link="/" 
                  src="https://materializecss.com/images/sample-1.jpg" 
                  btn='add'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;