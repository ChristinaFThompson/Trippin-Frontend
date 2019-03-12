import React, { Component } from "react";
import axios from "axios";
import { URL, LOCATE, TRIP, RESTAURANT, ACTIVITY } from "../config/Api.js";
import store from "../store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./restaurants.css";

// const baseURL = "http://localhost:8000/admin/trippin_backend/restaurant/";
// const endPoint = '/restaurants'

class Restaurants extends Component {
  constructor(props) {
    super();
    this.GetEats = this.GetEats.bind(this);
    this.CreateTrip = this.CreateTrip.bind(this);
    this.AddActivity = this.AddActivity.bind(this);

    this.state = {
      restaurants: {},
      listFood: false,
      isTrippin: false,
      isActive: false,
      hasEaten: {},
      trip_id: ""
    };
  }
  AddActivity(name) {
    const eatery = name.name;
    const address = name.location.display_address.join();
    const phone = name.phone;
    const payload = { eatery, address, phone };
    return axios
      .post(URL + RESTAURANT, payload, {
        headers: { Authorization: "Token " + store.getState().token }
      })
      .then(
        function(restaurant) {
          let food = restaurant.data.id;
          let vacay = this.state.trip_id;
          let latitude = this.props.info.latitude;
          let longitude = this.props.info.longitude;
          let info = { food, vacay, latitude, longitude };
          return axios
            .post(URL + ACTIVITY, info, {
              headers: { Authorization: "Token " + store.getState().token }
            })
            .then(
              function(activity) {
                return axios
                  .get(URL + ACTIVITY, {
                    headers: {
                      Authorization: "Token " + store.getState().token
                    }
                  })
                  .then(
                    function(action) {
                      this.setState({
                        hasEaten: { first: action.data },
                        isActive: true
                      });
                    }.bind(this)
                  );
              }.bind(this)
            );
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  CreateTrip() {
    // creates trip via backend API call
    // todo: move lat,long, etc. to redux
    const latitude = this.props.info.latitude;
    const longitude = this.props.info.longitude;
    const data = { latitude, longitude };
    return axios
      .post(URL + TRIP, data, {
        headers: { Authorization: "Token " + store.getState().token }
      })
      .then(
        function(trip) {
          this.setState({ trip_id: trip.data.id, isTrippin: true });
          alert("Trip add success!");
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  GetEats() {
    // using lat & long list nearby eats via backend API call
    // todo: move lat,long, etc. to redux
    const latitude = this.props.info.latitude;
    const longitude = this.props.info.longitude;
    const data = { latitude, longitude };
    return axios
      .post(URL + LOCATE, data, {
        headers: { Authorization: "Token " + store.getState().token }
      })
      .then(response => {
        this.setState({
          restaurants: JSON.parse(JSON.stringify(response.data)),
          listFood: true
        });
      });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="Trip Data" />
          <button
            // Create trip
            onClick={() => this.CreateTrip()}
          >
            Create Trip!
          </button>
          <br />
          <br />
          <button
            // get nearby eats via lat & long
            onClick={() => this.GetEats()}
          >
            Get Eats!
          </button>
          <span>
            {/* if restaurant returned, list restaurant name */}
            {this.state.listFood
              ? this.state.restaurants.businesses.map(
                  d => (
                    <li key={d.name} onClick={() => this.AddActivity(d)}>
                      {d.name}
                    </li>
                  ),
                  this
                )
              : ""}
          </span>
          <br />
          <span>
            <br />
            <div className="visited">You've visited...</div>
            {/* if restaurant returned, list restaurant name */}
            {this.state.isActive
              ? this.state.hasEaten.first.map(
                  e => (
                    <li key={e.name}>
                      {e.name}, {e.address}, {e.phone}
                    </li>
                  ),
                  this
                )
              : ""}
          </span>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Restaurants;
