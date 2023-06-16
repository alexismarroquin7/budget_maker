import { ExpenseItem } from "./ExpenseItem";
import styles from "./CategoriesAccordion.module.css";

export const CategoriesAccordion = ({state, updateExpense, deleteExpense}) => {
  
  const toggleExpenseCategory = (e) => {
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

  return (
    <div>

      {/* NEEDS SECTION */}
      <div
        className={styles.category_accoridion_item}
      >
        {/* NEEDS SECTION BUTTON */}
        <button
          className={styles.expand_category_button}
          onClick={toggleExpenseCategory}
        >
          <span
            className={styles.expand_category_button_carrot}
          >V</span>
          Needs
        </button>
        
        {/* COUNT, SUM, PERCENT */}
        <div
          className={styles.category_span_container}
        >
          <span
            className={styles.category_span}
          >Count:{' '}
            {getCount('needs')}
          </span>
          
          <span
            className={styles.category_span}
          >Sum:{' '}
            ${getSum('needs', true)}
          </span>
          
          <span
            className={styles.category_span}
          >Percent:{' '}
            {getPercent('needs', true)}{'%'}
          </span>
        </div>
        
        {/* LIST */}
        <div className={`${styles.expense_category_list} ${styles.expense_category_list_hidden}`}>
          {state.expenses
          .filter(expense => expense.category === 'needs')
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
      
      {/* WANTS SECTION */}
      <div
        className={styles.category_accoridion_item}
      >
        {/* WANTS SECTION BUTTON */}
        <button
          className={styles.expand_category_button}
          onClick={toggleExpenseCategory}
        >
          <span
            className={styles.expand_category_button_carrot}
          >V</span>
          Wants
        </button>
        
        {/* COUNT, SUM, PERCENT */}
        <div
          className={styles.category_span_container}
        >
          <span
            className={styles.category_span}
          >Count:{' '}
            {getCount('wants')}
          </span>
          
          <span
            className={styles.category_span}
          >Sum:{' '}
            ${getSum('wants', true)}
          </span>
          
          <span
            className={styles.category_span}
          >Percent:{' '}
            {getPercent('wants', true)}{'%'}
          </span>
        </div>
        
        {/* LIST */}
        <div className={`${styles.expense_category_list} ${styles.expense_category_list_hidden}`}>
          {state.expenses
          .filter(expense => expense.category === 'wants')
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
      
      {/* SAVINGS SECTION */}
      <div
        className={styles.category_accoridion_item}
      >
        {/* SAVINGS SECTION BUTTON */}
        <button
          className={styles.expand_category_button}
          onClick={toggleExpenseCategory}
        >
          <span
            className={styles.expand_category_button_carrot}
          >V</span>
          Savings
        </button>
        
        {/* COUNT, SUM, PERCENT */}
        <div
          className={styles.category_span_container}
        >
          <span
            className={styles.category_span}
          >Count:{' '}
            {getCount('savings')}
          </span>
          
          <span
            className={styles.category_span}
          >Sum:{' '}
            {getSum('savings')}
          </span>
          
          <span
            className={styles.category_span}
          >Percent:{' '}
            {getPercent('savings')}{'%'}
          </span>
        </div>
        
        {/* LIST */}
        <div className={`${styles.expense_category_list} ${styles.expense_category_list_hidden}`}>
          {state.expenses
          .filter(expense => expense.category === 'savings')
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
    </div>
  )
}