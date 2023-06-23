import { useState } from "react";
import { formatCurrency } from "@/utils";

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Close as CloseIcon
} from '@mui/icons-material';

import styles from "./index.module.css";

const initialEditing = false;

const initialFormValues = {
  name: "",
  amount: "0.00"
}

function insertDecimal(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string.");
  }

  const decimalIndex = string.length - 2;
  const result = string.slice(0, decimalIndex) + "." + string.slice(decimalIndex);

  return result;
}


export const ExpenseCard = ({ expense, income, updateExpense, deleteExpense }) => {
  const [editing, setEditing] = useState(initialEditing);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });

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
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div
            className={styles.form_top}
          >
            <button
              className={"icon_button"}
              type="button"
            >
              <DeleteIcon 
                fontSize="inherit"
                onClick={() => {
                  deleteExpense(expense.id);
                }}
              />
            </button>
            <button
              className={"icon_button"}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setEditing(false);
                setFormValues({
                  ...initialFormValues,
                  name: expense.name,
                  amount: expense.amount
                });
              }}
            >
              <CloseIcon fontSize="inherit"/>
            </button>
          </div>
          
          <div
            className={styles.form_middle}
          >
            <label
              className={styles.label}
            >Expense Name
              <input 
                className={styles.input}
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
              />
            </label>
            
            <label
              className={styles.label}
            >Amount
              <input 
                className={`${styles.input} ${styles.amount}`}
                name="amount"
                type="number"
                value={formValues.amount}
                onKeyUp={(e) => {
                  
                  const validKeys = new Set([
                    '1','2','3','4','5','6','7','8','9','0','Backspace'
                  ])
                  
                  if(!validKeys.has(e.key)) return;

                  if(e.key === "Backspace") {
                    if(Number(formValues.amount) === 0) return;

                    if(Number(formValues.amount) < .1){
                      setFormValues({
                        ...formValues,
                        amount: "0.00"
                      })
                    } else if(Number(formValues.amount) < 1) {
                      setFormValues({
                        ...formValues,
                        amount: `0.0${formValues.amount[formValues.amount.length-2]}`
                      })
                    } else {
                      let temp = String(formValues.amount).replace('.', '');
                      temp = insertDecimal(`${temp.slice(0, temp.length-1)}`);
                      
                      if(Number(temp) < 1) {
                        temp = `0.${temp[temp.length-2]}${temp[temp.length-1]}`;
                      }

                      setFormValues({
                        ...formValues,
                        amount: temp
                      })
                      
                    }

                  } else {

                    if(Number(formValues.amount) === 0){
  
                      setFormValues({
                        ...formValues,
                        amount: `0.0${e.key}`
                      })
  
                    } else if(Number(formValues.amount) < .1){
  
                      setFormValues({
                        ...formValues,
                        amount: `0.${formValues.amount[formValues.amount.length-1]}${e.key}`
                      })
  
                    } else if(Number(formValues.amount) < 1){
  
                      setFormValues({
                        ...formValues,
                        amount: `${formValues.amount[formValues.amount.length-2]}.${formValues.amount[formValues.amount.length-1]}${e.key}`
                      })
                    } else {
  
                      let temp = String(formValues.amount).replace('.','');
                      temp = insertDecimal(`${temp}${e.key}`);
                      
                      temp = Number(temp) < 1 ? `0.${temp.slice(1, temp.length)}` : temp;

                      setFormValues({
                        ...formValues,
                        amount: temp
                      });
                    }
                  }

                }}
              />
            </label>
          </div>

          <div
            className={styles.form_bottom}
          >
            <button
              className={"icon_button"}
              type="submit"
            >
              Update
            </button>
          </div>
          
          
        </form>
      ) : (
        <div
          className={styles.card}
        >
          <div
            className={styles.card_attr}
          >
            <p className={`${styles.card_attr_text} ${styles.percent}`}>{(((expense.amount / income) * 100)).toFixed(2)}%</p>
            <p className={`${styles.card_attr_text} ${styles.amount}`}>${formatCurrency(expense.amount)}</p>   
          </div>

          <div
            className={styles.card_top}
          
          >
            <h3
              className={styles.card_name}
            >{expense.name === "" ? "Untitled" : expense.name}</h3>    
          </div>

          <div
            className={styles.card_bottom}
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
          
          
          
        </div>
      )}
      

      
      
    </div>
  )
}