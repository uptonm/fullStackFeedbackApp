// Rendering layer control (React.js/React-Router)
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyThanks from './SurveyThanks';
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return( 
      <div>
        <BrowserRouter>
          <div>
            <Header /> {/*Header always shows*/}
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
            <Route exact path='/surveys/thanks' component={SurveyThanks} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);  