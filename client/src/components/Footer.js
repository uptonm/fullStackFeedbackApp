import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="page-footer slate-grey" style={{position:'fixed',bottom:'0',left:'0',width:'100%'}}>
         <div className="footer-copyright">
           <div className="container">
           © 2014 Copyright Text
           <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
           </div>
         </div>
       </footer>
    );
  }
}

export default Footer;