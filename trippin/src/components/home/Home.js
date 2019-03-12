import React, { Component } from "react";
import Geolocation from "../../geolocation";
// import Restaurants from "./restaurants";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
    this.getInnerRef = this.getInnerRef.bind(this);
    this.getLocation = this.getLocation.bind(this);
    // this.handleLogIn = this.handleLogIn.bind(this);
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
      <div className="">
        <div />
        <div className="location">
          <main>
            <Geolocation ref={getInnerRef} />
            <button onClick={getLocation}>Update your location!</button>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;

// load location component
// render activity component
