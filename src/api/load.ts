import { getCategories } from "./categories";
import { getFlows } from "./flows";
import { FlowType, Flow } from "../state/reducer";

interface Loaded {
  email: string;
  categories: string[];
  expenses: Flow[];
  incomes: Flow[];
}

export default function load(): Loaded {
  const email = localStorage.getItem("email") as string;

  const categories = getCategories(email);
  const expenses = getFlows(email, FlowType.Expense);
  const incomes = getFlows(email, FlowType.Income);

  return {
    email,
    categories,
    expenses,
    incomes,
  };
}
