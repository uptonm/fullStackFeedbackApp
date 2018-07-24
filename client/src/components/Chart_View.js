import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesCurve, SparklinesReferenceLine, SparklinesSpots} from 'react-sparklines';
function average(data) {
  return _.round( _.sum(data)/data.length );
}
export default (props) => {
  return(
    <div className='center-block'>
      <Sparklines 
        data={props.data} 
        limit={20}
        height={120} 
        width={180}
        style={{ margin: '10px', strokeWidth:props.strokeWidth}}>
        <SparklinesCurve color={props.color} style={{strokeWidth:props.strokeWidth}}/>
        <SparklinesReferenceLine type='avg'/>
        <SparklinesSpots size={props.strokeWidth}/>
      </Sparklines>
    <h4 className='center-align'>{props.units}: {props.data[props.data.length-1]}</h4>
  </div>
  );
}
