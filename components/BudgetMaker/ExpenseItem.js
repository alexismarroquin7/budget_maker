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
    const changes = {
      name: formValues.name.trim(),
      amount: Number(formValues.amount)
    }
    

    updateExpense(expense.id, changes);
    setEditing(false);
    setFormValues(changes);
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
          <div
            className={styles.editing_container_top}
          >
            <button
              className={"icon_button"}
              type="submit"
            >
              <CheckIcon fontSize="inherit"/>
            </button>
          </div>

          <label
            className={styles.editing_label}
          >Name
            <input 
              className={styles.editing_input}
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Untitled"
            />
          </label>
          
          <label
            className={styles.editing_label}
          >Amount
            <input 
              className={styles.editing_input}
              name="amount"
              type="number"
              value={formValues.amount}
              onChange={handleChange}
              min={0}
            />
          </label>

          
          
          <div
            className={styles.bottom_container}
          >
            <button
              className={"icon_button"}
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
          className={styles.card}
        >
          <div
            className={styles.card_top}
          
          >
            
            <button
              className={"icon_button"}
              onClick={() => {
                setEditing(!editing);
              }}
            >
              <EditIcon fontSize="inherit"/>
            </button>
          </div>
          
          <p
            className={styles.card_name}
          >{expense.name === "" ? "Untitled" : expense.name}</p>  
            

          <div
            className={styles.card_bottom}
          >
            <p className={`${styles.card_bottom_text} ${styles.amount}`}>${expense.amount}</p>   
            <p className={`${styles.card_bottom_text} ${styles.percent}`}>{(((expense.amount / income) * 100)).toFixed(0)}%</p>
          </div>
        </div>
      )}
      

      
      
    </div>
  )
}