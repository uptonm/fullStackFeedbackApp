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

class BChart extends Component {
  render() {
    return (
      <BarChart 
        width={400} 
        height={300} 
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey='name'/>
          <YAxis />
          <Tooltip />
          <Bar type="monotone" dataKey="yes" barSize={30} fill="#26a69a"/>
          <Bar type="monotone" dataKey="no" barSize={30} fill="#455a64"/>
          <Legend />
      </BarChart>
    )
  }
}
export default BChart;