import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
import { URL, REGISTER } from "./config/Api.js";
import axios from "axios";
import store from "./store";
import { setToken } from "./actions/index";
import Geolocation from "./geolocation";

class Login extends Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: "",
      isAuth: false
    };
  }
  handleClick(event) {
    const username = this.state.username;
    const password1 = this.state.password1;
    const password2 = this.state.password2;
    const email = this.state.email;
    const payload = { username, password1, password2, email };
    const self = this;
    return axios
      .post(URL + REGISTER, payload)
      .then(function(response) {
        store.dispatch(setToken(response.data.key));
        var uploadScreen = [];
        uploadScreen.push(<Geolocation appContext={self.props.appContext} />);
        self.props.appContext.setState({
          loginPage: [],
          uploadScreen: uploadScreen
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
            <AppBar title="Register" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your email"
              floatingLabelText="email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password1: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Confirm Password"
              onChange={(event, newValue) =>
                this.setState({ password2: newValue })
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
  margin: 15
};
export default Login;
