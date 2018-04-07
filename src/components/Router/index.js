import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import ButtonClick from '../ButtonClick';
import TimeDisplay from '../TimeDisplay';
import LoginControl from '../LoginControl';
import Contact from '../Contact';
import LatLong from '../LatLong';
import Schedule from '../Schedule';
import './styles.css';

class Router extends Component {
  render() {
    return (
      <div className="Router">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/buttons" component={ButtonClick}/>
          <Route path="/time" component={TimeDisplay}/>
          <Route path="/join_now" component={Contact}/>
          <Route path="/login" component={LoginControl}/>
          <Route path="/address" component={LatLong}/>
          <Route path="/schedule" component={Schedule}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
