import React from "react";
import { Redirect } from "react-router-dom";

function Signout() {
  // Remove email from localStorage
  localStorage.removeItem("email");

  // Redirect to /sign-in
  return (<Redirect to="/sign-in" />);
}

export default Signout;
