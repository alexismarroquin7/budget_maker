"use client";

// components
import { CategoriesAccordion } from "./CategoriesAccordion";
import { Targets } from "./Targets";
import { AnalysisSection } from "./AnalysisSection";
import { Income } from "./Income";
import { FiltersMenu } from "./FiltersMenu";
import { CreateExpenseMenu } from "./CreateExpenseMenu";

// hooks
import { useBudgetMaker } from "@/hooks";

// styles
import styles from "./index.module.css";

export const BudgetMaker = () => {
  
  const {
    state,
    setIncome,
    createExpenses,
    updateExpense,
    deleteExpense,
    updateTargets,
    getExpenseCategorySum
  } = useBudgetMaker();

  return (
    <div
      className={styles.budget_maker}
    >
      <h1>Budget Maker</h1>
      
      <Income 
        income={state.income}
        setIncome={setIncome} 
      />

      <Targets 
        income={state.income}
        targets={state.targets}
        updateTargets={updateTargets}
      />

      <FiltersMenu />
      
      <CreateExpenseMenu
        createExpenses={createExpenses}
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