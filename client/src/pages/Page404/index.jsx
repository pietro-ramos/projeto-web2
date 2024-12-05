import { React } from 'react';
import styles from './Page404.module.css';


const Page404 = () => {
    return (
        <>
        <h2 className={styles.title2}>Something wrong is not right!</h2>
        <div className={styles.texts}>
        <span className={styles.large_text}>404</span> <br />
        <strong className={styles.red_text}>Page not found</strong>
        </div>
        </>
    );
}

export default Page404;
