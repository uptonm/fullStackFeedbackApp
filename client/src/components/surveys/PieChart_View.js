import React, { Component } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import {data as summary} from './data';

let yes = 0;
let no = 0;

summary.map(item => {
	yes += item.yes;
  no += item.no;
  return null;
});

const data = [{name: 'yes', value: yes}, {name: 'no', value: no}];
const COLORS = ['#26a69a', '#455a64'];


const RADIAN = Math.PI / 180;        
            
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class SimplePieChart extends Component {
	render () {
  	return (
    	<PieChart width={200} height={300} onMouseEnter={this.onPieEnter}>
        <Legend />
        <Pie
          datakey="UniqueKeyPlease"
          data={data}
          cx={100} 
          cy={125}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="#8884d8"
        >
        	{data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)}
        </Pie>
      </PieChart>
    );
  }
}

export default SimplePieChart;