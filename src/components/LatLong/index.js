import React, { Component } from 'react';
import './styles.css';

class LatLong extends Component {
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMyLocation = this.getMyLocation.bind(this)
  }

  componentDidMount() {
    this.getMyLocation()
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
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
        <section className="inputAddress">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="address" placeholder="Address" onChange={this.handleChange} value={this.state.address}/>
            <button>Go</button>
          </form>
        </section>
          <div>
            <p>Your latitude: <input type="text" value={latitude} /></p>
            <p>Your longitude: <input type="text" value={longitude} /></p>
          </div>
      </div>
    )
  }
}
export default LatLong;
