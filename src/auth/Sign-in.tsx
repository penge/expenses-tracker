import React, { useState, useContext } from "react";
import { AppContext } from "../state/StateProvider";
import api from "../api";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import {
  useLocation,
  useHistory,
} from "react-router-dom";

interface LocationState {
  from: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signin() {
  const history = useHistory();
  const location = useLocation();
  const { from } = (location.state || { from: { pathname: "/" } }) as LocationState;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // To show loading screen or to dispatch successful login
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (state?.loading || !email || !password) {
      return false;
    }

    // Start the loading spinner
    dispatch({
      type: "loading",
      payload: true
    });

    // Authenticate the user
    const isAuthenticated = await api.signin(email, password); // localStorage behind

    // Stop the loading spinner
    dispatch({
      type: "loading",
      payload: false
    });

    // User is NOT authenticated
    if (!isAuthenticated) {
      return false;
    }

    // User is authenticated
    dispatch({
      type: "setUser",
      payload: email
    });

    history.replace(from); // After successful login, get back to where we came from
    return true;
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign In</Typography>

        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
            disableElevation
          >
            Sign in
          </Button>

          <Grid container>
            <Grid item>
              <Link href="/sign-up">
                {"Don't have an account? Sign Up."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Signin;
