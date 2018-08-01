import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';

class BChart extends Component {
  render() {
    return (
      <BarChart
        width={400}
        height={300}
        data={this.props.data}
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
