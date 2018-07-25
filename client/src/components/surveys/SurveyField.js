import React, { Component } from 'react';
import { Field } from 'redux-form';

export default ({ input, label }) => {
  return (
    <div>
      <label style={{color: 'black'}}>{label}</label>
      <input  {...input} style={{color: 'black'}}/>
    </div>
  );
}