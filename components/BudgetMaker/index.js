"use client";

// components
import { CategoriesAccordion } from "./CategoriesAccordion";

// hooks
import { useBudgetMaker } from "@/hooks";

// styles
import styles from "./index.module.css";
import { CreateExpenseSection } from "./CreateExpenseSection";
import { BudgetTargetSection } from "./BudgetTargetSection";
import { AnalysisSection } from "./AnalysisSection";
import { IncomeForm } from "./IncomeForm";

export const BudgetMaker = () => {
  
  const {
    state,
    setIncome,
    createExpense,
    updateExpense,
    deleteExpense,
    updateTargets
  } = useBudgetMaker();

  return (
    <div
      className={styles.budget_maker}
    >
      <h3>Budget Maker</h3>
      
      <IncomeForm setIncome={setIncome} income={state.income}/>
      <BudgetTargetSection income={state.income} targets={state.targets} updateTargets={updateTargets}/>
      <CreateExpenseSection createExpense={createExpense}/>
      <CategoriesAccordion state={state} updateExpense={updateExpense} deleteExpense={deleteExpense}/>
      <AnalysisSection/>

    </div>
  )
}