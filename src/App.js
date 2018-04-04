import React, { Component } from 'react';
import Router from './components/Router/index.js';
import NavBar from './components/NavBar/index.js';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;
