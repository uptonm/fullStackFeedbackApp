import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
const summary = [
      {name: '11/12', yes: 20, no: 40},
      {name: '11/13', yes: 20, no: 40},
      {name: '11/14', yes: 20, no: 40},
      {name: '11/15', yes: 20, no: 40}
];
let yes = 0;
let no = 0;
summary.map(item => {
	yes += item.yes;
  no += item.no;
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
        <Pie
          data={data} 
          cx={100} 
          cy={125} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    );
  }
}

export default SimplePieChart;