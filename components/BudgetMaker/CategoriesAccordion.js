
import { CategoriesAccordionRow } from "./CategoriesAccordionRow";
import styles from "./CategoriesAccordion.module.css"
export const CategoriesAccordion = ({state, updateExpense, deleteExpense, getExpenseCategorySum}) => {

  return (
    <div
      className={styles.accordion}
    >
      <CategoriesAccordionRow
        category={"needs"}
        state={state}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
        getExpenseCategorySum={getExpenseCategorySum}
      />
      <CategoriesAccordionRow
        category={"wants"}
        state={state}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
        getExpenseCategorySum={getExpenseCategorySum}
      />
      <CategoriesAccordionRow
        category={"savings"}
        state={state}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
        getExpenseCategorySum={getExpenseCategorySum}
      />
    </div>
  )
}