import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import { getEvents } from '../../gcal.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';

// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment)
// this weird syntax is just a shorthand way of specifying loaders
class Schedule extends Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      <BigCalendar
        style={{height: '420px'}}
        events={this.state.events}
      />
    )
  }
}

export default Schedule;
