import React, { Component } from 'react';
import { Field } from 'redux-form';

export default ({ input, label, value }) => {
  return (
    <div key={label} className='row' style={{margin:'0px 100px 0px 100px'}}>
      <div className='input-field col s12' style={{marginBottom:'20px'}}>
        <label class="active" for="first_name2">{label}</label>
        <input value={value} id={label} type='text' class='validate' style={{color: 'black', marginBottom:'0px'}} />
      </div>
    </div>
  );  
}