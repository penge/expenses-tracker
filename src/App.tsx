import React, { useEffect, useContext } from "react";
import { AppContext } from "./state/StateProvider";
import { ActionType } from "./state/reducer";
import api from "./api";
import { dispatchDummyData } from "./api/dummy";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Balance from "./dashboard/Balance";
import Expenses from "./dashboard/Expenses";
import Incomes from "./dashboard/Incomes";
import ExpensesIncomes from "./dashboard/ExpensesIncomes";
import Categories from "./dashboard/Categories";
import AddExpense from "./dashboard/AddExpense";
import AddIncome from "./dashboard/AddIncome";
import AddCategory from "./dashboard/AddCategory";

import {
  useLocation,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    background: "#fafafa",
    borderBottom: "1px solid #d5d5d5"
  },
  avatar: {
    margin: theme.spacing(1),
    background: "#202020"
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    paddingBottom: "50px",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  padded: {
    marginTop: "20px"
  },
  break: {
    flexBasis: "100%",
    height: 0,
  }
}));

function App() {
  const location = useLocation();
  const classes = useStyles();

  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (location.search === "?dummy") {
      dispatchDummyData(dispatch);
      return;
    }

    const {
      email,
      categories,
      expenses,
      incomes,
    } = api.load();

    if (email) {
      dispatch({ type: ActionType.SetUser, payload: email });
      dispatch({ type: ActionType.SetCategories, payload: categories });
      dispatch({ type: ActionType.SetExpenses, payload: expenses });
      dispatch({ type: ActionType.SetIncomes, payload: incomes });
    }
  }, [dispatch, location.search]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="sticky" color="transparent" elevation={0} className={classes.bar}>
        <Toolbar>
          <Avatar className={classes.avatar}>
            <AttachMoneyIcon />
          </Avatar>
          <Typography variant="h6" className={classes.title}>
            Expenses Tracker
          </Typography>
          <Button color="inherit" href="sign-out">Sign out</Button>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <Container className={classes.container}>
          <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
            <Grid item>
              <Paper className={classes.paper}>
                <Balance />
              </Paper>
            </Grid>
            <div className={classes.break}></div>

            <Grid item lg={5}>
              <Paper className={classes.paper}>
                <Expenses />
                <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.padded} spacing={2}>
                  <Grid item>
                    <AddExpense />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item lg={5}>
              <Paper className={classes.paper}>
                <Incomes />
                <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.padded} spacing={2}>
                  <Grid item>
                    <AddIncome />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={10} className={classes.padded}>
              <Paper className={classes.paper}>
                <ExpensesIncomes />

                <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.padded} spacing={2}>
                  <Grid item>
                    <AddExpense />
                  </Grid>
                  <Grid item>
                    <AddIncome />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={10} className={classes.padded}>
              <Paper className={classes.paper}>
                <Categories />
                <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.padded} spacing={2}>
                  <Grid item>
                    <AddCategory />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div >
  );
}

export default App;
