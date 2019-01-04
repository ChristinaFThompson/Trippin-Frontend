import React, { Component } from "react";
import axios from "axios";

class TripSummary extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: 10
    };
    this.showRestaurants = this.showRestaurants.bind(this);
  }
}

saveRestaurant () {
    axios.post('http://localhost:8000/admin/trippin_backend/restaurant/', {
        text: this.props.restaurants
    })
    .then(() => {
        this.props.push('where am i oushing this too?')
    })
    componentDidMount () {
        if
    }
}

export default TripSummary;
