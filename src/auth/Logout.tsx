import React from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  // Remove email from localStorage
  localStorage.removeItem("email");

  // Redirect to /login
  return (<Redirect to="/login" />);
}

export default Logout;
