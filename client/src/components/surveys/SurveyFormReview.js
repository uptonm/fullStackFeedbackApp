import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import SurveyReviewField from './SurveyReviewField';
import * as actions from '../../actions';
import { FIELDS } from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(FIELDS, ({ label, name }) => {
          return <SurveyReviewField key={name} label={label} name={name} value={formValues[name]}/>
        });
  return (
    <div className='container white-text' style={{paddingTop:'40px', paddingLeft:'0px',paddingRight:'0px', paddingBottom:'0px'}}>
      <div className='card status-thin' style={{height:'700px', width:
    '100%', padding:'0px'}}>
        <h1 className='center-align black-text'>Review Entries</h1>
          <div>
            <div style={{paddingLeft:'40px',paddingRight:'40px',paddingBottom:'0px'}}>
              {reviewFields}
              <div className='card-content center' style={{marginTop:'0px'}}>
                <div style={{display:'grid', gridTemplateColumns:'auto 200px 200px auto', gridColumnGap:'20px'}}>
                  <span></span>
                  <button className='btn-large danger' onClick={onCancel}>Edit</button>
                  <button className='btn-large bluegray' onClick={() => submitSurvey(formValues, history)}>Send Survey</button>
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

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
