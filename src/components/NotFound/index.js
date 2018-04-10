import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pic404 from '../../img/error404.png';
import './styles.css';

class NotFound extends Component {
  componentDidMount(){
    console.log("set");
    window.scroll(0,0);
  }
  render() {
    return (
      <div className="page-container">
        <div className="bg" style={{ backgroundImage: 'url(' + pic404 + ')'}}></div>
        <h1 className="title">404</h1>
        <h2>Sorry, but it appears the cat has been playing with the cords again.</h2>
        <center><Link to="/">Return to Home Page</Link></center>
      </div>
    );
  }
}

export default NotFound;