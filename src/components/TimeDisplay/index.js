import React, { Component } from 'react';
import './styles.css';

class TimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <section className="main">
        <div>
          <h1>This is: TimeDisplay Component</h1>
          <h2>The time is: {this.state.date.toLocaleTimeString()}</h2>
        </div>
      </section>
    );
  }
}

export default TimeDisplay;
