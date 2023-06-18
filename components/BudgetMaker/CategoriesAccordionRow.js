import { ExpenseItem } from "./ExpenseItem";
import styles from "./CategoriesAccordionRow.module.css";

export const CategoriesAccordionRow = ({state, category, updateExpense, deleteExpense, getExpenseCategorySum}) => {

  const toggleOpen = (e) => {
    const parent = e.currentTarget.parentElement;
    
    const expense_category_list = parent.querySelector(`.${styles.expense_category_list}`);
    expense_category_list.classList.toggle(styles.expense_category_list_hidden);
    
    const carrot = parent.querySelector(`.${styles.expand_category_button_carrot}`);
    carrot.classList.toggle(styles.expand_category_button_carrot_open);
    
    const button = parent.querySelector(`.${styles.expand_category_button}`);
    button.classList.toggle(styles.expand_category_button_open);
  }

  const getCount = (category) => {
    return state.expenses.filter(expense => expense.category === category).length;
  }

  return (
    <div
      className={styles.row}
    >
      {/* OPEN/CLOSE BUTTON */}
      <button
        className={styles.expand_category_button}
        onClick={toggleOpen}
      >
        <span
          className={styles.expand_category_button_carrot}
        >v</span>
        
        {category === "needs" && "Needs"}
        {category === "wants" && "Wants"}
        {category === "savings" && "Savings"}
        
        <span
          className={styles.category_span}
        >{getCount(category)}</span>
      
      </button>
      
      {/* SUM, PERCENT */}
      <div
        className={styles.category_span_container}
      >
        
        <span
          className={styles.category_span}
        >${getExpenseCategorySum(category).amount}</span>
        
        <span
          className={styles.category_span}
        >{getExpenseCategorySum(category).percent}{'%'}</span>
        
      </div>
      
      {/* LIST */}
      <div className={`${styles.expense_category_list} ${styles.expense_category_list_hidden}`}>
        {state.expenses
        .filter(expense => expense.category === category)
        .sort((a, b) => b.amount - a.amount)
        .map(expense => {
          return <ExpenseItem 
            key={expense.id}
            expense={expense}
            updateExpense={updateExpense}
            income={state.income}
            deleteExpense={deleteExpense}
          />
        })}
      </div>
    </div>
  )
}