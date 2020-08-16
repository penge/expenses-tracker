import React, { useContext } from "react";
import { AppContext } from "../state/StateProvider";
import PieFlow from "./partials/PieFlow";

export default function Expenses() {
  const { state } = useContext(AppContext);
  const { expenses, categories } = state;

  return (
    <PieFlow title="Expenses" flows={expenses} categories={categories} />
  );
}
