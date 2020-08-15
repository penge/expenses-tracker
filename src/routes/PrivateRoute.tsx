import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const email = localStorage.getItem("email");

  // A dummy check of a succesfull login
  const isAuthenticated = typeof email === "string" &&
    email.length > 0 &&
    email.indexOf("@") > 0;

  return isAuthenticated ? (<Route path={props.path} exact={props.exact} component={props.component} />) :
    (<Redirect to={{ pathname: "/sign-in", state: { from: props.path }}} />); // not authenticated
};

export default PrivateRoute;
