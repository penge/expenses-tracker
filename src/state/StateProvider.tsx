import React, { createContext, useReducer, Dispatch } from "react";
import reducer, { State, Action } from "./reducer";

interface StateProviderProps {
  children: React.ReactNode;
}

interface Provided {
  state: State;
  dispatch: Dispatch<Action>;
}

const initialState: State = {
  email: "",
  loading: false,
  categories: [],
  expenses: [],
  incomes: [],
};

export const AppContext = createContext<Provided>({
  state: initialState,
  dispatch: () => {},
});

const StateProvider = ({ children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Display a spinning wheel if there's a loading in progress.
  document.body.classList.toggle("loading", state?.loading === true);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { StateProvider };
