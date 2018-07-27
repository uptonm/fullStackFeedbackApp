import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';
const data = [
      {name: '11/12', yes: getRand(20), no: getRand(20)},
      {name: '11/13', yes: getRand(20), no: getRand(20)},
      {name: '11/14', yes: getRand(20), no: getRand(20)},
      {name: '11/15', yes: getRand(20), no: getRand(20)}
];
function getRand(max) {
  return Math.floor(Math.random() * max);
}
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
          <div className='col s7' style={{height:'300px'}}>
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
          <div className='col s4' style={{marginTop:'30px'}}>
            <BarChart width={400} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey='name'/>
              <YAxis />
              <Tooltip />
              <Bar type="monotone" dataKey="yes" barSize={30} fill="#26a69a"/>
              <Bar type="monotone" dataKey="no" barSize={30} fill="#455a64"/>
              <Legend />
            </BarChart>
          </div>
        </div>
      </div>
    );
  }
}

export default SurveyCard;