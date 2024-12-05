import { React } from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="/"><span>pietroRamos.dev</span></a>
            <nav>
                <a href="home"> Home </a>
                <a href="projects"> Projects </a>
                <a href="about"> About </a>
                <a href="contact"> Contact </a>
            </nav>
        </header>
    );
};

export default Header;