import React, { Component } from "react";
import axios from "axios";
import { URL, LOCATE } from "../config/Api.js";

// const baseURL = "http://localhost:8000/admin/trippin_backend/restaurant/";
// const endPoint = '/restaurants'

class Restaurants extends Component {
  constructor(props) {
    super();
    this.GetEats = this.GetEats.bind(this);
    this.state = {
      restaurants: {},
      listFood: false
    };
  }
  componentDidMount() {
    /*
    let data = "";
    axios.post(URL + LOCATE, data).then(res => {
      console.log(res);
    });
  */
  }
  DoSomething(name) {
    //   will be used to update trip with selected restaurant
    console.log(name);
  }

  GetEats(latitude, longitude) {
    // using lat & long list nearby eats/ sends backend for url + locat, data, uses post function in views.py
    let data = { latitude, longitude };
    console.log(data);
    // post lat & long to backend api to get nearby eats
    return axios.post(URL + LOCATE, data).then(response => {
      this.setState({
        restaurants: JSON.parse(JSON.stringify(response.data)),
        listFood: true
      });
      console.log(response);
      console.log(this.state.restaurants.businesses);
    });
  }

  render() {
    return (
      <div>
        <button
          // get nearby eats via lat & long
          onClick={() =>
            this.GetEats(
              this.props.coords.latitude,
              this.props.coords.longitude
            )
          }
        >
          Get Eats!
        </button>
        <span>
          {/* if restaurant returned, list restaurant name */}
          {this.state.listFood
            ? this.state.restaurants.businesses.map(d => (
                <li key={d.name} onClick={() => this.DoSomething(d.name)}>
                  {d.name}
                </li>
              ))
            : ""}
        </span>
      </div>
    );
  }
  /*         
       {
    (this.state.listFood) ? 
        <ul>
        {
            this.state.restaurants.businesses.map(d => <li key={d.name} onClick={() => this.DoSomething(d.name)}>{d.name}
            </li>)
        }
        </ul>
    : ""
}

      
       */
}
export default Restaurants;
