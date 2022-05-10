import styles from '../styles/Grid.module.css';
import { Form } from 'semantic-ui-react';

function Grid() {
    return (
        <div className={styles.container}>
            <div className={`${styles.cell} ${styles.cell1}`}>Hi man</div>
            <div className={`${styles.cell} ${styles.cell2}`}>Hi man</div>
            <div className={`${styles.cell} ${styles.cell3}`}>Hi man</div>
            <div className={`${styles.cell} ${styles.cell4}`}>Hi man</div>
            <div className={`${styles.cell} ${styles.cell5}`}>Hi man</div>
            <div className={`${styles.cell} ${styles.cell6}`}>Hi man</div>
            <div className={`${styles.cell} ${styles.cell7}`}>Hi man</div>
            <div className={`${styles.cell} ${styles.cell8}`}>Hi man</div>
            <div className={`${styles.cell} ${styles.cell9}`}>Hi man</div>
        </div>
    );
}

export default Grid;

