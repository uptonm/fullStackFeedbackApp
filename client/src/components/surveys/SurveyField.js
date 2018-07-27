import React, { Component } from 'react';
import { Field } from 'redux-form';

export default ({ input, label, meta: {error, touched} }) => {
  return (
    <div className='row' style={{margin:'0px 100px 0px 100px'}}>
      <div className='input-field col s12'>
        <input id={label} placeholder={label} {...input} style={{color: 'black', marginBottom:'0px'}}/>
        {touched && <span className='danger-text'>{error}</span>}
      </div>
    </div>
  );
}