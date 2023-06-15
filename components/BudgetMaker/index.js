"use client";
import { useBudgetMaker } from "@/hooks/useBudgetMaker"
import styles from "./index.module.css";
import { CategoriesAccordion } from "./CategoriesAccordion";

export const BudgetMaker = () => {
  
  const {
    state,
    setIncome,
    createExpense
  } = useBudgetMaker();
  
  const handleChange = (e) => {
    setIncome(Number(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome(Number(e.target.value));
  }

  return (
    <div
      className={styles.budget_maker}
    >
      <form
        onSubmit={handleSubmit}
      >
        <label>Income
          <input
            type="number"
            value={parseInt(state.income)}
            onChange={handleChange}
            min={0}
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>

      <div>
        <p>Needs: {state.income * .5}</p>
        <p>Wants: {state.income * .3}</p>
        <p>Savings: {state.income * .2}</p>
      </div>

      <div
        className={styles.action_container}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            createExpense('needs');
          }}
        >+ Need</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            createExpense('wants');
          }}
        >+ Want</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            createExpense('savings');
          }}
        >+ Saving</button>
      </div>

      <CategoriesAccordion state={state} />

    </div>
  )
}