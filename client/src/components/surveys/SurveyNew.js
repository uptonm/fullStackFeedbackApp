import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = {showReview: false};
  renderContent() {
    if(!this.state.showReview) {
      return <SurveyForm 
        onSurveySubmit={() => this.setState({showReview: true})}
      />
    }
    return <SurveyFormReview 
      onCancel={() => this.setState({showReview: false})}
    />
  }
  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

// Remove values from form inputs upon navigating away from newForm/editForm
export default reduxForm({
  form:'surveyForm'
})(SurveyNew);