import React, { Component } from 'react';
import BChart from './BarChart_View';
import {data} from './data';
// import SimplePieChart from './PieChart_View';

class SurveyCard extends Component {
  render() {
    return (
      <div className='card' style={{marginBottom:'20px', height:'100%'}}>
        <nav className='blue-grey darken-2' style={{height:'34px', lineHeight:'30px'}}>
          <div className='nav-wrapper' style={{height: '50%'}}>
            <a className='brand-logo' style={{fontSize:'1.6rem', marginLeft:'10px'}}>{this.props.title}</a>
            <ul className="right">
              <li><a>Edit</a></li>
              <li><a>Delete</a></li>
            </ul>
          </div>
        </nav>
        <div className='row' style={{height:'100%'}}>
          <div className='col s4' style={{height:'300px'}}>
            <div style={{marginLeft:'10px', marginTop:'-5px'}}>
              <p>
                <strong>Subject Line:</strong> <br/>
                {this.props.subject} <br/> <br/>
                <strong>Email Body:</strong> <br />
                {this.props.body} <br /> <br />
                <strong>Email Recipients:</strong> <br />
                {this.props.emails}
              </p>
            </div>
          </div>
          <div className='right' style={{display:'grid', gridTemplateColumns:'auto auto', marginTop:'20px',marginRight:'40px'}}>
            {/*<SimplePieChart />*/}
            <BChart data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default SurveyCard;
