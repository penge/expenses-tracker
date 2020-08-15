import React, { useState, useContext } from "react";
import { AppContext } from "../state/StateProvider";
import api from "../api";

import {
  useHistory,
} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import PersonIcon from "@material-ui/icons/Person";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    background: "#357a38"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // To show loading screen or to dispatch successful registration
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (state?.loading || !email || !password) {
      return;
    }

    // Start the loading spinner
    dispatch({
      type: "loading",
      payload: true
    });

    const registered = await api.signup(email, password); // localStorage

    // Stop the loading spinner
    dispatch({
      type: "loading",
      payload: false
    });

    // User is NOT registered (maybe already exists)
    if (!registered) {
      setEmail("");
      setPassword("");

      return false;
    }

    // User is registered
    dispatch({
      type: "setUser",
      payload: email
    });

    // Go to "/" on successful registration
    history.replace("/");
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign Up</Typography>

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
            Create account
          </Button>

          <Grid container>
            <Grid item>
              <Link href="/sign-in">
                {"Having an account? Sign in."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Signup;
