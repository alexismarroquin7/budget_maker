import { useState } from "react";
import { useForm } from "@/hooks"


import {
  Edit as EditIcon,
  Check as CheckIcon
} from "@mui/icons-material";

import styles from "./BudgetTargetSection.module.css";

export const BudgetTargetSection = ({ income, targets, updateTargets }) => {
  
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

  const toggleOpen = (e) => {
    const parent = e.currentTarget.parentElement
    
    const carrot = parent.querySelector(`.${styles.carrot}`);
    carrot.classList.toggle(styles.carrot_open);
    
    const target_section_button = parent.querySelector(`.${styles.target_section_button}`);
    target_section_button.classList.toggle(styles.target_section_button_open);

    const details = parent.querySelector(`.${styles.details}`);
    details.classList.toggle(styles.details_hidden)
  }

  const [editing, setEditing] = useState(false);

  return (
  <div
    className={styles.budget_target_section}
  >
    
    <button
      onClick={toggleOpen}
      className={styles.target_section_button}
    >
      <span
        className={styles.carrot}
      >v</span>
      Targets
    </button>

    {/* HIDDEN BY DEFAULT */}
    <form
      className={`${styles.details} ${styles.details_hidden}`}
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
          <p>${income * (formValues.needs_percent/100)}</p>
          <label
            className={styles.target_row_percent_label}
          >
            {formValues.needs_percent}%
            <input
              type="range" 
              name="needs_percent"
              value={formValues.needs_percent}
              onChange={handleChange}
              step={5}
              min={0}
              max={100}
              disabled={!editing}
            />
          </label>
        </div>
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
          <p>${income * (formValues.wants_percent/100)}</p>
          <label
            className={styles.target_row_percent_label}
          >
            {formValues.wants_percent}%
            <input
              type="range" 
              name="wants_percent"
              value={formValues.wants_percent}
              onChange={handleChange}
              step={5}
              min={0}
              max={100}
              disabled={!editing}
            />
          </label>
        </div>

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
          <p>${income * (formValues.savings_percent/100)}</p>
          <label
            className={styles.target_row_percent_label}
          >
            {formValues.savings_percent}%
            <input
              type="range" 
              name="savings_percent"
              value={formValues.savings_percent}
              onChange={handleChange}
              step={5}
              min={0}
              max={100}
              disabled={!editing}
            />
          </label>
        </div>

      </div>

    </form>



  </div>
  )
}