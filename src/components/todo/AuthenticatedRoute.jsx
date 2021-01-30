import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationService from './AuthenticationService.js';
function AuthenticationRoute ({component: Component, ...rest}) {
    const islog=AuthenticationService.isUserLoggedIn();
    return (
      <Route
        {...rest}
        render={(props) => islog === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  export default AuthenticationRoute