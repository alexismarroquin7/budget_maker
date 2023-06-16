
import { CategoriesAccordionRow } from "./CategoriesAccordionRow";

export const CategoriesAccordion = ({state, updateExpense, deleteExpense}) => {

  return (
    <div>
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