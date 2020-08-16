import React, { useContext } from "react";
import { Flow } from "../state/reducer";
import { AppContext } from "../state/StateProvider";
import Title from "./partials/Title";
import { formatCurrency, sumFlow } from "./helpers";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

const getTotalString = (flows: Flow[], name: string): string => {
  const flowsByCategory = flows.filter(item => item.category === name);
  const sum = sumFlow(flowsByCategory);
  return (sum === 0 ? "" : formatCurrency(sum));
};

export default function Categories() {
  const { state } = useContext(AppContext);
  const { categories, incomes, expenses } = state;

  // Map categories for table
  const rows = categories.map((name, index) => ({
    id: index,
    name,
    income: getTotalString(incomes, name),
    expense: getTotalString(expenses, name),
  })).sort((a, b) => a.name > b.name ? 1 : -1);

  return (
    <>
      <Title>Categories</Title>

      {rows.length === 0 &&
        <Typography>
          You have no categories.
        </Typography>}

      {rows.length > 0 &&
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Total Income</TableCell>
              <TableCell>Total Expense</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.income}</TableCell>
                <TableCell>{row.expense}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>}
    </>
  );
}
