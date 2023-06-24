import { ExpenseCard } from "../ExpenseCard";

import {
  KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';

import styles from "./index.module.css";
import { useState } from "react";

export const ToggleCategory = ({
  category,
  expenses,
  income,
  updateExpense,
  deleteExpense,
  getExpenseCategorySum
}) => {
  const [open, setOpen] = useState(false);
  
  const toggleOpen = () => setOpen(!open);

  const getCount = (category) => {
    return expenses.filter(expense => expense.category === category).length;
  }

  return (
    <div
      className={`card`}
    >
      <div
        className={styles.summary}
      >
        <div
          className={styles.summary_attrs}
        >
          <span
            className={`${styles.percent}`}
          >{getExpenseCategorySum(category).percent.toFixed(2)}{'%'}</span>
          
          <span
            className={`${styles.amount}`}
          >${getExpenseCategorySum(category).amount.toFixed(2)}</span>

        </div>
        <h2
          className={`${styles.summary_title} ${open ? styles.summary_title_open : ""}`}
        >
          {category === "needs" && "Needs"}
          {category === "wants" && "Wants"}
          {category === "savings" && "Savings"}
          
          <span
            className={`${styles.count}`}
          >{getCount(category)}</span>  
        </h2>


        <button
          className={`${styles.toggle_category_button} ${open ? styles.toggle_category_button_open : ""}`} 
          onClick={toggleOpen}
        >  
            {/* {open ? "Hide" : "Show"} List */}
          <KeyboardArrowDownIcon
            fontSize="inherit"
            className={`${styles.toggle_category_arrow} ${open ? styles.toggle_category_arrow_open : ""}`} 
          />
        </button>
        
      </div>
      
      
      {/* LIST */}
      <div className={`${styles.expense_category_list} ${open ? "" : styles.expense_category_list_hidden}`}>
        {expenses.length === 0 ? (
          <p
            className={styles.empty_list_text}
          >Empty list</p>
        ) : (
          expenses
          .map(expense => {
            return <ExpenseCard
              key={expense.id}
              expense={expense}
              updateExpense={updateExpense}
              income={income}
              deleteExpense={deleteExpense}
            />
          }) 
        )}
      </div>
    </div>
  )
}