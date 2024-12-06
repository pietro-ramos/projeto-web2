import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import Card from '../../components/Card';

const Projects = () => {
    return (
        <section className={styles.projects}>
            
            <div className={styles.projectCard}>
                <h3>Chatbot de Serviços Públicos</h3>
                <p>
                    Um chatbot interativo para consultar informações sobre serviços <br />
                    públicos em cidades do Litoral Norte do RS.
                </p>
                <Link to="/chatbot" className={styles.projectLink}>
                    Acessar Chatbot
                </Link>
            </div>

            <Card />
            <Card />
            <Card />

        </section>
    );
};

export default Projects;