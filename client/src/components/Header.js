import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (  
      <nav className='blue-grey'>
        <div className="nav-wrapper container">
          <a href="/" className="left brand-logo">Logo</a>
          <ul className="right">
            <li>
              <a href='/auth/google'>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;