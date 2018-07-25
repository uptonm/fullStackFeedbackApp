import React, { Component } from 'react';
import {BarChart, Bar} from 'recharts';
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
class SurveyCard extends Component {
  render() {
    return (
      <div className='card' style={{marginBottom:'20px', height:'100%'}}>
        <nav className='blue-grey darken-2' style={{height:'34px', lineHeight:'30px'}}>
          <div className='nav-wrapper' style={{height: '50%'}}>
            <a className='brand-logo' style={{fontSize:'1.6rem', marginLeft:'10px'}}>{this.props.title}</a>
            <ul class="right">
              <li><a>Edit</a></li>
              <li><a>Delete</a></li>
            </ul>
          </div>
        </nav>
        <div className='row'>
          <div className='col s6'>
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
          <div className='col s6'>
            <BarChart height={200} width={425} data={data} style={{marginTop:'20px'}}>
              <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"/>
            </BarChart>
          </div>
        </div>
      </div>
    );
  }
}

export default SurveyCard;