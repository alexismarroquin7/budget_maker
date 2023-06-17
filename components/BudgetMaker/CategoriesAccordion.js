
import { CategoriesAccordionRow } from "./CategoriesAccordionRow";
import styles from "./CategoriesAccordion.module.css"
export const CategoriesAccordion = ({state, updateExpense, deleteExpense}) => {

  return (
    <div
      className={styles.accordion}
    >
      <CategoriesAccordionRow
        category={"needs"}
        state={state}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
      />
      <CategoriesAccordionRow
        category={"wants"}
        state={state}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
      />
      <CategoriesAccordionRow
        category={"savings"}
        state={state}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
      />
    </div>
  )
}