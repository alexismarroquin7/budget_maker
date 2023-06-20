"use client";

// components
import { CategoriesAccordion } from "./CategoriesAccordion";
import { CreateExpenseSection } from "./CreateExpenseSection";
import { BudgetTargetSection } from "./BudgetTargetSection";
import { AnalysisSection } from "./AnalysisSection";
import { IncomeForm } from "./IncomeForm";
import { FiltersMenu } from "./FiltersMenu";

// hooks
import { useBudgetMaker } from "@/hooks";

// styles
import styles from "./index.module.css";

export const BudgetMaker = () => {
  
  const {
    state,
    setIncome,
    createExpense,
    updateExpense,
    deleteExpense,
    updateTargets,
    getExpenseCategorySum
  } = useBudgetMaker();

  return (
    <div
      className={styles.budget_maker}
    >
      <h3>Budget Maker</h3>
      
      <IncomeForm 
        income={state.income}
        setIncome={setIncome} 
      />

      <BudgetTargetSection 
        income={state.income}
        targets={state.targets}
        updateTargets={updateTargets}
      />

      <FiltersMenu />
      
      <CreateExpenseSection 
        createExpense={createExpense}
      />
      
      <CategoriesAccordion 
        state={state}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
        getExpenseCategorySum={getExpenseCategorySum}
      />
      
      <AnalysisSection
        income={state.income}
        expenses={state.expenses}
        targets={state.targets}
      />

    </div>
  )
}