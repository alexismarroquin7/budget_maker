import { useEffect, useState } from "react";
import styles from "./index.module.css";
import {
  Add as AddIcon,
  Close as CloseIcon
} from '@mui/icons-material';

const initialCount = { needs: 0, wants: 0, savings: 0 };

export const CreateExpenseMenu = ({createExpenses}) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const [count, setCount] = useState(initialCount);

  const handleAddCount = (e) => {
    e.preventDefault();
    setCount({
      ...count,
      [e.target.name]: count[e.target.name] + 1
    })
  }

  const handleCreateExpenses = (e) => {
    e.preventDefault();
    createExpenses(count);
    setCount(initialCount);
    toggleOpen();
  }

  useEffect(() => {
    document.querySelector('body').style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      className={styles.container}
    >
      <button
        className={`button button--contained ${styles.menu_button}`}
        onClick={toggleOpen}
      >
        <AddIcon fontSize="inherit"/>
        Expense
      </button>
      
      <div
        className={`${styles.menu} ${open ? "" : styles.menu_hidden}`}
        onClick={(e) => {
          if(!e.currentTarget.classList.contains(styles.menu_hidden)) {
            toggleOpen();
            setCount(initialCount);
          }
        }}
      >
        <div
          className={`${styles.menu_card}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className={`${styles.menu_card_top}`}
            
          >
            <h3>Create Expense</h3>
            <button
              className={`icon_button`}
              onClick={() => {
                toggleOpen();
                setCount(initialCount);
              }}
            >
              <CloseIcon fontSize="inherit"/>
            </button>
          </div>
          
          <div
            className={styles.menu_card_options}
          >

            <button
              className={`${styles.option_button}`}
              name="needs"
              onClick={handleAddCount}
            >
              Need
              <span
                className={styles.option_button_count}
              >
                {count.needs === 0 ? count.needs : `+ ${count.needs}`}
              </span>
            </button>
            <button
              className={`${styles.option_button}`}
              name="wants"
              onClick={handleAddCount}
            >
              Want
              <span
                className={styles.option_button_count}
              >
                {count.wants === 0 ? count.wants : `+ ${count.wants}`}
              </span>
            </button>
            <button
              className={`${styles.option_button}`}
              name="savings"
              onClick={handleAddCount}
            >
              Saving
              <span
                className={styles.option_button_count}
              >
                {count.savings === 0 ? count.savings : `+ ${count.savings}`}
              </span>
            </button>
          </div>
          
          <div
            className={styles.menu_card_actions}
          >
            <button
              className={`${styles.menu_card_action_button}`}

              name="savings"
              onClick={handleCreateExpenses}
            >Create</button>
            
            <button
              className={`${styles.menu_card_action_button} ${styles.secondary}`}
              name="savings"
              onClick={handleCreateExpenses}
            >Cancel</button>
          </div>
        </div>

      </div>
    </div>
  )
}