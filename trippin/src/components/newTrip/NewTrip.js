import React, { Component } from "react";
import "./NewTrip.css";
// import { Link, Route } from "react-router-dom";

export class NewTrip extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="trip-icon">
          <a
            className="fas fa-plus-square"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:thomp.christina@gmail.com"
          />
        </div>
        <main />
      </div>
    );
  }
}

export default NewTrip;
