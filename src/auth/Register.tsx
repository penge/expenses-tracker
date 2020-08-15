import React, { createRef, useState, useContext } from "react";
import { AppContext } from "../state/StateProvider";
import api from "../api";

import {
  useHistory,
} from "react-router-dom";

function Register() {
  const history = useHistory();

  // Inputs
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  // To display an error on unsuccessful registration
  const [error, setError] = useState(false);

  // To show loading screen or to dispatch successful registration
  const { state, dispatch } = useContext(AppContext);

  const register = async () => {
    if (state?.loading) {
      console.log("Registration is already in progress.");
      return;
    }

    // Start the loading spinner
    dispatch({
      type: "loading",
      payload: true
    });

    const email = emailRef?.current?.value as string;
    const password = passwordRef?.current?.value as string;

    const registered = await api.signup(email, password); // localStorage

    // Stop the loading spinner
    dispatch({
      type: "loading",
      payload: false
    });

    // User is NOT registered (maybe already exists)
    if (!registered) {
      setError(true); // show error message
      return;
    }

    // User is registered
    dispatch({
      type: "login",
      payload: email
    });

    // Go to "/" on successful registration
    history.replace("/");
  };

  return (
    <div>
      <h1>Register</h1>
      <input type="text" id="email" name="email" ref={emailRef} /><br />
      <input type="password" id="password" name="password" ref={passwordRef} /><br />
      <input type="button" value="Register" onClick={() => register()} />
      {error && <span>Error!</span>}
    </div>
  );
}

export default Register;
