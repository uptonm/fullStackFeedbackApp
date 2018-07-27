import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyCard from './SurveyCard';

class Dashboard extends Component {  
  renderSurveys() {
    let arr = [];
    for(let i = 0; i < 4; i++) {
      arr[i] = {
        title: `Title ${i + 1}`,
        subject: `Subject Line ${i + 1}`,
        body: `Email Body ${i + 1}`,
        emails: `Recipient List ${i + 1}`
      }
    }
    console.log(arr);
    return arr.map(item => {
      return (
        <SurveyCard 
          key={item.title}
          title={item.title}
          subject={item.subject}
          body={item.body}
          emails={item.emails}
        />
      );
    });
  }
  
  render() {
    return(
    <div className='container' style={{marginTop:'20px'}}>
      {this.renderSurveys()}

      <div className='fixed-action-btn'>
        <Link 
          to='/surveys/new' 
          className='btn-floating btn-large bluegray'
          style={{position:'absolute', bottom: '75px', right: '75px'}}
          >
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
    );
  }
}
export default Dashboard;