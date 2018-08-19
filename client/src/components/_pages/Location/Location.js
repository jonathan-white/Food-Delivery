import React, { Component } from 'react';
import Header from '../../Header/';
import Footer from '../../Footer/';
import './Location.css';

class Location extends Component {
  render() {
    return (
      <div>
        <Header label={`Location ${this.props.locationId}`} />
        <div>Location Details</div>
        <Footer />
      </div>
    )
  }
}

export default Location;
