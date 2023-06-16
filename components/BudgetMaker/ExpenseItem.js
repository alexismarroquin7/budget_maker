import { useState } from "react";
import styles from "./ExpenseItem.module.css";
import {
  Edit as EditIcon,
  Check as CheckIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

const initialEditing = false;
const initialFormValues = {
  name: "",
  amount: 0
}

export const ExpenseItem = ({ expense, income, updateExpense, deleteExpense }) => {
  const [editing, setEditing] = useState(initialEditing);
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = e => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    updateExpense(expense.id, {
      name: formValues.name.trim(),
      amount: Number(formValues.amount)
    });
    setEditing(false);
    setFormValues(initialFormValues);
  }

  return (
    <div
      className={styles.expense_item}
    >

      {editing ? (
        <form
          className={styles.editing_container}
          onSubmit={handleSubmit}
        >
          <label
            className={styles.editing_label}
          >name
            <input 
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
            />
          </label>
          <label
            className={styles.editing_label}
          >amount
            <input 
              name="amount"
              type="number"
              value={formValues.amount}
              onChange={handleChange}
              min={0}
            />
          </label>

          <button
            className={styles.edit_icon}
            type="submit"
          >
            <CheckIcon fontSize="inherit"/>
          </button>
          
          <div
            className={styles.bottom_container}
          >
            <button
              className={styles.edit_icon}
              type="button"
              onClick={() => {
                deleteExpense(expense.id);
              }}
            >
              <DeleteIcon fontSize="inherit"/>
            </button>
          </div>
          
          
        </form>
      ) : (
        <div
          className={styles.expense_item_attrs}
        >
          <p>{expense.name === "" ? "Untitled" : expense.name}</p>  
          <p>${expense.amount}</p>      
          <p>{((expense.amount / income) * 100).toFixed(2)}%</p>
          <button
            className={styles.edit_icon}
            onClick={() => {
              setEditing(!editing);
            }}
          >
            <EditIcon fontSize="inherit"/>
          </button>
        </div>
      )}
      

      
      
    </div>
  )
}