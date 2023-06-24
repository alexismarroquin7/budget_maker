import { KeyboardArrowDown } from "@mui/icons-material";
import styles from "./index.module.css";
import { useState } from "react";

export const Analysis = ({income, expenses, targets}) => {
  // const toggleOpen = (e) => {
  //   const parent = e.currentTarget.parentElement
    
  //   const carrot = parent.querySelector(`.${styles.carrot}`);
  //   carrot.classList.toggle(styles.carrot_open);
    
  //   const target_section_button = parent.querySelector(`.${styles.section_button}`);
  //   target_section_button.classList.toggle(styles.section_button_open);

  //   const details = parent.querySelector(`.${styles.details}`);
  //   details.classList.toggle(styles.details_hidden)
  // }
  
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
  <div
    className={"card"}
  >
    <div
      className={styles.summary}
    >
      <h2 
        className={`${styles.summary_title} ${open ? styles.summary_title_open : ""}`}
      >
        Analysis
      </h2>
      
      <button
        onClick={toggleOpen}
        className={styles.summary_button}
      >
        <KeyboardArrowDown 
          className={`${styles.carrot} ${open ? styles.carrot_open : ""}`}
          fontSize="inherit"
        />
      </button>

    </div>

    {/* HIDDEN BY DEFAULT */}
    <div
      className={`${styles.details} ${open ? "" : styles.details_hidden}`}
    >
      <div
        className={`${styles.card}`}   
      >
        <h3
          className={`${styles.card_title}`}   
        >Total Expenses</h3>
        
        <div
          className={styles.card_tile}
        >
          <p 
            className={styles.card_tile_title}  
          >Count</p>
          <p
            className={styles.number}
          >{expenses.length}</p>
        </div>

        <div
          className={styles.card_tile}
        >
          <p 
            className={styles.card_tile_title}  
          >Amount</p>
          <p
            className={styles.number}
          >${expenses.reduce((acc,curr) => {
            return acc + curr.amount;
            }, 0)}
          </p> 
        </div>
        
        <div
          className={styles.card_tile}
        >
          <p 
            className={styles.card_tile_title}  
          >Percent</p>
          <p
            className={styles.number}
          >{(((expenses.reduce((acc,curr) => {
            return acc + curr.amount;
            }, 0)) / income) * 100).toFixed(2)}{'%'}
          </p> 
          
        </div>
      
        <div
          className={styles.income_bar}
        >
          
        </div>
      
      </div>


    </div>
  </div>
  )
}