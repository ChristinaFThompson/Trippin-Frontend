import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { login } from "./util/Auth";
import { register } from "./register";
var apiBaseUrl = "http://localhost:4000/admin/";

/* <Route />  => SETUP ROUTES 
<Link />  => ALLOWS US TO LINK TO A ROUTE 
<Switch />  => ALLOWS US TO SWITCH BETWEEN ROUTES, NESTED ROUTES/COMPLEX ROUTES */

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  // create seperate login file, app component should be a template
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
          <div className="container" />
        </main>
      </div>
    );
  }
}
const style = {
  margin: 15
};

export default Login;
