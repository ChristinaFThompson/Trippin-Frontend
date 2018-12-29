import React, { Component } from "react";
import "./home.css";
import ShareLocation from "../ShareLocation/ShareLocation.js";

// this page is where users will see options within 0.2 mile radius
class Home extends Component {
  render() {
    return (
      <div className="share-location">
        <ShareLocation />
      </div>
    );
  }
}

export default Home;
