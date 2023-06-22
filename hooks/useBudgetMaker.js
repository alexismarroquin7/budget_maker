"use client";
import { v4 as uuid } from "uuid";
import { useReducer } from "react";

const initialState = {
  income: 5000,
  expenses: [],
  targets: {
    needs: {
      amount: 5000 * .5,
      percent: 50
    },
    wants: {
      amount: 5000 * .3,
      percent: 30
    },
    savings: {
      amount: 5000 * .3,
      percent: 20
    },
  },
  view: {
    groupBy: 'category',
    order: 'asc',
    sortBy: 'amount'
  }
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
    
    case "create_expense_items":
      return {
        ...state,
        expenses: [...state.expenses, ...action.payload.newExpenses]
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
      
    case "update_targets":
      return {
        ...state,
        targets: {
          ...state.targets,
          ...action.payload.changes
        }
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

  const createExpenses = ({needs, wants, savings}) => {

    const total = needs + wants + savings;

    const newExpenses = [];

    
    for (let i = 0; i < total; i++){
      const newExpense = {
        id: uuid(),
        name: "",
        // category: "needs" || "wants" || "savings"
        amount: 0
      }

      if(needs > 0) {
        
        newExpenses.push({
          ...newExpense,
          category: "needs"
        });
        needs--;
      }
      
      if(wants > 0) {
        
        newExpenses.push({
          ...newExpense,
          category: "wants"
        });
        wants--;
      }
      
      if(savings > 0) {
        
        newExpenses.push({
          ...newExpense,
          category: "savings"
        });
        savings--;
      }
      

    }


    return dispatch({
      type: "create_expense_items",
      payload: {
        newExpenses
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

  const updateTargets = (changes) => {
    return dispatch({
      type: "update_targets",
      payload: {
        changes
      }
    })
  }

  const getExpenseCategorySum = (category) => {
    const validCategories = new Set(['needs', 'wants', 'savings']);
    
    if (!validCategories.has(category)) {
      throw Error(`unkown category: ${category}`);
    }

    let sum = {
      amount: 0,
      percent: 0
    }

    state.expenses
    .forEach(expense => {
      if(expense.category === category){
        sum.amount += expense.amount;
        sum.percent += ((expense.amount / state.income) * 100);
      }
    })

    return sum;
  }
  
  return {
    state,
    dispatch,
    setIncome,
    createExpense,
    createExpenses,
    updateExpense,
    deleteExpense,
    updateTargets,
    getExpenseCategorySum
  }
}