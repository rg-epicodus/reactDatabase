import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import { getEvents } from '../../gcal.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './styles.css';

BigCalendar.momentLocalizer(moment)

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
      <BigCalendar
        style={{height: '420px'}}
        events={this.state.events}
        views={['month']}
        step={30}
        defaultDate={new Date(2018, 3, 1)}
      />
    )
  }
}

export default Schedule;
