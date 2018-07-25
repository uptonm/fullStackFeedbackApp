import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyNew extends Component {
  renderFields() {
    return(
      <div style={{paddingBottom: '15px'}}>
        <Field 
          label='Survey Title' 
          type='text' 
          name='title' 
          component={SurveyField} 
        />
        <Field 
          label='Subject Line' 
          type='text' 
          name='subject' 
          component={SurveyField} 
        />
        <Field 
          label='Email Body' 
          type='text' 
          name='body' 
          component={SurveyField} 
        />
        <Field 
          label='Recipient List' 
          type='text' 
          name='emails' 
          component={SurveyField} 
        />
      </div>
    );
  }
  
  render() {
    return(
      <div className='container white-text' style={{paddingTop:'40px'}}>
        <div className='card status-thin'>
          <h1 className='center-align black-text'>Create A Survey Campaign</h1>
          <div style={{padding:'40px', paddingTop:'0px'}}>
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
              {this.renderFields()}
              <button type='submit' className='btn-large btn-submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);