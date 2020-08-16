import React, { useContext } from "react";
import { AppContext } from "../state/StateProvider";
import PieFlow from "./partials/PieFlow";

export default function Incomes() {
  const { state } = useContext(AppContext);
  const { incomes, categories } = state;

  return (
    <PieFlow title="Incomes" flows={incomes} categories={categories} />
  );
}
