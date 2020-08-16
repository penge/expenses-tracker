import React from "react";
import AddFlow from "./partials/AddFlow";
import { FlowType } from "../state/reducer";

export default function AddExpense() {
  return (
    <AddFlow flowType={FlowType.Expense} buttonColor="secondary" />
  );
}
