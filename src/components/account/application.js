import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PasswordReset from "./pass-reset";
import SignIn from "./signin";
import SignUp from "./signup";
import Home from '../dashboard/home';
import {
    withStyles
  } from "@material-ui/core";
import { UserContext } from "../../providers/UserProvider";

const styles = (theme) => ({

});

function Application() {
    const user = useContext(UserContext);
    return (
        user ? 
        <Home />
        :
        <Router>
          <Switch>
            <Route path="signup">
              <SignUp />
            </Route>
            <Route path="/">
              <SignIn />
            </Route> 
            <Route path="pass-reset">
              <PasswordReset />
            </Route>
          </Switch>            
        </Router>
    );
}

export default withStyles(styles)(Application);