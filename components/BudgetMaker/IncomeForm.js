import { useEffect, useState } from "react";
import { useForm } from "@/hooks";
import styles from "./IncomeForm.module.css"
import {
  Edit as EditIcon,
  Check as CheckIcon
} from "@mui/icons-material";

export const IncomeForm = ({ setIncome, income }) => {
  const [editing, setEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome(Number(formValues.income));
    handleChange({
      target: {
        name: 'income',
        value: Number(formValues.income)
      }
    });
    setEditing(false);
  }

  const { formValues, handleChange } = useForm({income: income ? income : null});

  const toggleEditing = () => {
    setEditing(!editing);
  }

  return (
  <div
    className={styles.wrapper}
  
  >
    {editing ? (
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div
          className={styles.card_top}
        >
          <label
            className={styles.label}
            htmlFor="income"
          >
            Income
          </label>
          <button
            type="submit"
            className={styles.icon_button}
          >
            <CheckIcon fontSize="inherit" />
          </button>
        </div>
        
        <input
          className={styles.input}
          id="income"
          type="number"
          name="income"
          value={formValues.income}
          onChange={handleChange}
          min={0}
        />
        
      </form>

    ) : (
      <div
        className={styles.card}
        >
        <div
          className={styles.card_top}
        >
          <h3
            className={styles.card_title}
          >Income</h3>
          <button
            className={styles.icon_button}
            onClick={toggleEditing}
          >
            <EditIcon fontSize="inherit"/>    
          </button>
        </div>

        <p
          className={styles.card_bottom_text}
        >{income}</p>
      </div>
    )}  
  </div>
  )
}