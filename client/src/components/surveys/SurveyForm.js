import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  {label: 'Survey Title', name: 'title'},
  {label: 'Subject Line', name: 'subject'},
  {label: 'Email Body', name: 'body'},
  {label: 'Recipient List', name: 'emails'}
];
class SurveyNew extends Component {
  renderFields() {
    return(
      <div style={{paddingBottom: '15px'}}>
        {_.map(FIELDS, ({ label, name }) => {
          return <Field key={name} component={SurveyField} type='text' label={label} name={name} />
        })}
      </div>
    );
  }
  
  render() {
    return(
      <div className='container white-text' style={{paddingTop:'40px'}}>
        <div className='card status-thin'style={{height:'700px'}}>
          <h1 className='center-align black-text'>Create A Survey Campaign</h1>
          <div style={{padding:'40px', paddingTop:'0px'}}>
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} style={{paddingBottom:'40px'}}>
              {this.renderFields()}
              <div className='card-content center' style={{marginTop:'0px'}}>
                <div style={{display:'grid', gridTemplateColumns:'auto 200px 200px auto', gridColumnGap:'20px'}}>
                  <span></span>
                  <Link to='/surveys' className='btn-large danger'>
                    Cancel
                  </Link>
                  <button type='submit' className='btn-large btn-submit'>Next</button>
                  <span></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, ({ name, label }) => {
    if(!values[name]) {
      errors[name] = `You must provide ${(name[name.length-1] !== 's') ? `a ${name}`:`some ${name}`}`; 
      // Prevent error from saying you need to provide 'a email' instead of 'an email'
    }
  });
  
  errors.emails = validateEmails(values.emails || '');
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyNew);