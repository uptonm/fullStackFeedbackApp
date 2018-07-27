import React from 'react';
import { connect } from 'react-redux';
import SurveyReviewField from './SurveyReviewField';

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div className='container white-text' style={{padding:'40px', paddingLeft:'0px',paddingRight:'0px'}}>
      <div className='card status-thin' style={{height:'700px', width:
    '100%', padding:'0px'}}>
        <h1 className='center-align black-text'>Review Entries</h1>
          <div>
            <div style={{paddingLeft:'40px',paddingRight:'40px',paddingBottom:'40px'}}>
              <SurveyReviewField label='Survey Title' value={formValues.title} />
              <SurveyReviewField label='Subject Line' value={formValues.subject} />
              <SurveyReviewField label='Email Body' value={formValues.body} />
              <SurveyReviewField label='Recipient List' value={formValues.emails} />
              <div className='card-content center' style={{marginTop:'0px'}}>
                <div style={{display:'grid', gridTemplateColumns:'auto 200px 200px auto', gridColumnGap:'20px'}}>
                  <span></span>
                  <button className='btn-large danger' onClick={onCancel}>Edit</button>
                  <button className='btn-large bluegray'>Submit</button>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
          
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps)(SurveyFormReview);