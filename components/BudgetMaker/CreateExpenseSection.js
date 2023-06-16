import styles from "./CreateExpenseSection.module.css";

export const CreateExpenseSection = ({createExpense}) => {
  return (
  <div
    className={styles.container}
  >
    <button
      className={`${styles.create_expense_button}`}
      onClick={(e) => {
        e.preventDefault();
        createExpense('needs');
      }}
    >+ Need</button>
    <button
      className={`${styles.create_expense_button}`}
      onClick={(e) => {
        e.preventDefault();
        createExpense('wants');
      }}
    >+ Want</button>
    <button
      className={`${styles.create_expense_button}`}
      onClick={(e) => {
        e.preventDefault();
        createExpense('savings');
      }}
    >+ Saving</button>
  </div>
  )
}