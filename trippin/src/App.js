import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./tripsummary.css";

import Geolocation from "./geolocation";
// import axios from "axios";
//import Restaurants from "./components/restaurants";
// import tripsummary from "./tripsummary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
    this.getInnerRef = this.getInnerRef.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }
  innerRef;
  getInnerRef(ref) {
    this.innerRef = ref;
  }

  getLocation() {
    this.innerRef && this.innerRef.getLocation();
  }

  // create seperate login file, app component should be a template
  render() {
    const { getInnerRef, getLocation } = this;
    return (
      <div className="backgroundImg">
        <header className="App-header">
          <nav>
            <Link className="home" to="/">
              Trippin'
            </Link>
          </nav>
        </header>
        <div>
          <span className="tag-line">
            {" "}
            Sharing memories one trip at a time!
          </span>
        </div>
        <div className="location">
          <main>
            <Geolocation ref={getInnerRef} />
            <button onClick={getLocation}>Update your location!</button>
            {/* <Link exact path="/restaurants" Component={Restaurants} /> </Link> */}
            {/* <button onClick={restaurants}> restaurants</button> */}
            {/* <Restaurants /> */}
          </main>
        </div>
      </div>
    );
  }
}

export default App;

// Link - a component for setting the URL and providing navigation between different components
// in our app without triggering a page refresh. It takes a to property, which sets the URL to whatever path is defined within it.
// Link can also be used inside of any component that is connected to a Route

// Route - a component that renders a specified component (using either render or component)
// based on the current url (path) we're at. path should probably match a <Link to=""> defined somewhere.

// https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
