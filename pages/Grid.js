import styles from '../styles/Grid.module.css';
function Grid() {
    return (
        <div className={styles.container}>
            <div className={ `${styles.cell1} ${styles.cell}` }>1.</div>
            <div className={ `${styles.cell2} ${styles.cell}` }>2.</div>
            <div className={ `${styles.cell3} ${styles.cell}` }>3.</div>
            <div className={ `${styles.cell4} ${styles.cell}` }>4.</div>
            <div className={ `${styles.cell5} ${styles.cell}` }></div>
            <div className={ `${styles.cell6} ${styles.cell}` }>6.</div>
            <div className={ `${styles.cell7} ${styles.cell}` }>7.</div>
            <div className={ `${styles.cell8} ${styles.cell}` }>8.</div>
            <div className={ `${styles.cell9} ${styles.cell}` }>9.</div> 
        </div>
    );
}

export default Grid;

