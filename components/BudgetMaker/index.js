"use client";

// components
import { CategoriesAccordion } from "./CategoriesAccordion";

// hooks
import { useBudgetMaker, useForm } from "@/hooks";
import { useEffect } from "react";

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
    deleteExpense
  } = useBudgetMaker();

  return (
    <div
      className={styles.budget_maker}
    >
      <IncomeForm setIncome={setIncome} income={state.income}/>
      <BudgetTargetSection income={state.income} />
      <CreateExpenseSection createExpense={createExpense}/>
      <CategoriesAccordion state={state} updateExpense={updateExpense} deleteExpense={deleteExpense}/>
      <AnalysisSection/>

    </div>
  )
}