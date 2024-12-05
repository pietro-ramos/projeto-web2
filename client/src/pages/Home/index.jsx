import { React } from "react";
import styles  from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.introduction}>
            <p>
                Hello! I'm
                <span><br />
                Pietro Ramos
                </span><br />
                Backend Developer<br /> & Data Scientist
            </p>
                <Link to="/about" className={`${styles.btn} ${styles.btn_red}`}>
                    About me
                </Link>
            </div>
            <figure>
            <img className={styles.img_home} src="/developer-red.svg" alt="Home Image" />
            </figure>
        </section>
    );
}

export default Home;