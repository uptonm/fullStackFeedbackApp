import React from 'react';

export default ({ input, label, value }) => {
  return (
    <div key={label} className='row' style={{margin:'0px 100px 0px 100px'}}>
      <div className='input-field col s12' style={{marginBottom:'20px'}}>
        <label className="active" htmlFor="first_name2">{label}</label>
        <p id={label} style={{color: 'black', marginBottom:'0px'}}>{value}</p>
      </div>
    </div>
  );  
}