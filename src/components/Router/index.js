import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import ButtonClick from '../ButtonClick';
import TimeDisplay from '../TimeDisplay';
import LoginControl from '../LoginControl';
import './styles.css';

class Router extends Component {
  render() {
    return (
      <div className="Router">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/buttons" component={ButtonClick}/>
          <Route path="/time" component={TimeDisplay}/>
          <Route path="/login" component={LoginControl}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
