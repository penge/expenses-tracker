import React from "react";
import AddFlow from "./partials/AddFlow";
import { FlowType } from "../state/reducer";

export default function AddIncome() {
  return (
    <AddFlow flowType={FlowType.Income} buttonColor="primary" />
  );
}
