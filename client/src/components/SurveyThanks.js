import React, { Component } from 'react';
// Takes in a prop of ans which determines which page it shows
// One for negative feedback maybe ask why? other for positive, to say thanks!
class SurveyThanks extends Component {
  renderContent() {
    if(this.props.ans === 'yes') {
      return (<h2 className='center-align'>Positive Feedback</h2>);
    }
    else {
      return (
        <div>
          <h2 className='center-align'>Negative Feedback</h2>
        </div>
      )
    }
  }
  render() {
    return (
      <div className='valign-wrapper' style={{height:'100%', marginTop:'10%',marginBottom:'397px'}}>
        <div className='container section'>
          <div className='card center-block status-thin' style={{paddingBottom:'50px'}}>
              <br/>
              <br/>
              {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default SurveyThanks;
