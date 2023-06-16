import { ExpenseItem } from "./ExpenseItem";
import styles from "./CategoriesAccordionRow.module.css";

export const CategoriesAccordionRow = ({state, category, updateExpense, deleteExpense}) => {

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

  const getSum = (category, format = false) => {
    let sum = state.expenses
    .filter(expense => expense.category === category)
    .reduce((acc, curr) => {
      return acc += curr.amount;
    }, 0);

    if (format) {
      sum = sum.toFixed(2);
    }

    return sum;
  }

  const getPercent = (category, format) => {
    
    
    const sum = getSum(category);
    let res = (sum / state.income) * 100;
    
    if (format) {
      res = res.toFixed(2);
    }

    return res;
  }

  const getLimitUsed = (usage, limit) => {

    let res = "";
    
    if(usage < limit) {
      res = `Bellow Limit: ${limit - usage}`
    } else if (usage > limit) {
      res = `Above Limit: ${usage - limit}`
    } else {
      res = `At Limit: ${usage - limit}`
    }

    return res;
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
        >V</span>
        {category === "needs" && "Needs"}
        {category === "wants" && "Wants"}
        {category === "savings" && "Savings"}
      </button>
      
      {/* COUNT, SUM, PERCENT */}
      <div
        className={styles.category_span_container}
      >
        <span
          className={styles.category_span}
        >Count:{' '}
          {getCount(category)}
        </span>
        
        <span
          className={styles.category_span}
        >Sum:{' '}
          ${getSum(category, false)}
        </span>
        
        <span
          className={styles.category_span}
        >Percent:{' '}
          {getPercent(category, true)}{'%'}
        </span>
        
        <span
          className={styles.category_span}
        >
          {getLimitUsed(getSum(category), state.targets[category].amount)}
        </span>
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