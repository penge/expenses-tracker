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

export enum ActionType {
  SetUser,
  Loading,

  AddCategory,
  AddIncome,
  AddExpense,

  SetCategories,
  SetExpenses,
  SetIncomes
}

export interface Action {
  type: ActionType
  payload: string | boolean | string[] | Flow | Flow[]
}

const reducer = (state: State, action: Action): State => {
  console.log("Dispatching", action);

  switch (action.type) {

  case ActionType.SetUser:
    return {
      ...state,
      email: action.payload as string,
    };

  case ActionType.Loading:
    return {
      ...state,
      loading: action.payload as boolean,
    };

  case ActionType.AddCategory:
    return {
      ...state,
      categories: [
        ...state.categories,
        action.payload as string
      ],
    };

  case ActionType.AddIncome:
    return {
      ...state,
      incomes: [
        ...state.incomes,
        action.payload as Flow
      ],
    };

  case ActionType.AddExpense:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload as Flow
      ],
    };

  case ActionType.SetCategories:
    return {
      ...state,
      categories: action.payload as string[],
    };

  case ActionType.SetExpenses:
    return {
      ...state,
      expenses: action.payload as Flow[],
    };

  case ActionType.SetIncomes:
    return {
      ...state,
      incomes: action.payload as Flow[],
    };

  default:
    return state;
  }
};

export default reducer;
