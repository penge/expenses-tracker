/**
 * Describes the application data and exports a reducer.
 */

export enum FlowType {
  Income,
  Expense
}

export interface Flow {
  category: string,
  date: Date;
  info: string;
  value: number;
}

export interface State {
  email: string;
  loading: boolean;

  categories: string[];
  expenses: Flow[];
  incomes: Flow[];
}

export interface Action {
  type: string
  payload: string | boolean | string[] | Flow[]
}

const reducer = (state: State, action: Action): State => {
  console.log("Dispatching", action);

  switch (action.type) {

  case "setUser":
    return {
      ...state,
      email: action.payload as string,
    };

  case "loading":
    return {
      ...state,
      loading: action.payload as boolean,
    };

  case "addCategory":
    return {
      ...state,
      categories: [
        ...state.categories,
        action.payload as string
      ],
    };

  case "setCategories":
    return {
      ...state,
      categories: action.payload as string[],
    };

  case "setExpenses":
    return {
      ...state,
      expenses: action.payload as Flow[],
    };

  case "setIncomes":
    return {
      ...state,
      incomes: action.payload as Flow[],
    };

  default:
    return state;
  }
};

export default reducer;
