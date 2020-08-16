import React, { useContext } from "react";
import Title from "./partials/Title";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppContext } from "../state/StateProvider";
import { formatCurrency, sumFlow } from "./helpers";

const useStyles = makeStyles((theme) => ({
  positive: {
    color: "#2a9d8f"
  },
  negative: {
    color: "#ff1744"
  }
}));

export default function Balance() {
  const { state } = useContext(AppContext);
  const { incomes, expenses } = state;

  const sumIncomes = sumFlow(incomes);
  const sumExpenses = sumFlow(expenses);
  const balance = sumIncomes - sumExpenses;

  const classes = useStyles();

  let balanceClass = ""; // use default color (black) if balance is 0
  if (balance > 0) balanceClass = classes.positive;
  if (balance < 0) balanceClass = classes.negative;

  return (
    <>
      <Title>Balance</Title>
      <Typography component="p" variant="h4" className={balanceClass}>
        {balance > 0 && "+"}{formatCurrency(balance)}
      </Typography>
    </>
  );
}
