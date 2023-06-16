import { useEffect } from "react";
import { useForm } from "@/hooks";
import styles from "./IncomeForm.module.css"
export const IncomeForm = ({ setIncome, income }) => {
  const onSubmit = () => {
    setIncome(Number(formValues.income));
  }

  const { formValues, handleChange, handleSubmit } = useForm({income: income}, onSubmit);

  useEffect(() => {
    if(formValues.income === -1){
      handleChange({
        target: {
          name: "income",
          value: income
        }
      })
    }
  }, [formValues.income, income, handleChange])

  return (
  <form
    onSubmit={handleSubmit}
    className={styles.form}
  >
    <label
      className={styles.label}
    >
      <span>
        INCOME
      </span>
      <input
        className={styles.input}
        type="number"
        name="income"
        value={formValues.income}
        onChange={handleChange}
        min={0}
      />
    </label>
    <button
      type="submit"
      className={styles.submit_button}
    >
      Submit
    </button>
  </form>
  )
}