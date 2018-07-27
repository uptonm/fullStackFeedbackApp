import React, { Component } from 'react';
import { Field } from 'redux-form';

export default ({ input, label, meta: {error, touched} }) => {
  return (
    <div className='row' style={{margin:'0px 100px 0px 100px'}}>
      <div className='input-field col s12' style={{marginBottom:'20px'}}>
        <label class="active" for="first_name2">{label}</label>
        <input id={label} {...input} style={{color: 'black', marginBottom:'0px'}}/>
        {touched && <span className='danger-text'>{error}</span>}
      </div>
    </div>
  );
}