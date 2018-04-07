import React, { Component } from 'react';
import './styles.css';

class LatLong extends Component {
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
      address: ''
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
    const query = {
      address: this.state.address
    }
    this.setState({
      address: ''
    })
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
        <section>
          <div>
            <p>Your current latitude: <input type="text" value={latitude} /></p>
            <p>Your current longitude: <input type="text" value={longitude} /></p>
          </div>
        </section>
        <div>
          <form onSubmit={this.handleSubmit}  className="inputAddress">
            <input type="text" name="address" placeholder="Address" onChange={this.handleChange} value={this.state.address}/>
            <button>Go</button>
          </form>
          <div>
            <p>Your query: {this.setState.address}</p>
          </div>  
        </div>
      </div>
    )
  }
}
export default LatLong;
