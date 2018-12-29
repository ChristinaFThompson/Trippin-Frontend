import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

{
  /* <Route />  => SETUP ROUTES 
<Link />  => ALLOWS US TO LINK TO A ROUTE 
<Switch />  => ALLOWS US TO SWITCH BETWEEN ROUTES, NESTED ROUTES/COMPLEX ROUTES */
}

class App extends Component {
  render() {
    return (
      <div className="backgroundImg">
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Trippin'</p>
        </header>
        {/* <nav>
        <Link to=""></Link>
        <Link to=""></Link>
      </nav>
      <main>
        <Route path="" render={}/>
        {/* // render and component props are two options we can use. */}
        {/* <Route path="" component={}/>
      </main> */}
      </div>
    );
  }
}

export default App;
