import { Dispatch } from "react";
import { Action } from "../state/reducer";

export const dispatchDummyData = (dispatch: Dispatch<Action>) => {
  const oneDayLength = 86400000; // 24 * 60 * 60 * 1000

  const today = new Date();
  const yesterday = new Date(Date.now() - oneDayLength);
  const beforeYesteday = new Date(Date.now() - oneDayLength * 2);

  dispatch({
    type: "setCategories",
    payload: [
      "Entertainment",
      "Meals",
      "Lodging",
      "Travel",
      "Programming",
      "Cooking",
      "Teaching",
    ]
  });

  dispatch({
    type: "setExpenses",
    payload: [
      { category: "Entertainment", value: 400, date: today, info: "Bought PlayStation" },
      { category: "Meals", value: 300, date: yesterday, info: "Roast beef" },
      { category: "Lodging", value: 300, date: beforeYesteday, info: "Hotel near Prague" },
      { category: "Travel", value: 200, date: beforeYesteday, info: "UK-PG return flight" },
    ]
  });

  dispatch({
    type: "setIncomes",
    payload: [
      { category: "Programming", value: 700, date: yesterday, info: "Created Expenses Tracker" },
      { category: "Cooking", value: 200, date: beforeYesteday, info: "Muffins and a chocolate cake" },
      { category: "Teaching", value: 500, date: today, info: "History lecture" },
    ]
  });
};
