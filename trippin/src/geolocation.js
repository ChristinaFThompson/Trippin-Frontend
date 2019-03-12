import React from "react";
import { geolocated } from "react-geolocated";
import Restaurants from "./components/restaurants";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Geolocation extends React.Component {
  render() {
    // checks if geolocation is avail
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <MuiThemeProvider>
          <AppBar title="Current Coordinates" />
          {/* render geo location if avail and allowed */}
          <span>Latitude: </span> {this.props.coords.latitude}
          <br />
          <br />
          <span>Longitude: </span> {this.props.coords.longitude}
          <br />
          <br />
          <div>
            {/* load restaurant component to render list of nearby restaurants using lat & long via react geolocated */}
            <Restaurants info={this.props.coords} />
          </div>
        </MuiThemeProvider>
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
