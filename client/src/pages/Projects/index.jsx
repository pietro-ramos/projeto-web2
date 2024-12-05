// src/pages/Projects.jsx
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={styles.projects}>
            {/* Existing projects content */}
            
            {/* Add the chatbot project card */}
            <div className={styles.projectCard}>
                <h3>Chatbot de Serviços Públicos</h3>
                <p>
                    Um chatbot interativo para consultar informações sobre serviços 
                    públicos em cidades do Litoral Norte do RS.
                </p>
                <Link to="/chatbot" className={styles.projectLink}>
                    Acessar Chatbot
                </Link>
            </div>
            
            {/* Other project cards */}
        </section>
    );
};

export default Projects;