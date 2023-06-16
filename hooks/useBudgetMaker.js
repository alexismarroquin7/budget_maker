"use client";
import { v4 as uuid } from "uuid";
import { useEffect, useReducer } from "react";

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
    
    case "update_expense_item":
      const newExpenseList = state.expenses.map(expense => {
        if(expense.id === action.payload.id) {
          expense = {
            ...expense,
            ...action.payload.changes
          }
        }

        return expense;
      })
      return {
        ...state,
        expenses: newExpenseList
      }
    
    case "delete_expense_item":
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload.id)
      }
        
    default: throw Error(`unknown action.type: ${action.type}`);
  }
}

export const useBudgetMaker = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   console.log(state);
  // }, [state])

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
      category: category,
      amount: 0
    }

    return dispatch({
      type: "create_expense_item",
      payload: {
        newExpense
      }
    })
  }
  
  const updateExpense = (id, changes) => {

    return dispatch({
      type: "update_expense_item",
      payload: {
        id,
        changes
      }
    })

  }

  const deleteExpense = (id) => {
    return dispatch({
      type: "delete_expense_item",
      payload: {
        id
      }
    })
  }

  return {
    state,
    dispatch,
    setIncome,
    createExpense,
    updateExpense,
    deleteExpense
  }
}