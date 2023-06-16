import styles from "./AnalysisSection.module.css";

export const AnalysisSection = () => {
  const toggleOpen = (e) => {
    const parent = e.currentTarget.parentElement
    
    const carrot = parent.querySelector(`.${styles.carrot}`);
    carrot.classList.toggle(styles.carrot_open);
    
    const target_section_button = parent.querySelector(`.${styles.section_button}`);
    target_section_button.classList.toggle(styles.section_button_open);

    const details = parent.querySelector(`.${styles.details}`);
    details.classList.toggle(styles.details_hidden)
  }

  return (
  <div
    className={styles.section}
  >
    
    <button
      onClick={toggleOpen}
      className={styles.section_button}
    >
      <span
        className={styles.carrot}
      >V</span>
      Analysis
    </button>

    {/* HIDDEN BY DEFAULT */}
    <div
      className={`${styles.details} ${styles.details_hidden}`}
    >

    </div>



  </div>
  )
}