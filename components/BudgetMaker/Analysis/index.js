import styles from "./index.module.css";

export const Analysis = ({income, expenses, targets}) => {
  const toggleOpen = (e) => {
    const parent = e.currentTarget.parentElement
    
    const carrot = parent.querySelector(`.${styles.carrot}`);
    carrot.classList.toggle(styles.carrot_open);
    
    const target_section_button = parent.querySelector(`.${styles.section_button}`);
    target_section_button.classList.toggle(styles.section_button_open);

    const details = parent.querySelector(`.${styles.details}`);
    details.classList.toggle(styles.details_hidden)
  }

  return (
  <div
    className={styles.section}
  >
    
    <button
      onClick={toggleOpen}
      className={styles.section_button}
    >
      <span
        className={styles.carrot}
      >v</span>
      Analysis
    </button>

    {/* HIDDEN BY DEFAULT */}
    <div
      className={`${styles.details} ${styles.details_hidden}`}
    >
      <div
        className={`${styles.card}`}   
      >
        <h4>Total Expenses</h4>
        <p>Count: {expenses.length}</p>
        <p>Amount: {expenses.reduce((acc,curr) => {
          return acc + curr.amount;
        }, 0)}</p>
        <p>Percent: {(((expenses.reduce((acc,curr) => {
          return acc + curr.amount;
        }, 0)) / income) * 100).toFixed(2)}{'%'}</p>
      
        <div
          className={styles.income_bar}
        >
          
        </div>
      
      </div>


    </div>
  </div>
  )
}