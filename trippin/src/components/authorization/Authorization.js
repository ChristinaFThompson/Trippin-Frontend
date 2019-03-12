import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { URL, LOGIN, USER } from "./config/Api.js";
import axios from "axios";
import React, { Component } from "react";
import Geolocation from "./geolocation";
import store from "./store";
import { setToken } from "./actions/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleClick(event) {
    var apiBaseUrl = URL;
    var self = this;
    const username = this.state.username;
    const password = this.state.password;
    const payload = { username, password };
    axios
      .post(apiBaseUrl + LOGIN, payload)
      .then(function(response) {
        if (response.status == 200) {
          console.log("Login successfull");
          store.dispatch(setToken(response.data.token));
        } else if (response.status == 204) {
          console.log("Username password do not match");
          alert("username password do not match");
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
        return axios
          .get(URL + USER, {
            headers: { Authorization: "Token " + store.getState().token }
          })
          .then(function(response) {
            var uploadScreen = [];
            uploadScreen.push(
              <Geolocation appContext={self.props.appContext} />
            );
            self.props.appContext.setState({
              loginPage: [],
              uploadScreen: uploadScreen
            });
            self.props.appContext.setState({ user: response.data });
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
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
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  // margin: 15
};
export default Login;
