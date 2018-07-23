import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return ( 
        <ul className='right'>
          <li>
            <a href='/auth/google' className='btn-large waves-effect waves-light blue-gray'>Login with Google</a>
          </li>
        </ul>
      );
      default:
        return (
        <ul className='right'>
          <li>
            <a className='btn-large waves-effect waves-light blue-gray'>Credits: {this.props.auth.credits}</a>
          </li>
          <li><Payments /></li>
          <li>
            <a href='/api/logout' className='btn-large waves-effect waves-light blue-gray'>Log Out</a>
          </li>
        </ul>  
        );
    }
  }
  render() {
    return (  
      <div className='navbar-fixed'>
        <nav className='blue-grey darken-2'>
          <div className="nav-wrapper container">
            <Link 
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo ">
              Logo
            </Link>
            {this.renderContent()}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);