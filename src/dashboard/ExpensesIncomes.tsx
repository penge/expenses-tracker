import React, { useContext } from "react";
import { AppContext } from "../state/StateProvider";
import { Flow, FlowType } from "../state/reducer";
import Title from "./partials/Title";
import { formatDate, formatCurrency } from "./helpers";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  [FlowType.Income]: {
    color: "#2a9d8f",
    fontWeight: "bold"
  },
  [FlowType.Expense]: {
    color: "#ff1744",
    fontWeight: "bold"
  }
}));

// Maps expenses and incomes for table
const mapFlowFactory = (type: FlowType) => (flow: Flow, index: number) => ({
  id: `${type}-${index}`, // add id
  ...flow,
  type, // add type (Income or Expense)
  sign: type === FlowType.Income ? "+" : "-",
  date: formatDate(flow.date), // format Date to a string
});

export default function ExpensesIncomes() {
  const { state } = useContext(AppContext);
  const { incomes, expenses } = state;

  // Map incomes and expenses for table
  const rows = [
    ...incomes.map(mapFlowFactory(FlowType.Income)),
    ...expenses.map(mapFlowFactory(FlowType.Expense)),
  ].sort((a, b) => b.date > a.date ? 1 : -1);

  const classes = useStyles();

  return (
    <>
      <Title>Expenses & Incomes</Title>

      {rows.length === 0 &&
        <Typography>
          You have no expenses or incomes.
        </Typography>}

      {rows.length > 0 &&
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Info</TableCell>
              <TableCell align="right">Movement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.info}</TableCell>
                <TableCell align="right" className={classes[row.type]}>{row.sign}{formatCurrency(row.value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>}
    </>
  );
}
