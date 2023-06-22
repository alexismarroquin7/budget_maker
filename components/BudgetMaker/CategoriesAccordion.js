
import { ToggleCategory } from "./ToggleCategory";

import styles from "./CategoriesAccordion.module.css"

export const CategoriesAccordion = ({state, updateExpense, deleteExpense, getExpenseCategorySum}) => {

  return (
    <div
      className={styles.accordion}
    >
      <ToggleCategory
        category={"needs"}
        expenses={
          state.expenses
          .filter(exp => {
            return exp.category === "needs"
          })
          .sort((a, b) => b.amount - a.amount)
        }
        income={state.income}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
        getExpenseCategorySum={getExpenseCategorySum}
      />
      <ToggleCategory
        category={"wants"}
        expenses={
          state.expenses
          .filter(exp => {
            return exp.category === "wants"
          })
          .sort((a, b) => b.amount - a.amount)
        }
        income={state.income}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
        getExpenseCategorySum={getExpenseCategorySum}
      />
      <ToggleCategory
        category={"savings"}
        expenses={
          state.expenses
          .filter(exp => {
            return exp.category === "savings"
          })
          .sort((a, b) => b.amount - a.amount)
        }
        income={state.income}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
        getExpenseCategorySum={getExpenseCategorySum}
      />
    </div>
  )
}