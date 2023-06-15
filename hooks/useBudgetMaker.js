"use client";
import { v4 as uuid } from "uuid";
import { useReducer } from "react";

const initialState = {
  income: 1000,
  expenses: []
}

const reducer = (state, action) => {
  switch (action.type){
    case "set_income":
      return {
        ...state,
        income: action.payload.newIncome
      }
    case "create_expense_item":
      return {
        ...state,
        expenses: [...state.expenses, action.payload.newExpense]
      }
        
    default: throw Error(`unknown action.type: ${action.type}`);
  }
}

export const useBudgetMaker = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIncome = (newIncome) => {
    return dispatch({
      type: "set_income",
      payload: {
        newIncome
      }
    })
  }

  const createExpense = (category = "") => {

    const newExpense = {
      id: uuid(),
      name: "",
      category: category
    }

    return dispatch({
      type: "create_expense_item",
      payload: {
        newExpense
      }
    })
  }

  return {
    state,
    dispatch,
    setIncome,
    createExpense
  }
}