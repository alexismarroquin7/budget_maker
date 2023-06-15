export const ExpenseItem = ({expense}) => {
  return (
    <div>
      <p>{expense.name === "" ? "Untitled" : expense.name}</p>
    </div>
  )
}