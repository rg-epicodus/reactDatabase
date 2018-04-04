import React, { Component } from 'react';
import './styles.css';

class Home extends Component {
  render() {
    return(
      <section className="main">
        <div>
          <h1>This is: Home Component</h1>
          <a href="/buttons"><h2>This link goes to ButtonClick component</h2></a>
          <a href="/time"><h2>This link goes to TimeDisplay component</h2></a>
          <a href="/login"><h2>This link goes to LoginControl component</h2></a>
        </div>
      </section>
    );
  }
}

export default Home;
