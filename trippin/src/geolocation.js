import React from "react";
import { geolocated } from "react-geolocated";
import Restaurants from "./components/restaurants";

class Geolocation extends React.Component {
  render() {
    // checks if geolocation is avail
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        {/* render geo location if avail and allowed */}
        <span>latitude</span>
        <br /> {this.props.coords.latitude}
        <br />
        <span>longitude</span>
        <br /> {this.props.coords.longitude}
        <br />
        <div>
          {/* load restaurant component to render list of nearby restaurants using lat & long via react geolocated */}
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
