import { useState } from "react";
import { useForm } from "@/hooks";
import styles from "./index.module.css"
import {
  KeyboardArrowDown as KeyboardArrowDownIcon
} from "@mui/icons-material";
import { formatCurrency } from "@/utils";

export const Income = ({ setIncome, income }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome(Number(formValues.income));
    handleChange({
      target: {
        name: 'income',
        value: Number(formValues.income)
      }
    });
    setOpen(false);
  }

  const { formValues, handleChange, setFormValues } = useForm({income: income ? income : null});

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
  
  <div
    className={styles.card}
  >
    <button
      className={`${styles.card_button} ${open ? styles.card_button_open : "" }`}
      onClick={toggleOpen}
    >
      <KeyboardArrowDownIcon
        fontSize="inherit"
        className={`${styles.card_button_icon} ${open ? styles.card_button_icon_open : "" }`}
      />
      Income
    </button>
    
    {open ? (
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <input
          className={styles.input}
          id="income"
          type="number"
          name="income"
          value={formValues.income}
          onChange={handleChange}
          min={0}
          step="0.1"
        />
        
        <button
          className={styles.form_button}
          type="submit"
        >Apply</button>
        <button
          className={`${styles.form_button} ${styles.secondary}`}
          type="button"
          onClick={(e) => {
            toggleOpen();
            setFormValues({
              income 
            })
          }}
        >Cancel</button>

      </form>
    ) : (
      <div>
        <p
          className={styles.card_bottom_text}
        >${formatCurrency(income)}</p>
      </div>
    )}
  </div>
  )
}