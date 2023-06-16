import { useForm } from "@/hooks"
import styles from "./BudgetTargetSection.module.css";

export const BudgetTargetSection = ({income}) => {
  
  const onSubmit = () => {

  }
  
  const { formValues, handleChange } = useForm(
    {
      needs_percent: 50,
      wants_percent: 30,
      savings_percent: 20
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
      >V</span>
      Targets
    </button>

    {/* HIDDEN BY DEFAULT */}
    <div
      className={`${styles.details} ${styles.details_hidden}`}
    >

      <div
        className={styles.target_row}
      >
        <p>Needs</p>
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
          />
        </label>
      </div>
      
      <div
        className={styles.target_row}
      >
        <p>Wants</p>
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
          />
        </label>
      </div>
      
      <div
        className={styles.target_row}
      >
        <p>Savings</p>
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
          />
        </label>
      </div>

    </div>



  </div>
  )
}