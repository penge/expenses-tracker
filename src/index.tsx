import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { StateProvider } from "./state/StateProvider";
import PrivateRoute from "./routes/PrivateRoute";

import App from "./App";

import SignIn from "./auth/Sign-in";
import SignOut from "./auth/Sign-out";
import SignUp from "./auth/Sign-up";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <Switch>
          {/* Private routes */}
          <PrivateRoute exact path="/" component={App} />

          {/* Public routes */}
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-out" component={SignOut} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
