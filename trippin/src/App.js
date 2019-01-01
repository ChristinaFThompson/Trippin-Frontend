import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { login } from "./util/Auth";

/* <Route />  => SETUP ROUTES 
<Link />  => ALLOWS US TO LINK TO A ROUTE 
<Switch />  => ALLOWS US TO SWITCH BETWEEN ROUTES, NESTED ROUTES/COMPLEX ROUTES */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="backgroundImg">
        <header>
          <nav>
            <Link className="home" to="/">
              Trippin'
            </Link>
          </nav>
        </header>
        <main>
          <MuiThemeProvider>
            <div>
              <AppBar title="Login" />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event =>
                  login(this.state.username, this.state.password)
                }
              />
            </div>
          </MuiThemeProvider>
          {/* switch to render instead of component when passing props */}
          {/* <Route exact path="/NewTrip" component={() => <NewTrip />} />
          <Route exact path="/EditTrip" component={() => <EditTrip />} />
          <Route exact path="/" component={Home} 
          <Route exact path="/Login" component={() => <LoginPage />} />
          <Route exact path="/ShareLocation" component={() => <ShareLocation />} />
          <Route exact path="/Activity" component={() => <Activity />} />
          <Route exact path="/TripSummary" component={() => <TripSummary />} /> */}

          <div className="container" />
        </main>
      </div>
    );
  }
}
const style = {
  margin: 15
};

export default App;

// Link - a component for setting the URL and providing navigation between different components
// in our app without triggering a page refresh. It takes a to property, which sets the URL to whatever path is defined within it.
// Link can also be used inside of any component that is connected to a Route

// Route - a component that renders a specified component (using either render or component)
// based on the current url (path) we're at. path should probably match a <Link to=""> defined somewhere.

// https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
