import React, { Component } from 'react';
import './styles.css';

class LatLong extends Component {
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
    }

    this.getMyLocation = this.getMyLocation.bind(this)
  }

  componentDidMount() {
    this.getMyLocation()
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

  render() {
    const { latitude, longitude } = this.state

    return (
      <div>
        <p>Your latitude: <input type="text" value={latitude} /></p>
        <p>Your longitude: <input type="text" value={longitude} /></p>
      </div>
    )
  }
}
export default LatLong;
