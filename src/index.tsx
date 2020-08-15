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
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Register from "./auth/Register";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <Switch>
          {/* Private routes */}
          <PrivateRoute exact path="/" component={App} />

          {/* Public routes */}
          <Route exact path="/login" component={Login} />         {/* could be also signin */}
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />   {/* could be also signup */}
        </Switch>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
