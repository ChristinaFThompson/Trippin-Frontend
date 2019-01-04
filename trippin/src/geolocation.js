import React from "react";
import { geolocated } from "react-geolocated";
import Restaurants from "./components/restaurants";

class Geolocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <span>latitude</span>
        <br /> {this.props.coords.latitude}
        <br />
        <span>longitude</span>
        <br /> {this.props.coords.longitude}
        <br />
        <div>
          <Restaurants coords={this.props.coords} />
        </div>
      </div>
    ) : (
      //
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Geolocation);
