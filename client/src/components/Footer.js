import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer class="page-footer slate-grey" style={{position:'fixed',bottom:'0',left:'0',width:'100%'}}>
         <div class="footer-copyright">
           <div class="container">
           © 2014 Copyright Text
           <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
           </div>
         </div>
       </footer>
    );
  }
}

export default Footer;