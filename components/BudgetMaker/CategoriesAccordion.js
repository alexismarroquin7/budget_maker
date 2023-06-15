import { ExpenseItem } from "./ExpenseItem";
import styles from "./CategoriesAccordion.module.css";

export const CategoriesAccordion = ({state}) => {
  return (
    <div>
      <div>
        <button
          className={styles.expand_category_button}
        ><p>V</p> Needs</button>
        <div className={`${styles.expense_category_list} ${styles.expense_category_list_hidden}`}>
          {state.expenses
          .filter(expense => expense.category === 'needs')
          .map(expense => {
            return <ExpenseItem key={expense.id} expense={expense}/>
          })}
        </div>
      </div>
      
      <div>
        <button
          className={styles.expand_category_button}
          onClick={(e) => {
            const node = e.currentTarget.parentElement.querySelector(`.${styles.expense_category_list_hidden}`);
            console.log(node)
            node.classList.toggle(styles.expense_category_list_hidden);
          }}
        ><p>V</p> Wants</button>
        <div className={`${styles.expense_category_list} ${styles.expense_category_list_hidden}`}>
          {state.expenses
          .filter(expense => expense.category === 'wants')
          .map(expense => {
            return <ExpenseItem key={expense.id} expense={expense}/>
          })}
        </div>
      </div>
      
      <div>
        <button
          className={styles.expand_category_button}
        ><p>V</p> Savings</button>
        <div className={`${styles.expense_category_list} ${styles.expense_category_list_hidden}`}>
          {state.expenses
          .filter(expense => expense.category === 'savings')
          .map(expense => {
            return <ExpenseItem key={expense.id} expense={expense}/>
          })}
        </div>
      </div>
    </div>
  )
}