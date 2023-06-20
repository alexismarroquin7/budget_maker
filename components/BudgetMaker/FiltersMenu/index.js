import { useState } from "react";

import {
  FilterList as FilterListIcon
} from '@mui/icons-material';

import styles from "./index.module.css";
export const FiltersMenu = () => {
  
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const handleClick = (e) => {
    toggleOpen();
  }

  return (
    <div>
      <button
        className={`${styles.filters_button}`}
        onClick={handleClick}
      >
        <FilterListIcon fontSize="inherit"/>
        Filters
      </button>
      
      <div
        className={`${styles.menu} ${open ? "" : styles.menu_hidden}`}
        onClick={(e) => {
          if(!e.currentTarget.classList.contains(styles.menu_hidden)) {
            e.currentTarget.classList.toggle(styles.menu_hidden);
          }
        }}
      >
        
        <div
          className={`${styles.menu_card}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h3>Filters</h3>

          <label
            className={`${styles.label}`}
          >
            Group By
            
            <select
              className={`${styles.select}`}
            >
              <option>--select--</option>
              <option>expense</option>
              <option>category</option>
            </select>
          
          </label>
        
        </div>

      </div>
    
    </div>
  )
}