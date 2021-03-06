import axios from "axios";
import _ from "lodash";
import store from "../store";
import { setToken } from "../actions";
import { URL, LOGIN } from "../config/Api";
import { REGISTER } from "../config/Api";

// uses axios to post to our /auth backend and then dispatch the returned token toredux store.

export function InvalidCredentialsException(message) {
  this.message = message;
  this.name = "InvalidCredentialsException";
}

export function login(username, password) {
  return axios
    .post(URL + LOGIN, {
      username,
      password
    })
    .then(function(response) {
      store.dispatch(setToken(response.data.token));
    })
    .catch(function(error) {
      if (_.get(error, "response.status") === 400) {
        throw new InvalidCredentialsException(error);
      }
      throw error;
    });
}

export function loggedIn() {
  return store.getState().token !== null;
}
