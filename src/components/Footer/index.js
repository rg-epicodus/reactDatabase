import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h2>Look at this amazing footer</h2>
        <a href='companyFacebook' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-facebook"></span></a>
        <a href='companyTwitter' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter"></span></a>
        <a href='companyInstagram' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-instagram"></span></a>
        <a href='companyYoutube' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-youtube"></span></a>
        <h3>Site and design © 2018 Grailsoft Technical Solutions</h3>
      </div>
    );
  }
}

export default Footer;
