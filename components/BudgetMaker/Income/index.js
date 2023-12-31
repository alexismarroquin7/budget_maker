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

  const toggleOpen = (e) => {
    // if(!open) {
    //   e.currentTarget.parentNode.parentNode.querySelector('input[name="income"]').focus();
    // }
    setOpen(!open);
  }

  return (
  
  <div
    className={"card"}
  >
    <div
      className={styles.card_top}
    >
      <div
        className={styles.card_top_left}
      >
        <p
          className={`${styles.card_label} ${open ? styles.card_label_open : ""}`}
        >
          Income
        </p>
        <p
          className={`${styles.card_amount} ${open ? styles.card_amount_open : ""}`}
        >${formatCurrency(income)}</p>
      </div>

      <button
        className={`${styles.card_button} ${open ? styles.card_button_open : "" }`}
        onClick={toggleOpen}
      >
        <KeyboardArrowDownIcon
          fontSize="inherit"
          className={`${styles.card_button_icon} ${open ? styles.card_button_icon_open : "" }`}
        />
      </button>
    </div>
    
    <form
    onSubmit={handleSubmit}
    className={`${styles.form} ${open ? "" : styles.form_hidden}`}
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
      
      <div
        className={styles.form_actions}
      >
        <button
          className={`button button--contained ${styles.form_button}`}
          type="submit"
          >Apply</button>
        <button
          className={`button button--outlined ${styles.form_button}`}
          type="button"
          onClick={(e) => {
            toggleOpen();
            setFormValues({
              income 
            })
          }}
        >Cancel</button>
      </div>

    </form>

  </div>
  )
}