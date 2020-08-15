import React, { createRef, useContext } from "react";
import { AppContext } from "../state/StateProvider";
import api from "../api";

import {
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";

interface LocationState {
  from: string;
}

function Login() {
  const history = useHistory();
  const location = useLocation();
  const { from } = (location.state || { from: { pathname: "/" } }) as LocationState;

  // Inputs
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  // To display an error on unsuccessful login
  const [error, setError] = useState(false);

  // To show loading screen or to dispatch successful login
  const { state, dispatch } = useContext(AppContext);

  const login = async () => {
    // One Authentication is already in progress, stop here
    if (state?.loading) {
      console.log("Authentication is already in progress.");
      return false;
    }

    // Start the loading spinner
    dispatch({
      type: "loading",
      payload: true
    });

    // Input values
    const email = emailRef?.current?.value as string;
    const password = passwordRef?.current?.value as string;

    // Authenticate the user
    const isAuthenticated = await api.login(email, password); // localStorage behind

    // Stop the loading spinner
    dispatch({
      type: "loading",
      payload: false
    });

    // User is NOT authenticated
    if (!isAuthenticated) {
      setError(true); // show error message
      return false;
    }

    // User is authenticated
    dispatch({
      type: "login",
      payload: email
    });

    history.replace(from); // After successful login, get back to where we came from
    return true;
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" id="email" name="email" ref={emailRef} /><br />
      <input type="password" id="password" name="password" ref={passwordRef} /><br />
      <input type="button" value="Login" onClick={() => login()} />
      {error && <span>Invalid!</span>}

      <br /><br />
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
