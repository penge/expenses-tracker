import { Dispatch } from "react";
import { Action, ActionType } from "../state/reducer";

export const dispatchDummyData = (dispatch: Dispatch<Action>) => {
  const oneDayLength = 86400000; // 24 * 60 * 60 * 1000

  const today = new Date();
  const yesterday = new Date(Date.now() - oneDayLength);
  const beforeYesteday = new Date(Date.now() - oneDayLength * 2);

  dispatch({
    type: ActionType.SetCategories,
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
    type: ActionType.SetExpenses,
    payload: [
      { category: "Entertainment", value: 400, date: today, info: "New PlayStation" },
      { category: "Lodging", value: 300, date: beforeYesteday, info: "Hotel near Prague" },
      { category: "Entertainment", value: 50, date: yesterday, info: "Cinema ticket" },
      { category: "Travel", value: 200, date: beforeYesteday, info: "Flight tickets" },
    ]
  });

  dispatch({
    type: ActionType.SetIncomes,
    payload: [
      { category: "Programming", value: 700, date: yesterday, info: "Created Expenses Tracker" },
      { category: "Cooking", value: 200, date: beforeYesteday, info: "Muffins and a chocolate cake" },
      { category: "Teaching", value: 500, date: today, info: "History lecture" },
    ]
  });
};
