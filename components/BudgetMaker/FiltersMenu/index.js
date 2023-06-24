import { useEffect, useState } from "react";

import {
  FilterList as FilterListIcon,
  Close as CloseIcon
} from '@mui/icons-material';

import styles from "./index.module.css";
export const FiltersMenu = () => {
  
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const handleClick = (e) => {
    toggleOpen();
  }

  useEffect(() => {
    document.querySelector('body').style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div>
      <button
        className={`button button--outlined ${styles.filters_button}`}
        onClick={handleClick}
      >
        <FilterListIcon fontSize="inherit"/>
        Filters
      </button>
      
      <div
        className={`${styles.menu} ${open ? "" : styles.menu_hidden}`}
        onClick={(e) => {
          if(!e.currentTarget.classList.contains(styles.menu_hidden)) {
            toggleOpen();
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
            <h3>Filters</h3>
            <button className="icon_button"
              onClick={toggleOpen}
            >
              <CloseIcon fontSize="inherit"/>
            </button>
          </div>

          <label
            className={`${styles.label}`}
          >
            Group By
            
            <select
              className={`${styles.select}`}
            >
              <option>Category</option>
              <option>All</option>
            </select>
          
          </label>
          
          <label
            className={`${styles.label}`}
          >
            Sort Order
            <select
              className={`${styles.select}`}
            >
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          
          </label>
          
          <label
            className={`${styles.label}`}
          >
            Sort By
            <select
              className={`${styles.select}`}
            >
              <option>Amount</option>
              <option>Name</option>
            </select>
          
          </label>
          
          <div>
            <button
              className="button button--contained"
            >Apply</button>
            <button
              className="button button--outlined"
            >Cancel</button>
          </div>
        </div>

      </div>
    
    </div>
  )
}