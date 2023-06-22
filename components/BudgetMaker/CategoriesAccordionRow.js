import { ExpenseItem } from "./ExpenseItem";
import styles from "./CategoriesAccordionRow.module.css";

export const CategoriesAccordionRow = ({state, category, updateExpense, deleteExpense, getExpenseCategorySum}) => {

  const toggleOpen = (e) => {
    const parent = e.currentTarget.parentElement;
    
    const expense_category_list = parent.querySelector(`.${styles.expense_category_list}`);
    expense_category_list.classList.toggle(styles.expense_category_list_hidden);
    
    const arrow = parent.querySelector(`.${styles.more_button_arrow}`);
    arrow.classList.toggle(styles.more_button_arrow_open);
    
    const button = parent.querySelector(`.${styles.more_button}`);
    button.classList.toggle(styles.more_button_open);
    
    const button_text = parent.querySelector(`.${styles.more_button_text}`);
    button_text.classList.toggle(styles.more_button_text_open);


  }

  const getCount = (category) => {
    return state.expenses.filter(expense => expense.category === category).length;
  }

  return (
    <div
      className={styles.card}
    >
      {/* OPEN/CLOSE BUTTON */}
      <button
        className={styles.more_button}
        onClick={toggleOpen}
      >
        <h3
          className={styles.more_button_text}
        >
          <span
            className={styles.more_button_arrow}
          >v</span>
          {category === "needs" && "Needs"}
          {category === "wants" && "Wants"}
          {category === "savings" && "Savings"}
          <span
            className={`${styles.category_span} ${styles.count}`}
          >{getCount(category)}</span>  
        </h3>
        
        <div
          className={styles.right_container}
        > 
          <span
            className={`${styles.category_span} ${styles.amount}`}
          >${getExpenseCategorySum(category).amount.toFixed(2)}</span>
          
          <span
            className={`${styles.category_span} ${styles.percent}`}
          >{getExpenseCategorySum(category).percent.toFixed(2)}{'%'}</span>
              
        </div>

      </button>
      
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