import { useState } from "react";
import { useForm } from "@/hooks"

import {
  Edit as EditIcon,
  Check as CheckIcon,
  KeyboardArrowDown
} from "@mui/icons-material";

import styles from "./index.module.css";
import { formatCurrency } from "@/utils";

export const Targets = ({ income, targets, updateTargets }) => {
  
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const onSubmit = () => {
    updateTargets({
      needs: {
        percent: Number(formValues.needs_percent),
        amount: income * (Number(formValues.needs_percent)/100)
      },
      wants: {
        percent: Number(formValues.wants_percent),
        amount: income * (Number(formValues.wants_percent)/100)
      },
      savings: {
        percent: Number(formValues.savings_percent),
        amount: income * (Number(formValues.savings_percent)/100)
      },
    })
  }
  
  const { formValues, handleChange, handleSubmit } = useForm(
    {
      needs_percent: targets.needs.percent ? targets.needs.percent : null,
      wants_percent: targets.wants.percent ? targets.wants.percent : null,
      savings_percent: targets.savings.percent ? targets.savings.percent : null
    },
    onSubmit
  );
  
  const [editing, setEditing] = useState(false);

  return (
  <div
    className="card"
  >
    <div
      className={styles.summary}
    >
      <h2
        className={`${styles.summary_title} ${open ? styles.summary_title_open : ""}`}
      >
        Targets
      </h2>

      <button
        onClick={toggleOpen}
        className={styles.button}
      >
        <KeyboardArrowDown
          className={`${styles.carrot} ${open ? styles.carrot_open : ""}`}
        />
      </button>
    </div>

    {/* HIDDEN BY DEFAULT */}
    <form
      className={`${styles.details} ${open ? "" : styles.details_hidden}`}
      onSubmit={handleSubmit}
    >

      <div
        className={styles.edit_button_container}
      >
          {editing ? (
          <button
            className={"icon_button"}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
              setEditing(false);
            }}
          > 
            <CheckIcon fontSize="inherit"/>
          </button>
          ):( 
          <button
            className={"icon_button"}
            type="button"
            onClick={() => {
              setEditing(true);
            }}
          > 
            <EditIcon fontSize="inherit"/>
          </button>
          )}
      </div>


      <div
        className={styles.target_row}
      >
        <h3
          className={styles.target_row_title}
        >Needs</h3>

        <div
          className={styles.target_row_bottom}
        >
          <label
            className={styles.target_row_percent_label}
          >
            {formValues.needs_percent}%
          </label>
          <p
            className={styles.target_row_amount_label}
          >${formatCurrency(income * (formValues.needs_percent/100))}</p>
        </div>
        
        <input
          type="range" 
          className={styles.range}
          name="needs_percent"
          value={formValues.needs_percent}
          onChange={handleChange}
          step={5}
          min={0}
          max={100}
          disabled={!editing}
        />
      </div>
      
      <div
        className={styles.target_row}
      >
        <h3
          className={styles.target_row_title}
        >Wants</h3>

        <div
          className={styles.target_row_bottom}
        >
          <label
            className={styles.target_row_percent_label}
          >
            {formValues.wants_percent}%
          </label>
          <p
            className={styles.target_row_amount_label}
          >${formatCurrency(income * (formValues.wants_percent/100))}</p>
        </div>
        
        <input
          type="range" 
          className={styles.range}
          name="wants_percent"
          value={formValues.wants_percent}
          onChange={handleChange}
          step={5}
          min={0}
          max={100}
          disabled={!editing}
        />
      </div>
      
      <div
        className={styles.target_row}
      >
        <h3
          className={styles.target_row_title}
        >Savings</h3>

        <div
          className={styles.target_row_bottom}
        >
          <label
            className={styles.target_row_percent_label}
          >
            {formValues.savings_percent}%
          </label>
          <p
            className={styles.target_row_amount_label}
          >${formatCurrency(income * (formValues.savings_percent/100))}</p>
        </div>
        
        <input
          type="range" 
          className={styles.range}
          name="savings_percent"
          value={formValues.savings_percent}
          onChange={handleChange}
          step={5}
          min={0}
          max={100}
          disabled={!editing}
        />
      </div>

    </form>



  </div>
  )
}