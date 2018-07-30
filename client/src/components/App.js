// Rendering layer control (React.js/React-Router)
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './surveys/Dashboard';
import SurveyThanks from './SurveyThanks';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return( 
      <div>
        <BrowserRouter>
          <div>
            <header>
              <Header /> {/*Header always shows*/}
            </header>
            <Footer />
            <main>
              <Route exact path='/' component={Landing} />
              <Route exact path='/surveys' component={Dashboard} />
              <Route path='/surveys/new' component={SurveyNew} />
              <Route exact path='/surveys/thanks' component={SurveyThanks} />
            </main>
            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);  