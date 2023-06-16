"use client";

// components
import { CategoriesAccordion } from "./CategoriesAccordion";

// hooks
import { useBudgetMaker, useForm } from "@/hooks";
import { useEffect } from "react";

// styles
import styles from "./index.module.css";

export const BudgetMaker = () => {
  
  const {
    state,
    setIncome,
    createExpense,
    updateExpense,
    deleteExpense
  } = useBudgetMaker();

  const onSubmit = () => {
    setIncome(Number(formValues.income));
  }

  const { formValues, handleChange, handleSubmit } = useForm({income: -1}, onSubmit);

  useEffect(() => {
    if(formValues.income === -1){
      handleChange({
        target: {
          name: "income",
          value: state.income
        }
      })
    }
  }, [formValues.income, state.income, handleChange])

  return (
    <div
      className={styles.budget_maker}
    >
      {/* SET INCOME FORM */}
      <form
        onSubmit={handleSubmit}
        className={styles.income_form}
      >
        <label
          className={styles.income_label}
        >
          <span>
            INCOME
          </span>
          <input
            className={styles.income_input}
            type="number"
            name="income"
            value={formValues.income}
            onChange={handleChange}
            min={0}
          />
        </label>
        <button
          type="submit"
          className={styles.income_submit_button}
        >
          Submit
        </button>
      </form>

      {/* INCOME TARGETS: 50, 30, 20 */}
      <div>
        <p>Needs: {state.income * .5}</p>
        <p>Wants: {state.income * .3}</p>
        <p>Savings: {state.income * .2}</p>
      </div>

      {/* CREATE EXPENSE BUTTONS CONTAINER */}
      <div
        className={styles.action_container}
      >
        <button
          className={`${styles.create_expense_button} ${styles.create_expense_button_needs}`}
          onClick={(e) => {
            e.preventDefault();
            createExpense('needs');
          }}
        >+ Need</button>
        <button
          className={`${styles.create_expense_button} ${styles.create_expense_button_wants}`}
          onClick={(e) => {
            e.preventDefault();
            createExpense('wants');
          }}
        >+ Want</button>
        <button
          className={`${styles.create_expense_button} ${styles.create_expense_button_savings}`}
          onClick={(e) => {
            e.preventDefault();
            createExpense('savings');
          }}
        >+ Saving</button>
      </div>

      <CategoriesAccordion state={state} updateExpense={updateExpense} deleteExpense={deleteExpense}/>

    </div>
  )
}